'use client'

import React, {
  DialogHTMLAttributes,
  forwardRef,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DrawerExpander, {DrawerExpanderProps} from './drawer-expander'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import {
  DrawerVariantProps,
  StyledDrawer,
  StyledDrawerBody,
} from './drawer.styles'

const bodyOverflow =
  typeof document !== 'undefined' ? document.body.style.overflow : 'auto'

type Props = (
  | {
      variant?: 'default'
      position?: 'right' | 'bottom' | 'left' | undefined
      expanderCSS?: never
      onExpandChange?: never
      static?: never
      autoClose?: never
    }
  | {
      variant: 'h5'
      position?: never
      expanderCSS?: StyledComponentProps['css']
      onExpandChange?: (isExpand: boolean) => void

      /**
       * if false, the H5 drawer will NOT be able to expand/collapse and the expander line will be hidden.
       * @default false
       */
      static?: boolean

      /**
       * Close the H5 drawer if the user drag it to the bottom of screen
       * @default true
       */
      autoClose?: boolean
    }
) &
  StyledComponentProps

export type DrawerProps = Props &
  Omit<DrawerVariantProps, 'position'> &
  Omit<DialogHTMLAttributes<HTMLDialogElement>, keyof Props>

const Drawer = forwardRef<HTMLDialogElement, DrawerProps>((props, ref) => {
  const {
    className = '',
    css = {},
    style,
    children,

    open = false,
    onClose,
    onMouseDown,

    variant = 'default',
    position: drawerPosition = 'right',

    expanderCSS = {},
    onExpandChange,
    autoClose = true,
    ...delegated
  } = props

  // const viewPortHeight =
  //   typeof window !== 'undefined' ? window.innerHeight : undefined
  const position: DrawerProps['position'] =
    variant === 'h5' ? 'bottom' : drawerPosition
  const DrawerRef = useDOMRef<HTMLDialogElement>(ref)
  const DrawerElement = DrawerRef.current

  const [drawerInitHeight, setDrawerInitHeight] = useState(0)
  const [drawerHeight, setDrawerHeight] = useState(
    DrawerElement?.offsetHeight ?? 0,
  )
  const [isExpanded, setIsExpanded] = useState(false)

  const {child: DrawerHeaderElement, rest: OtherElementsExceptHeader} =
    pickChild<typeof DrawerHeader>(children, DrawerHeader)

  const {child: DrawerFooterElement, rest: OtherElements} = pickChild<
    typeof DrawerFooter
  >(OtherElementsExceptHeader, DrawerFooter)

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDialogElement>) => {
      if (!DrawerElement) {
        return
      }

      onMouseDown?.(e)
      if (!(e.target instanceof HTMLDialogElement)) {
        return
      }

      // Close the drawer if the user click to the dialog elements itself (eg: the backdrop)
      if (e.target.nodeName === 'DIALOG') {
        DrawerElement.close('dismiss')
      }
    },
    [DrawerElement, onMouseDown],
  )

  const handleExpanderDragStart = useCallback<
    NonNullable<DrawerExpanderProps['onDragStart']>
  >(() => {
    if (!DrawerElement) {
      return
    }

    if (isExpanded) {
      setIsExpanded(false)
    }

    DrawerElement.style.setProperty('transition', 'opacity .2s ease')
  }, [DrawerElement, isExpanded])

  const handleExpanderDrag = useCallback<
    NonNullable<DrawerExpanderProps['onDragPositionYChange']>
  >(
    (y) => {
      if (!DrawerElement) {
        return
      }

      const newHeight = drawerInitHeight - y
      setDrawerHeight(newHeight)
    },
    [DrawerElement, drawerInitHeight],
  )

  const handleExpanderDragEnd = useCallback<
    NonNullable<DrawerExpanderProps['onDragEnd']>
  >(
    (_, dragPosition, setPositionOnEnd) => {
      if (!window.innerHeight || !open || !DrawerElement) {
        return
      }

      DrawerElement.style.setProperty(
        'transition',
        'height .2s ease, opacity .2s ease',
      )

      const collapseHeight = Math.floor(window.innerHeight / 3)
      let expandableLine = collapseHeight * 2
      if (drawerInitHeight > expandableLine) {
        expandableLine = drawerInitHeight
      }

      const newHeight = drawerInitHeight - dragPosition[1]

      const isCrossExpandLine = newHeight > expandableLine
      setIsExpanded(isCrossExpandLine)
      onExpandChange?.(isCrossExpandLine)

      // Close the drawer if the user drag the drawer to the bottom of screen
      if (autoClose && newHeight < collapseHeight) {
        setDrawerHeight(drawerInitHeight)
        DrawerElement.close()
        return
      }

      setPositionOnEnd([0, 0])
    },
    [open, drawerInitHeight, DrawerElement],
  )

  useEffect(() => {
    if (typeof document === 'undefined' || !DrawerElement) {
      return
    }

    if (open) {
      document.body.style.setProperty('overflow', 'hidden')
      document.body.setAttribute('inert', '')
      DrawerElement.showModal()
      return
    }

    document.body.style.setProperty('overflow', bodyOverflow)
    document.body.removeAttribute('inert')
    DrawerElement.close()
  }, [open, DrawerElement])

  useEffect(() => {
    setDrawerInitHeight(DrawerElement?.offsetHeight ?? 0)
  }, [DrawerElement])

  return (
    <StyledDrawer
      ref={DrawerRef}
      className={`${className} ${isExpanded ? 'drawer-expanded' : ''}`}
      css={css}
      {...{variant}}
      {...{position}}
      {...delegated}
      style={{
        ...style,
        height:
          variant === 'h5' && drawerHeight && !isExpanded
            ? `${drawerHeight}px`
            : style?.height,
      }}
      onMouseDown={handleMouseDown}
      onClose={onClose}
    >
      {variant === 'h5' && (
        <DrawerExpander
          drawerOpen={open}
          className='drawer-expander'
          css={expanderCSS}
          onDragStart={handleExpanderDragStart}
          onDragPositionYChange={handleExpanderDrag}
          onDragEnd={handleExpanderDragEnd}
        />
      )}
      {DrawerHeaderElement}

      <StyledDrawerBody className='drawer-content'>
        {OtherElements}
      </StyledDrawerBody>

      {DrawerFooterElement}
    </StyledDrawer>
  )
})

export default Drawer as typeof Drawer & {
  Header: typeof DrawerHeader
  Footer: typeof DrawerFooter
}
