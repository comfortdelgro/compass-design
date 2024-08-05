'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  type DialogHTMLAttributes,
  type MouseEvent,
} from 'react'
import {useDrag, type DraggableOptions} from '../utils'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DRAWER_CLASSES,
  DRAWER_CSS_VARIABLES,
  DRAWER_SCALE_OFFSET,
} from './constants'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import DrawerMobileContent from './drawer-mobile-content'
import {useBackDropStyling, useScaleEffect} from './hooks'
import drawerExpanderStyles from './styles/drawer-expander.module.css'
import drawerMobileStyles from './styles/drawer-mobile.module.css'
import type {DrawerMobileProps, DrawerRef} from './types'
import {drawerPickChild, resetElementStyles, updateElementStyles} from './utils'

const DrawerMobile = forwardRef<
  DrawerRef,
  DrawerMobileProps & DialogHTMLAttributes<HTMLDialogElement>
>((props, ref) => {
  const {
    drawerMode = 'modal',
    variant,
    open = false,
    onMouseDown,

    // styling
    className = '',
    classNames: classes,
    styles,
    backdropProps,

    // behavior options
    disableResize = false,
    disableDragClose = false,
    preventClose = false,
    preventFocus = false,

    // scale effect options
    enableScaleLayer = false,
    scaleLayerOffset = DRAWER_SCALE_OFFSET,
    scaleLayerClassName = DRAWER_CLASSES.SCALE_DOCUMENT,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    snapPoints: _,

    children,
    ...dialogHTMLAttributes
  } = props
  const enableScaleEffect = drawerMode === 'modal' && enableScaleLayer
  const DrawerRef = useDOMRef<DrawerRef>(ref)
  // const [drawerHeight, setDrawerHeight] = useState(
  //   DrawerRef.current?.offsetHeight ?? 0,
  // )
  // const viewPortHeight =
  //   typeof window !== 'undefined' ? window.innerHeight : drawerHeight

  // const snapPoints = useSnapPoints(DrawerRef, rawSnapPoints, viewPortHeight)

  const {matchedNode: DrawerHeaderElement, rest: OtherElementsExceptHeader} =
    drawerPickChild(children, DrawerHeader, {
      className: classes?.header,
      style: styles?.header,
    })

  const {matchedNode: DrawerFooterElement, rest: OtherElements} =
    drawerPickChild(OtherElementsExceptHeader, DrawerFooter, {
      className: classes?.footer,
      style: styles?.footer,
    })

  const {scaleElement, getScaleValue, controlScaleEffect} = useScaleEffect({
    enable: enableScaleEffect,
    scaleLayerClassName,
    scaleLayerOffset,
  })

  const handleCloseDrawer = useCallback(
    (dialogReturnValue?: string) => {
      if (typeof document === 'undefined' || !DrawerRef.current) {
        return
      }

      controlScaleEffect(false)
      DrawerRef.current.close(dialogReturnValue)
    },
    [DrawerRef, controlScaleEffect],
  )

  const {backdropStyles} = useBackDropStyling(DrawerRef, backdropProps)
  const backdropOpacity =
    backdropStyles[DRAWER_CSS_VARIABLES.BACKDROP_OPACITY] ?? 1

  const handleDragging = useCallback<NonNullable<DraggableOptions['onMove']>>(
    (targetRef, position) => {
      if (enableScaleEffect && scaleElement) {
        const draggedDistance = position.y
        if (draggedDistance > 0) {
          // dragging down ↓

          const targetDrawerHeight =
            targetRef.current?.getBoundingClientRect().height ?? 1
          const percentageDragged = draggedDistance / targetDrawerHeight
          const initScaleValue = getScaleValue()
          const scaleValue = Math.min(
            initScaleValue + percentageDragged * (1 - initScaleValue),
            1,
          )
          const translateValue = Math.max(
            0,
            scaleLayerOffset - percentageDragged * scaleLayerOffset,
          )

          updateElementStyles(scaleElement, {
            'border-radius': `${(8 - percentageDragged * 8).toFixed(2)}px`,
            transform: `scale(${scaleValue}) translate3d(0, calc(env(safe-area-inset-top) + ${translateValue}px), 0)`,
            transition: 'none',
          })
          updateElementStyles(
            targetRef.current,
            {
              [DRAWER_CSS_VARIABLES.BACKDROP_OPACITY]: Math.min(
                1 - percentageDragged,
                backdropOpacity,
              ).toFixed(2),
              [DRAWER_CSS_VARIABLES.BACKDROP_TRANSITION]: 'none',
            },
            {cache: 'once'},
          )
        } else {
          // dragging up ↑ or in default position (0,0)

          resetElementStyles(scaleElement, [
            'transform',
            'border-radius',
            'transition',
          ])
          resetElementStyles(targetRef.current)
        }
      }
    },
    [
      enableScaleEffect,
      scaleElement,
      getScaleValue,
      scaleLayerOffset,
      backdropOpacity,
    ],
  )

  const handleDragEnd = useCallback<NonNullable<DraggableOptions['onEnd']>>(
    (targetRef, position, setPosition) => {
      const draggedDistance = position.y
      if (draggedDistance > 0) {
        // dragging down ↓

        const isDragOverClosableLine = position.y > 200
        if (enableScaleEffect && scaleElement) {
          resetElementStyles(scaleElement, [
            'transform',
            'border-radius',
            'transition',
          ])
          resetElementStyles(targetRef.current)
        }

        // Close the drawer if the user drag the drawer to the bottom of screen
        if (!disableDragClose && isDragOverClosableLine) {
          handleCloseDrawer()
        } else {
          setPosition({x: 0, y: 0}, {skipCalulateStep: true, transition: true})
        }
      }
    },
    [enableScaleEffect, scaleElement, disableDragClose, handleCloseDrawer],
  )

  const {setPosition: setDragPosition} = useDrag({
    targetRef: DrawerRef,
    direction: 'vertical',
    limit: {y: {min: 0}},
    // limit: {y: {min: -(viewPortHeight - -drawerHeight - 32)}},
    onMove: handleDragging,
    onEnd: handleDragEnd,
    decelerationEffect: true,
    // ignorePointerCancel: true,
    addBrowserHintStyles: false,
  })

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDialogElement>) => {
      if (!DrawerRef.current) {
        return
      }

      onMouseDown?.(e)
      if (!(e.target instanceof HTMLDialogElement) || preventClose) {
        return
      }

      // Close the drawer if the user click to the dialog elements itself (eg: the backdrop)
      if (e.target.nodeName === 'DIALOG') {
        handleCloseDrawer('dismiss')
      }
    },
    [DrawerRef, onMouseDown, preventClose, handleCloseDrawer],
  )

  useEffect(() => {
    if (typeof document === 'undefined' || !DrawerRef.current) {
      return
    }

    const DrawerElement = DrawerRef.current
    if (!open) {
      handleCloseDrawer()
      return
    }

    if (preventFocus) {
      DrawerElement.setAttribute('inert', '')
    }

    controlScaleEffect(true)
    setDragPosition({x: 0, y: 0}, {skipCalulateStep: true})
    drawerMode === 'modal' ? DrawerElement.showModal() : DrawerElement.show()
    DrawerElement.removeAttribute('inert')
  }, [
    open,
    DrawerRef,
    preventFocus,
    handleCloseDrawer,
    drawerMode,
    controlScaleEffect,
    setDragPosition,
  ])

  // useEffect(() => {
  //   if (typeof window === 'undefined' || !DrawerRef.current) {
  //     return
  //   }

  //   const resizeObserver = new ResizeObserver((entries) => {
  //     setDrawerHeight(entries[0].target.getBoundingClientRect().height)
  //   })

  //   resizeObserver.observe(DrawerRef.current)
  //   return () => resizeObserver.disconnect()
  // }, [DrawerRef])

  return (
    <dialog
      ref={DrawerRef}
      {...dialogHTMLAttributes}
      className={classNames(
        drawerMobileStyles.drawer,
        drawerMobileStyles[drawerMode],
        drawerMobileStyles[variant],
        enableScaleEffect ? drawerMobileStyles.enableScaleEffect : '',
        DRAWER_CLASSES.ROOT,
        classes?.root ?? '',
        className,
      )}
      onMouseDown={handleMouseDown}
      onCancel={preventClose ? (e) => e.preventDefault() : undefined}
      style={dialogHTMLAttributes.style || styles?.root}
    >
      {!disableResize && (
        <div
          className={classNames(
            drawerExpanderStyles.drawerExpander,
            'cdg-drawer-expander',
          )}
          onDoubleClick={() => handleCloseDrawer()}
        >
          <div
            className={classNames(
              drawerExpanderStyles.expanderLine,
              'cdg-drawer-expander-line',
            )}
          ></div>
        </div>
      )}

      {DrawerHeaderElement}

      <DrawerMobileContent className={classes?.content} style={styles?.content}>
        {OtherElements}
      </DrawerMobileContent>

      {DrawerFooterElement}
    </dialog>
  )
})

export default DrawerMobile
