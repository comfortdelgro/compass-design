/* eslint-disable prefer-const */
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {useTooltip} from '@react-aria/tooltip'
import React, {useContext, useImperativeHandle} from 'react'
import {Icon} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {TooltipContext} from './tooltip-context'
import {
  StyledTooltip,
  StyledTooltipArrow,
  TooltipArrowVariantProps,
} from './tooltip.styles'
interface Props extends StyledComponentProps {
  title?: React.ReactNode | string
  children?: React.ReactNode
  dismissible?: boolean
}

export type TooltipProps = Props

const ArrowPositionDefaultMap = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
  center: 'top',
}

// arrow position must substract to an observational error number,
// dont know why, should investigate in @react-aria/overlays "useOverlayPosition"
export const OBSERVATIONAL_ERROR_VALUE = 8

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  // get props from context
  let {
    ref: overlayRef,
    arrowProps,
    state,
    style,
    placement,
  } = useContext(TooltipContext)

  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    title,
    children,
    dismissible = false,
    // AriaTooltipProps
    ...ariaSafeProps
  } = props

  const {tooltipProps} = useTooltip(ariaSafeProps, state)

  useImperativeHandle(ref, () => overlayRef!.current!)

  // calculate arrow position bases on tooltip placement
  const arrowPosition = ArrowPositionDefaultMap[placement || 'top']

  const variantProps = {arrowPosition} as TooltipArrowVariantProps

  const setupTooltipArrowStyle = (): TooltipArrowStyle => {
    const tooltipArrowStyle: TooltipArrowStyle = {
      '&:before': {
        // set color of the arrow base on user's tooltip color
        color: css.backgroundColor || css.background,
        /*
        set position of the arrow base on trigger properties
        must substract an observational error number, 
        dont know why, should investigate in @react-aria/overlays "useOverlayPosition"
        */
        left:
          arrowProps?.style?.left !== undefined
            ? +arrowProps?.style?.left - OBSERVATIONAL_ERROR_VALUE
            : undefined,
        top:
          arrowProps?.style?.top !== undefined
            ? +arrowProps?.style?.top - OBSERVATIONAL_ERROR_VALUE
            : undefined,
      },
    }

    // if user doesnt set tooltip background color then use default tooltip css color
    if (!tooltipArrowStyle['&:before'].color) {
      delete tooltipArrowStyle['&:before'].color
    }

    return tooltipArrowStyle
  }

  const renderTitle = () => {
    if (typeof title === 'string') {
      return <h2 className='tooltip-title'>{title}</h2>
    }
    return <div className='tooltip-title'>{title}</div>
  }

  return (
    <StyledTooltip ref={overlayRef} css={css} style={style} {...tooltipProps}>
      {/* only show header when it has title or dismissible = true */}
      {(title || dismissible) && (
        <div className='tooltip-header'>
          {title && renderTitle()}
          {dismissible && (
            <button
              className='tootip-close-button'
              onClick={() => state?.close(true)}
            >
              <Icon icon={faClose} className='tooltip-close-icon'></Icon>
            </button>
          )}
        </div>
      )}
      {children}
      <StyledTooltipArrow {...variantProps} css={setupTooltipArrowStyle()} />
    </StyledTooltip>
  )
})

export default Tooltip

export type TooltipArrowStyle = {
  '&:before': {
    color?: unknown
    left: string | number | undefined
    top: string | number | undefined
  }
}
