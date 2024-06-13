import React, {useContext} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/tooltip.module.css'
import {TooltipContext} from './tooltip-context'

interface Props {
  title?: React.ReactNode | string
  children?: React.ReactNode
  dismissible?: boolean
  className?: string
  css?: CSS
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
          <h2 className={classNames(styles.tooltipTitle, 'cdg-tooltip-title')}>
            {title}
          </h2>
        )
      }
      return (
        <div className={classNames(styles.tooltipTitle, 'cdg-tooltip-title')}>
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
          {...htmlProps}
          {...tooltipContext.tooltipProps}
          ref={mergeRefs}
          className={classNames(
            styles.tooltip,
            title ? '' : styles.noTitle,
            className,
            'cdg-tooltip',
          )}
        >
          {/* only show header when it has title or dismissible = true */}
          {(title || dismissible) && (
            <div
              className={classNames(styles.tooltipHeader, 'cdg-tooltip-header')}
            >
              {title ? renderTitle() : <></>}
              {dismissible && (
                <button
                  type='button'
                  className={classNames(
                    styles.tooltipCloseButton,
                    'cdg-tootip-close-button',
                  )}
                  onClick={tooltipContext.handleTooltipClose}
                >
                  <svg
                    className={classNames(
                      styles.tooltipCloseIcon,
                      'cdg-tooltip-close-icon',
                    )}
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
                className={classNames(styles.tooltipArrow, 'cdg-tooltip-arrow')}
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
