'use client'

import React, {
  DialogHTMLAttributes,
  forwardRef,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
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

const DEFAULT_EXPANDED_POINT = 100
const DEFAULT_EXPANDABLE_LINE = 67

type Props = (
  | {
      variant?: 'default'
      position?: 'right' | 'bottom' | 'left' | undefined
      expanderCSS?: never
      onExpandChange?: never
      expandedPoint?: never
      expandableLine?: never
      disableResize?: never
      disableAddBodyAttr?: never
      autoClose?: never
    }
  | {
      variant: 'h5'
      position?: never

      expanderCSS?: StyledComponentProps['css']
      onExpandChange?: (isExpand: boolean) => void

      /**
       * How many **percentage** of the viewport height that the drawer will be fully expanded.
       * ___
       * Accepted value range: `0` - `100`
       *
       * Must be greater than `expandableLine` and drawer initialization height (percent).
       * ___
       * @default 100
       */
      expandedPoint?: number

      /**
       * A boundary to tell the drawer to fully expand when its top crosses this line.
       * ___
       * Accepted value range: `0` - `100`
       *
       * Must be smaller than `expandedPoint` and greater than drawer initialization height (percent).
       * ___
       * @default 100
       */
      expandableLine?: number

      /**
       * if `false`, the H5 drawer will NOT be able to expand/collapse and the expander line will be hidden.
       * @default false
       */
      disableResize?: boolean

      /**
       * if `false`, when open a drawer, it will NOT add {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert inert}
       * attribute and `overflow: hidden` to the `<body>` tag.
       * @default false
       */
      disableAddBodyAttr?: boolean

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
  const viewPortHeight =
    typeof window !== 'undefined' ? window.innerHeight : undefined

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

    // H5 drawer props
    expanderCSS = {},
    onExpandChange,
    expandedPoint: expandPoint = DEFAULT_EXPANDED_POINT,
    expandableLine: expandLine = DEFAULT_EXPANDABLE_LINE,
    disableResize = false,
    autoClose = true,
    disableAddBodyAttr = false,

    // the rest
    ...delegated
  } = props

  const position: DrawerProps['position'] =
    variant === 'h5' ? 'bottom' : drawerPosition
  const DrawerRef = useDOMRef<HTMLDialogElement>(ref)
  const DrawerElement = DrawerRef.current

  const [drawerInitHeight, setDrawerInitHeight] = useState(0)
  const [drawerStartingHeight, setDrawerStartingHeight] = useState<number>()
  const [drawerHeight, setDrawerHeight] = useState(DrawerElement?.offsetHeight)
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
    },
    [DrawerElement, drawerInitHeight, drawerStartingHeight],
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

      const newHeight = referenceHeight - dragPosition[1]
      const isCrossExpandLine = newHeight > expandablePosition
      setIsExpanded(isCrossExpandLine)
      onExpandChange?.(isCrossExpandLine)
      setPositionOnEnd([0, 0])

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
      if (autoClose && newHeight < drawerInitHeight - 100) {
        setDrawerHeight(drawerInitHeight)
        DrawerElement.close()
        return
      }
    },
    [
      DrawerElement,
      open,
      drawerInitHeight,
      drawerStartingHeight,
      expandedPosition,
      expandablePosition,
    ],
  )

  useEffect(() => {
    if (typeof document === 'undefined' || !DrawerElement) {
      return
    }

    if (open) {
      if (!disableAddBodyAttr) {
        document.body.style.setProperty('overflow', 'hidden')
        document.body.setAttribute('inert', '')
      }
      DrawerElement.showModal()
      return
    }

    if (!disableAddBodyAttr) {
      document.body.style.setProperty('overflow', bodyOverflow)
      document.body.removeAttribute('inert')
    }

    DrawerElement.close()
  }, [open, DrawerElement])

  useEffect(() => {
    if (!open && drawerInitHeight) {
      setDrawerHeight(drawerInitHeight)
    }

    setDrawerStartingHeight(drawerInitHeight)
  }, [open, drawerInitHeight])

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
          variant === 'h5' && drawerHeight
            ? `${drawerHeight}px`
            : style?.height,
      }}
      onMouseDown={handleMouseDown}
      onClose={onClose}
    >
      {variant === 'h5' && !disableResize && (
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
