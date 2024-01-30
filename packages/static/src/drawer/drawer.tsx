/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  forwardRef,
  MouseEvent,
  ReactEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import DrawerExpander, {DrawerExpanderProps} from './drawer-expander'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import {drawerPickChild} from './drawer-pick-child'
import styles from './styles/drawer.module.css'
import {DrawerProps, DrawerRef} from './types'

const DEFAULT_EXPANDED_POINT = 100
const DEFAULT_EXPANDABLE_LINE = 67

const Drawer = forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  const viewPortHeight =
    typeof window !== 'undefined' ? window.innerHeight : undefined

  const {
    drawerMode = 'modal',
    className = '',
    css = {},
    style,
    children,

    open = false,
    onClose,
    onMouseDown,
    preventFocus = false,
    preventClose = false,

    variant = 'default',
    position: drawerPosition = 'right',

    // H5 drawer props
    expanderCSS = {},
    onExpandChange,
    onHeightChange,
    expandedPoint: expandPoint = DEFAULT_EXPANDED_POINT,
    expandableLine: expandLine = DEFAULT_EXPANDABLE_LINE,
    disableResize = false,
    disableDragClose = false,

    // the rest
    ...htmlDialogAttributes
  } = props

  const position: DrawerProps['position'] =
    variant === 'h5' ? 'bottom' : drawerPosition
  const DrawerRef = useDOMRef<DrawerRef>(ref)
  const DrawerElement = DrawerRef.current

  const [drawerInitHeight, setDrawerInitHeight] = useState(0)
  const [drawerStartingHeight, setDrawerStartingHeight] = useState<number>()
  const [drawerHeight, setDrawerHeight] = useState(
    DrawerElement?.offsetHeight || 0,
  )
  const [isExpanded, setIsExpanded] = useState(false)

  const {expandedPosition, expandablePosition} = useMemo(() => {
    if (!viewPortHeight) {
      return {
        expandedPosition: 0,
        expandablePosition: 0,
      }
    }

    const initializeHeight = Math.floor(
      (drawerInitHeight / viewPortHeight) * 100,
    )
    let expandedPoint =
      expandPoint > 100 || expandPoint < 0
        ? DEFAULT_EXPANDED_POINT
        : expandPoint
    let expandableLine =
      expandLine > 100 || expandLine < 0 ? DEFAULT_EXPANDABLE_LINE : expandLine

    if (expandedPoint < initializeHeight) {
      expandedPoint = initializeHeight
    }

    if (expandedPoint < expandableLine) {
      expandableLine = expandedPoint
    }

    return {
      expandedPosition: Math.floor(viewPortHeight * (expandedPoint / 100)),
      expandablePosition: Math.floor(viewPortHeight * (expandableLine / 100)),
    }
  }, [expandPoint, expandLine, viewPortHeight, drawerInitHeight])

  const handleCloseDrawer = useCallback(
    (dialogReturnValue?: string) => {
      if (typeof document === 'undefined' || !DrawerElement) {
        return
      }

      setDrawerHeight(drawerInitHeight)
      setDrawerStartingHeight(drawerInitHeight)
      DrawerElement.close(dialogReturnValue)
    },
    [DrawerElement, drawerInitHeight],
  )

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDialogElement>) => {
      if (!DrawerElement) {
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
    [DrawerElement, preventClose, onMouseDown, handleCloseDrawer],
  )

  const handleCancelDrawer = useCallback<ReactEventHandler<HTMLDialogElement>>(
    (e) => {
      if (preventClose) {
        e.preventDefault()
      }
    },
    [preventClose],
  )

  const handleExpanderDragStart = useCallback<
    NonNullable<DrawerExpanderProps['onDragStart']>
  >(() => {
    if (!DrawerElement) {
      return
    }

    DrawerElement.style.setProperty('transition-property', 'opacity')
  }, [DrawerElement])

  const handleExpanderDrag = useCallback<
    NonNullable<DrawerExpanderProps['onDragPositionYChange']>
  >(
    (y) => {
      if (!DrawerElement) {
        return
      }

      let newHeight = drawerInitHeight
      if (drawerStartingHeight && drawerStartingHeight > drawerInitHeight) {
        newHeight = drawerStartingHeight
      }

      setDrawerHeight(newHeight - y)
      onHeightChange?.(newHeight - y)
    },
    [DrawerElement, drawerInitHeight, drawerStartingHeight, onHeightChange],
  )

  const handleExpanderDragEnd = useCallback<
    NonNullable<DrawerExpanderProps['onDragEnd']>
  >(
    (_, dragPosition, setPositionOnEnd) => {
      if (!window.innerHeight || !open || !DrawerElement) {
        return
      }

      DrawerElement.style.setProperty('transition-property', 'height, opacity')

      let referenceHeight = drawerInitHeight
      if (drawerStartingHeight && drawerStartingHeight > drawerInitHeight) {
        referenceHeight = drawerStartingHeight
      }

      const newHeight = referenceHeight - dragPosition.y
      const isCrossExpandLine = newHeight > expandablePosition
      setIsExpanded(isCrossExpandLine)

      if (isExpanded !== isCrossExpandLine) {
        onExpandChange?.(isCrossExpandLine)
      }

      setPositionOnEnd({x: 0, y: 0})

      if (
        isCrossExpandLine &&
        expandedPosition &&
        drawerStartingHeight === drawerInitHeight
      ) {
        setDrawerStartingHeight(expandedPosition)
        setDrawerHeight(expandedPosition)
        return
      }

      if (!isCrossExpandLine) {
        setDrawerStartingHeight(drawerInitHeight)
      }

      // Close the drawer if the user drag the drawer to the bottom of screen
      if (!disableDragClose && newHeight < drawerInitHeight - 100) {
        handleCloseDrawer()
      }
    },
    [
      DrawerElement,
      open,
      disableDragClose,
      drawerInitHeight,
      drawerStartingHeight,
      expandedPosition,
      expandablePosition,
    ],
  )

  const triggerCollapse = () => {
    if (!isExpanded) {
      return
    }

    setIsExpanded(false)
    onExpandChange?.(false)
    onHeightChange?.(drawerInitHeight)
    setDrawerStartingHeight(drawerInitHeight)
    setDrawerHeight(drawerInitHeight)
  }

  useImperativeHandle(ref, () => ({
    ...DrawerElement!,
    triggerCollapse,
  }))

  const renderChildren = () => {
    if (variant === 'h5' && typeof children === 'function') {
      return children({
        triggerCollapse,
        height: drawerHeight,
        isExpanded,
        expandedPoint: expandedPosition,
        expandableLine: expandablePosition,
        disableResize,
        disableDragClose,
      })
    }

    return children
  }

  const {child: DrawerHeaderElement, rest: OtherElementsExceptHeader} =
    drawerPickChild<typeof DrawerHeader>(renderChildren(), DrawerHeader)

  const {child: DrawerFooterElement, rest: OtherElements} = drawerPickChild<
    typeof DrawerFooter
  >(OtherElementsExceptHeader, DrawerFooter)

  useEffect(() => {
    if (typeof document === 'undefined' || !DrawerElement) {
      return
    }

    if (open) {
      if (preventFocus) {
        DrawerElement.setAttribute('inert', '')
      }
      drawerMode === 'modal' ? DrawerElement.showModal() : DrawerElement.show()
      DrawerElement.removeAttribute('inert')
      return
    }

    handleCloseDrawer()
  }, [open, DrawerElement, preventFocus, handleCloseDrawer])

  useEffect(() => {
    if (!open && drawerInitHeight) {
      setDrawerHeight(drawerInitHeight)
    }
    setDrawerStartingHeight(drawerInitHeight)
  }, [open, drawerInitHeight])

  useEffect(() => {
    setDrawerInitHeight(DrawerElement?.offsetHeight ?? 0)
  }, [DrawerElement])

  const rootClasses = [
    styles.drawer,
    styles[drawerMode],
    styles[variant],
    styles[position],
    isExpanded && `${styles.drawerExpanded} cdg-drawer-expanded`,
    className,
    'cdg-drawer',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={DrawerRef}>
      <dialog
        ref={DrawerRef}
        className={rootClasses}
        {...htmlDialogAttributes}
        style={{
          ...style,
          height:
            variant === 'h5' && drawerHeight
              ? `${drawerHeight}px`
              : style?.height,
        }}
        onMouseDown={handleMouseDown}
        onClose={onClose}
        onCancel={handleCancelDrawer}
      >
        {variant === 'h5' && !disableResize && (
          <DrawerExpander
            drawerOpen={open}
            css={expanderCSS}
            onDragStart={handleExpanderDragStart}
            onDragPositionYChange={handleExpanderDrag}
            onDragEnd={handleExpanderDragEnd}
          />
        )}

        {DrawerHeaderElement}

        <article className={`${styles.drawerContent} cdg-drawer-content`}>
          {OtherElements}
        </article>

        {DrawerFooterElement}
      </dialog>
    </CssInjection>
  )
})

export default Drawer
