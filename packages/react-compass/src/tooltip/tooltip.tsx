/* eslint-disable prefer-const */
import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {TooltipContext} from './tooltip-context'
import {StyledTooltip, StyledTooltipArrow} from './tooltip.styles'

interface Props extends StyledComponentProps {
  title?: React.ReactNode | string
  children?: React.ReactNode
  dismissible?: boolean
}

export type TooltipProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, refs) => {
    const {title, dismissible, css = {}, children, ...delegated} = props

    const tooltipContext = useContext(TooltipContext)

    const renderTitle = () => {
      if (typeof title === 'string') {
        return <h2 className='tooltip-title'>{title}</h2>
      }
      return <div className='tooltip-title'>{title}</div>
    }

    const mergeRefs = (el: HTMLDivElement | null) => {
      tooltipContext.tooltipRef?.(el)
      if (typeof refs === 'function') {
        refs(el)
      } else if (refs != null) {
        refs.current = el
      }
    }

    return (
      <StyledTooltip
        css={css}
        ref={mergeRefs}
        {...tooltipContext.tooltipProps}
        {...delegated}
      >
        {/* only show header when it has title or dismissible = true */}
        {(title || dismissible) && (
          <div className='tooltip-header'>
            {title ? renderTitle() : <></>}
            {dismissible && (
              <button
                type='button'
                className='tootip-close-button'
                onClick={tooltipContext.handleTooltipClose}
              >
                <svg className='tooltip-close-icon' viewBox='0 0 384 512'>
                  <path
                    fill='currentColor'
                    d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                  />
                </svg>
              </button>
            )}
          </div>
        )}
        {children}
        {tooltipContext.withArrow ? (
          <StyledTooltipArrow
            ref={tooltipContext.arrowRef as React.RefObject<HTMLDivElement>}
            // ref={arrowRef}
            id='arrow-tooltip'
            style={tooltipContext.arrowStyle}
          ></StyledTooltipArrow>
        ) : (
          <></>
        )}
      </StyledTooltip>
    )
  },
)

export default Tooltip
