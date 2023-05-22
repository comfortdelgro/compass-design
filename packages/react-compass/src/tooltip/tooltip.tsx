/* eslint-disable prefer-const */
import {faClose} from '@fortawesome/free-solid-svg-icons'
import React, {useContext} from 'react'
import {Icon} from '../icon'
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
                <Icon icon={faClose} className='tooltip-close-icon'></Icon>
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
