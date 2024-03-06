/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  arrow,
  autoUpdate,
  flip,
  FloatingPortal,
  offset as offsetMiddleware,
  Placement,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import React, { HTMLAttributes, useRef, useState } from 'react'
import { TooltipContext } from './tooltip-context'

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

interface Props {
  children: React.ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  placement?: Placement
  offset?: OffsetValue
  shouldFlip?: boolean
  withArrow?: boolean
  delay?: number
  disableInteractive?: boolean
  defaultOpen?: boolean
  trigger?: 'focus' | null
}

export type TooltipTriggerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DEFAULT_OFFSET_WITHOUT_ARROW = 10

const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
  (props, _) => {
    const {
      children,
      isOpen: isOpenProp,
      onOpenChange,
      offset,
      shouldFlip = true,
      withArrow = true,
      placement: placementProp = 'bottom',
      delay = 0,
      disableInteractive = false,
      defaultOpen = false,
      trigger = null,
    } = props

    // seperate children to 2 parts: the trigger and the tooltip
    const [triggerEl, tooltipElement] = React.Children.toArray(children)

    // uncontrolled state
    const [isOpen, setIsOpen] = useState(defaultOpen === true ? true : false)

    const tooltipArrow = useRef<HTMLDivElement>(null)

    // Get the width of arrow tooltip
    const arrowLen = tooltipArrow.current?.offsetWidth

    // modify tooltip offset to make a room for arrow
    const calculateFloatingOffset = () => {
      if (withArrow) {
        return Math.sqrt(2 * (arrowLen === undefined ? 0 : arrowLen) ** 2) / 2
      } else {
        return DEFAULT_OFFSET_WITHOUT_ARROW
      }
    }

    const { x, y, refs, strategy, context, middlewareData, placement } =
      useFloating({
        open: isOpenProp != null ? isOpenProp : isOpen,
        onOpenChange: onOpenChange ? onOpenChange : setIsOpen,
        placement: placementProp,
        // Make sure the tooltip stays on the screen
        whileElementsMounted: autoUpdate,
        middleware: [
          offsetMiddleware(offset ? offset : calculateFloatingOffset()),
          shouldFlip ? flip() : null,
          shift(),
          arrow({
            element: tooltipArrow,
          }),
        ],
      })

    // Event listeners to change the open state
    const hover = useHover(context, {
      move: false,
      restMs: delay,
      enabled: trigger === 'focus' ? false : true,
      handleClose: disableInteractive ? null : safePolygon(),
    })
    const focus = useFocus(context)
    const dismiss = useDismiss(context)
    // Role props for screen readers
    const role = useRole(context, { role: 'tooltip' })

    // Merge all the interactions into prop getters
    const { getReferenceProps, getFloatingProps } = useInteractions([
      hover,
      focus,
      dismiss,
      role,
    ])

    const getSideFromPlacement = (placement: string) => {
      const rawPlacement = placement.split('-')[0]
      return rawPlacement
    }

    // map the side for arrow position
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[getSideFromPlacement(placement) as 'bottom' | 'left' | 'top' | 'right']

    // Get x,y position of arrow
    const arrowPosition = middlewareData.arrow
    const arrowPositionX = arrowPosition?.x
    const arrowPositionY = arrowPosition?.y

    const tooltipArrowProps = {
      left: arrowPositionX != null ? `${arrowPositionX}px` : '',
      top: arrowPositionY != null ? `${arrowPositionY}px` : '',
      // Ensure the static side gets unset when
      // flipping to other placements' axes.
      right: '',
      bottom: '',
      [staticSide]: `${-(arrowLen === undefined ? 0 : arrowLen) / 2}px`,
    }

    const tooltipProps: HTMLAttributes<HTMLElement> = {
      style: {
        // Positioning styles
        position: strategy,
        top: y ?? 0,
        left: x ?? 0,
        zIndex: 61,
      },
      ...getFloatingProps(),
    }

    const handleTooltipClose = () => {
      setIsOpen(false)
      onOpenChange?.(false)
    }

    // clone the trigger element to pass props
    const clonedTriggerElement = React.cloneElement(
      triggerEl as React.ReactElement,
      {
        ref: refs.setReference,
        ...getReferenceProps(),
      },
    )

    return (
      <>
        {clonedTriggerElement}
        {(isOpenProp != null ? isOpenProp : isOpen) && (
          <FloatingPortal >
            <TooltipContext.Provider
              value={{
                tooltipRef: refs.setFloating,
                tooltipProps: tooltipProps,
                arrowRef: tooltipArrow,
                arrowStyle: tooltipArrowProps,
                handleTooltipClose: handleTooltipClose,
                withArrow,
              }}
            >
              {tooltipElement}
            </TooltipContext.Provider>
          </FloatingPortal>
        )}
      </>
    )
  },
)

export default TooltipTrigger
