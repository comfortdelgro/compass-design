/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  forwardRef,
  MouseEvent,
  ReactEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import {CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import {drawerPickChild} from './drawer-pick-child'
import styles from './styles/drawer.module.css'
import {DrawerProps, DrawerRef} from './types'

const Drawer = forwardRef<DrawerRef, DrawerProps>((props, ref) => {
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

    // the rest
    ...htmlDialogAttributes
  } = props

  const position: DrawerProps['position'] = drawerPosition
  const DrawerRef = useDOMRef<DrawerRef>(ref)
  const DrawerElement = DrawerRef.current

  const [drawerInitHeight, setDrawerInitHeight] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCloseDrawer = useCallback(
    (dialogReturnValue?: string) => {
      if (typeof document === 'undefined' || !DrawerElement) {
        return
      }
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

  const triggerCollapse = () => {
    if (!isExpanded) {
      return
    }

    setIsExpanded(false)
  }

  useImperativeHandle(ref, () => ({
    ...DrawerElement!,
    triggerCollapse,
  }))

  const {child: DrawerHeaderElement, rest: OtherElementsExceptHeader} =
    drawerPickChild(children, DrawerHeader)

  const {child: DrawerFooterElement, rest: OtherElements} = drawerPickChild(
    OtherElementsExceptHeader,
    DrawerFooter,
  )

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
    setDrawerInitHeight(DrawerElement?.offsetHeight ?? 0)
  }, [DrawerElement])

  const rootClasses = classNames(
    styles.drawer,
    styles[drawerMode],
    styles[variant],
    styles[position],
    isExpanded && `${styles.drawerExpanded} cdg-drawer-expanded`,
    className,
    'cdg-drawer',
  )

  return (
    <CssInjection css={css} childrenRef={DrawerRef}>
      <dialog
        {...htmlDialogAttributes}
        style={style}
        ref={DrawerRef}
        className={rootClasses}
        onClose={onClose}
        onMouseDown={handleMouseDown}
        onCancel={handleCancelDrawer}
      >
        {DrawerHeaderElement}

        <article
          className={classNames(styles.drawerContent, 'cdg-drawer-content')}
        >
          {OtherElements}
        </article>

        {DrawerFooterElement}
      </dialog>
    </CssInjection>
  )
}) as typeof Drawer & {
  Header: typeof DrawerHeader
  Footer: typeof DrawerFooter
}

export default Drawer
