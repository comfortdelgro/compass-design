import {useOverlayPosition} from '@react-aria/overlays'
import {AriaTooltipProps, useTooltipTrigger} from '@react-aria/tooltip'
import {
  TooltipTriggerProps as TooltipTriggerAriaProps,
  useTooltipTriggerState,
} from '@react-stately/tooltip'
import type {SpectrumTooltipTriggerProps} from '@react-types/tooltip'
import React, {useEffect, useRef} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {TooltipContext} from './tooltip-context'
import {StyledTooltipTrigger} from './tooltip-trigger.styles'

interface Props extends AriaTooltipProps, StyledComponentProps {
  children?: React.ReactNode
  open?: boolean
  boundaryElement?: Element
  onOpenChange?: (isOpen: boolean) => void
}

export type TooltipTriggerProps = Props &
  TooltipTriggerAriaProps &
  SpectrumTooltipTriggerProps &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const DEFAULT_OFFSET = 16
const DEFAULT_CROSS_OFFSET = 0
const FALLBACK_CROSS_OFFSET = 16

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
      open: isOpenProp,
      onOpenChange,
      // AriaTooltipProps with default value
      offset = DEFAULT_OFFSET,
      placement = 'bottom',
      defaultOpen = false,
      shouldFlip = true,
      boundaryElement = document.body,
      // html button props
      ...delegated
    } = props

    let {crossOffset = DEFAULT_CROSS_OFFSET} = props

    //set default value for tooltip trigger props
    const tooltipTriggerStateProps: TooltipTriggerAriaProps = {
      delay: 0,
      ...props,
    }

    if (placement === 'right bottom' || placement === 'left bottom') {
      crossOffset = DEFAULT_CROSS_OFFSET + FALLBACK_CROSS_OFFSET
    } else if (placement === 'right top' || placement === 'left top') {
      crossOffset = DEFAULT_CROSS_OFFSET - FALLBACK_CROSS_OFFSET
    }

    // tooltip trigger state that will be managed by react-aria
    const state = useTooltipTriggerState(tooltipTriggerStateProps)

    // call user callback when isOpen state is change
    useEffect(() => {
      if (!onOpenChange) return
      onOpenChange(state.isOpen)
    }, [state.isOpen])

    // open state is either controlled or uncontrolled
    const openState = isOpenProp ?? state.isOpen

    const tooltipTriggerRef = useDOMRef<HTMLButtonElement>(ref)

    //a hook that will manage the trigger props and tooltip props
    const {triggerProps, tooltipProps} = useTooltipTrigger(
      props,
      state,
      tooltipTriggerRef,
    )

    const overlayRef = useRef<HTMLDivElement>(null)

    // seperate children to 2 parts: the trigger and the tooltip
    const [trigger, tooltip] = React.Children.toArray(children)

    // react-aria custom hook that will calculate the overlay position base on the trigger position
    const {
      overlayProps,
      arrowProps,
      placement: overlayPlacement,
    } = useOverlayPosition({
      placement: placement,
      targetRef: tooltipTriggerRef,
      overlayRef,
      offset,
      crossOffset,
      isOpen: openState,
      shouldFlip: shouldFlip,
      boundaryElement: boundaryElement,
      shouldUpdatePosition: true,
    })

    return (
      <>
        <StyledTooltipTrigger
          css={css}
          ref={tooltipTriggerRef}
          {...triggerProps}
          {...delegated}
        >
          {trigger}
        </StyledTooltipTrigger>
        <TooltipContext.Provider
          value={{
            state,
            arrowProps,
            ref: overlayRef,
            style: overlayProps.style,
            placement: overlayPlacement,
            ...tooltipProps,
          }}
        >
          {(openState || defaultOpen) && tooltip}
        </TooltipContext.Provider>
      </>
    )
  },
)

export default TooltipTrigger
