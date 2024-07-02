'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  type DialogHTMLAttributes,
  type MouseEvent,
} from 'react'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {DRAWER_CLASSES, DRAWER_SCALE_OFFSET} from './constants'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import {useBackDropStyling, useScaleEffect} from './hooks'
import drawerExpanderStyles from './styles/drawer-expander.module.css'
import drawerMobileStyles from './styles/drawer-mobile.module.css'
import type {DrawerMobileProps, DrawerRef} from './types'
import {drawerPickChild} from './utils'

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
    disableResize,
    preventClose = false,
    preventFocus = false,

    // scale effect options
    enableScaleBg = false,
    scaleBgOffset = DRAWER_SCALE_OFFSET,
    scaleBgClassName = DRAWER_CLASSES.SCALE_DOCUMENT,

    children,
    ...dialogHTMLAttributes
  } = props
  const DrawerRef = useDOMRef<DrawerRef>(ref)
  const DrawerElement = DrawerRef.current
  const {child: DrawerHeaderElement, rest: OtherElementsExceptHeader} =
    drawerPickChild(children, DrawerHeader, {
      className: classes?.header,
      style: styles?.header,
    })

  const {child: DrawerFooterElement, rest: OtherElements} = drawerPickChild(
    OtherElementsExceptHeader,
    DrawerFooter,
    {className: classes?.footer, style: styles?.footer},
  )

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

  useBackDropStyling(DrawerRef, backdropProps)
  useScaleEffect({
    drawerOpened: open,
    enableScaleBg: enableScaleBg && drawerMode === 'modal',
    scaleBgClassName,
    scaleBgOffset,
  })

  useEffect(() => {
    if (typeof document === 'undefined' || !DrawerElement) {
      return
    }

    if (!open) {
      handleCloseDrawer()
      return
    }

    if (preventFocus) {
      DrawerElement.setAttribute('inert', '')
    }

    drawerMode === 'modal' ? DrawerElement.showModal() : DrawerElement.show()
    DrawerElement.removeAttribute('inert')
  }, [open, DrawerElement, preventFocus, handleCloseDrawer, drawerMode])

  return (
    <dialog
      ref={DrawerRef}
      {...dialogHTMLAttributes}
      className={classNames(
        drawerMobileStyles.drawer,
        drawerMobileStyles[drawerMode],
        drawerMobileStyles[variant],
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

      <article
        className={classNames(
          drawerMobileStyles.drawerContent,
          DRAWER_CLASSES.CONTENT,
          classes?.content ?? '',
        )}
        style={styles?.content}
      >
        {OtherElements}
      </article>

      {DrawerFooterElement}
    </dialog>
  )
})

export default DrawerMobile
