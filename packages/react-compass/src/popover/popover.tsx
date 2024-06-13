import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset as offsetMiddleware,
  Placement,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import React, {HTMLAttributes, useState} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/popover.module.css'

type OffsetValue =
  | number
  | {
      /**
       * The axis that runs along the side of the floating element. Represents
       * the distance (gutter or margin) between the reference and floating
       * element.
       * @default 0
       */
      mainAxis?: number
      /**
       * The axis that runs along the alignment of the floating element.
       * Represents the skidding between the reference and floating element.
       * @default 0
       */
      crossAxis?: number
      /**
       * The same axis as `crossAxis` but applies only to aligned placements
       * and inverts the `end` alignment. When set to a number, it overrides the
       * `crossAxis` value.
       *
       * A positive number will move the floating element in the direction of
       * the opposite edge to the one that is aligned, while a negative number
       * the reverse.
       * @default null
       */
      alignmentAxis?: number | null
    }

// Legacy popover directions. Will be deprecated in the future
export type LegacyPopoverDirection =
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'top-right'
  | 'top-left'
  | 'top-center'

export type PopoverDirection = LegacyPopoverDirection | Placement
interface Props {
  css?: CSS
  delay?: number
  isOpen?: boolean
  className?: string
  offset?: OffsetValue
  shouldFlip?: boolean
  defaultOpen?: boolean
  anchor: React.ReactNode
  trigger?: 'click' | null
  children: React.ReactNode
  isFloatingPortal?: boolean
  allowOutsidePress?: boolean
  direction?: PopoverDirection
  disableInteractive?: boolean
  attachToElement?: HTMLElement | null
  onClose?: () => void
  onOutsidePress?: () => void
  onOpenChange?: (isOpen: boolean) => void
  onPositionedChange?: (isPositioned: boolean) => void
}

export type PopoverProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DEFAULT_OFFSET = 10

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {
    anchor,
    css = {},
    children,
    className,
    delay = 0,
    trigger = 'click',
    shouldFlip = true,
    isOpen: isOpenProp,
    offset = undefined,
    defaultOpen = false,
    direction = 'bottom',
    isFloatingPortal = true,
    allowOutsidePress = true,
    disableInteractive = false,
    onClose,
    onOpenChange,
    onPositionedChange,
    onOutsidePress,
  } = props

  // uncontrolled state
  const [isOpen, setIsOpen] = useState(defaultOpen === true ? true : false)

  // Convert the direction to a placement
  const [placementProp, setPlacementProp] = useState<Placement>('bottom')

  React.useEffect(() => {
    if (direction === 'bottom-right') {
      setPlacementProp('bottom-end')
    } else if (direction === 'bottom-center') {
      setPlacementProp('bottom')
    } else if (direction === 'bottom-left') {
      setPlacementProp('bottom-start')
    } else if (direction === 'top-right') {
      setPlacementProp('top-end')
    } else if (direction === 'top-left') {
      setPlacementProp('top-start')
    } else if (direction === 'top-center') {
      setPlacementProp('top')
    } else {
      setPlacementProp(direction)
    }
  }, [direction])

  const {x, y, refs, strategy, context, isPositioned} = useFloating({
    open: isOpen,
    onOpenChange: onOpenChange ? onOpenChange : setIsOpen,
    placement: placementProp,
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offsetMiddleware(offset !== undefined ? offset : DEFAULT_OFFSET),
      shouldFlip ? flip() : null,
      shift(),
    ],
  })

  // Event listeners to change the open state
  const hover = useHover(context, {
    move: false,
    restMs: delay,
    enabled: trigger === 'click' ? false : true,
    handleClose: disableInteractive ? null : safePolygon(),
  })
  const click = useClick(context)
  const dismiss = useDismiss(context, {
    outsidePress: () => {
      onOutsidePress?.()
      return allowOutsidePress
    },
  })
  // Role props for screen readers
  const role = useRole(context, {role: 'dialog'})

  // Merge all the interactions into prop getters
  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
    click,
    dismiss,
    role,
  ])

  const popoverProps: HTMLAttributes<HTMLElement> = {
    style: {
      // Positioning styles
      position: strategy,
      top: y ?? 0,
      left: x ?? 0,
      zIndex: 61,
    },
    ...getFloatingProps(),
  }

  const mergeRefs = (el: HTMLDivElement | null) => {
    refs.setFloating?.(el)
    if (typeof ref === 'function') {
      ref(el)
    } else if (ref != null) {
      ref.current = el
    }
  }

  React.useEffect(() => {
    onPositionedChange?.(isPositioned)
  }, [onPositionedChange, isPositioned])

  React.useEffect(() => {
    if (isOpenProp != null) {
      setIsOpen(isOpenProp)
    }
  }, [isOpenProp])

  React.useEffect(() => {
    if (!isOpen) {
      onClose?.()
    }
  }, [isOpen, onClose])

  return (
    <>
      <CssInjection css={css} childrenRef={refs.setReference}>
        <div
          {...getReferenceProps()}
          ref={refs.setReference}
          className={classNames(styles.popoverWrapper, 'cdg-popover-anchor')}
        >
          {anchor}
        </div>
      </CssInjection>
      {/* anchorWrapper */}

      {isFloatingPortal ? (
        <FloatingPortal>
          {(isOpenProp != null ? isOpenProp : isOpen) && (
            // popoverWrapper
            <div
              {...popoverProps}
              ref={mergeRefs}
              className={classNames(
                styles.popoverWrapper,
                className,
                'cdg-popover',
              )}
            >
              {children} {/* The actual popover */}
            </div>
          )}
        </FloatingPortal>
      ) : (
        <>
          {(isOpenProp != null ? isOpenProp : isOpen) && (
            // popoverWrapper
            <div
              {...popoverProps}
              ref={mergeRefs}
              className={classNames(
                styles.popoverWrapper,
                className,
                'cdg-popover',
              )}
            >
              {children} {/* The actual popover */}
            </div>
          )}
        </>
      )}
    </>
  )
})

export default Popover
