'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  type MouseEvent,
  type ReactEventHandler,
} from 'react'
import {CssInjection} from '../utils'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {DRAWER_CLASSES} from './constants'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import {useBackDropStyling} from './hooks'
import drawerClasses from './styles/drawer.module.css'
import type {DrawerProps, DrawerRef} from './types'
import {drawerPickChild} from './utils'

const DrawerDefault = forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  const {
    drawerMode = 'modal',
    open = false,
    onMouseDown,

    classNames: stylingClassNames,
    className = '',
    styles,
    backdropProps,
    css,
    children,

    preventFocus = false,
    preventClose = false,

    variant = 'default',
    position: drawerPosition = 'right',
    ...htmlDialogAttributes
  } = props

  const position: DrawerProps['position'] = drawerPosition
  const DrawerRef = useDOMRef<DrawerRef>(ref)
  const DrawerElement = DrawerRef.current

  const handleCloseDrawer = useCallback(
    (dialogReturnValue?: string) => {
      if (typeof document === 'undefined' || !DrawerElement) {
        return
      }

      DrawerElement.close(dialogReturnValue)
    },
    [DrawerElement],
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

  const {child: DrawerHeaderElement, rest: OtherElementsExceptHeader} =
    drawerPickChild(children, DrawerHeader, {
      className: stylingClassNames?.header,
      style: styles?.header,
    })

  const {child: DrawerFooterElement, rest: OtherElements} = drawerPickChild(
    OtherElementsExceptHeader,
    DrawerFooter,
    {className: stylingClassNames?.footer, style: styles?.footer},
  )

  useBackDropStyling(DrawerRef, backdropProps)

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
  }, [open, DrawerElement, preventFocus, handleCloseDrawer, drawerMode])

  return (
    <CssInjection css={css} childrenRef={DrawerRef}>
      <dialog
        {...htmlDialogAttributes}
        ref={DrawerRef}
        className={classNames(
          drawerClasses.drawer,
          drawerClasses[drawerMode],
          drawerClasses[variant],
          drawerClasses[position],
          DRAWER_CLASSES.ROOT,
          stylingClassNames?.root ?? '',
          className,
        )}
        onMouseDown={handleMouseDown}
        onCancel={handleCancelDrawer}
        style={htmlDialogAttributes.style || styles?.root}
      >
        {DrawerHeaderElement}

        <article
          className={classNames(
            drawerClasses.drawerContent,
            DRAWER_CLASSES.CONTENT,
            stylingClassNames?.content ?? '',
          )}
          style={styles?.content}
        >
          {OtherElements}
        </article>

        {DrawerFooterElement}
      </dialog>
    </CssInjection>
  )
})

export default DrawerDefault
