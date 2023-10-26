/* eslint-disable prefer-const */
import React, {useContext} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/tooltip.module.css'
import {TooltipContext} from './tooltip-context'

interface Props {
  title?: React.ReactNode | string
  children?: React.ReactNode
  dismissible?: boolean
  className?: string
  css?: unknown
}

export type TooltipProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, refs) => {
    const {
      title,
      dismissible,
      css = {},
      children,
      className = '',
      ...htmlProps
    } = props

    const tooltipContext = useContext(TooltipContext)

    const renderTitle = () => {
      if (typeof title === 'string') {
        return (
          <h2 className={`cdg-tooltip-title ${styles.tooltipTitle}`}>
            {title}
          </h2>
        )
      }
      return (
        <div className={`cdg-tooltip-title ${styles.tooltipTitle}`}>
          {title}
        </div>
      )
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
      <CssInjection css={css} childrenRef={mergeRefs}>
        <div
          ref={mergeRefs}
          {...tooltipContext.tooltipProps}
          {...htmlProps}
          className={`cdg-tooltip ${className} ${styles.tooltip} ${
            title ? '' : styles.noTitle
          }`}
        >
          {/* only show header when it has title or dismissible = true */}
          {(title || dismissible) && (
            <div className={`cdg-tooltip-header ${styles.tooltipHeader}`}>
              {title ? renderTitle() : <></>}
              {dismissible && (
                <button
                  type='button'
                  className={`tootip-close-button ${styles.tooltipCloseButton}`}
                  onClick={tooltipContext.handleTooltipClose}
                >
                  <svg
                    className={`cdg-tooltip-close-icon ${styles.tooltipCloseIcon}`}
                    viewBox='0 0 384 512'
                  >
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
            <CssInjection
              css={tooltipContext.arrowStyle}
              childrenRef={
                tooltipContext.arrowRef as React.RefObject<HTMLDivElement>
              }
            >
              <div
                className={`cdg-tooltip-arrow ${styles.tooltipArrow}`}
                ref={tooltipContext.arrowRef as React.RefObject<HTMLDivElement>}
                // ref={arrowRef}
              ></div>
            </CssInjection>
          ) : (
            <></>
          )}
        </div>
      </CssInjection>
    )
  },
)

export default Tooltip
