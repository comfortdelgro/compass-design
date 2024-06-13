import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/list-interactive.module.css'

interface Props {
  css?: CSS
  groupLabel?: React.ReactNode
  avatar?: React.ReactNode
  title?: string
  description?: string
  variant?: 'default' | 'dropdown'
  showIcon?: boolean
}

export type InteractiveListProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const InteractiveList = React.forwardRef<HTMLDivElement, InteractiveListProps>(
  (props, ref) => {
    const {
      title,
      avatar,
      css = {},
      className,
      groupLabel,
      description,
      showIcon = false,
      variant = 'default',
      ...htmlProps
    } = props

    const rootClass = classNames(
      styles.interactive,
      variant === 'dropdown' && styles.interactiveVariantDropdown,
      className,
      'cdg-list-interactive',
    )

    if (variant === 'dropdown') {
      return (
        <CssInjection css={css} childrenRef={ref}>
          <div {...htmlProps} ref={ref} className={rootClass}>
            <div
              className={classNames(
                styles.interactiveAvatar,
                'cdg-list-interactive-avatar',
              )}
            >
              {avatar
                ? React.cloneElement(avatar as React.ReactElement, {
                    size: 'sm',
                  })
                : null}
            </div>
            <div
              className={classNames(
                styles.interactiveDropdownBody,
                'cdg-list-interactive-dropdown-body',
              )}
            >
              <h2
                className={classNames(
                  styles.interactiveTitle,
                  'cdg-list-interactive-title',
                )}
              >
                {title}
              </h2>
              <span
                className={classNames(
                  styles.interactiveDescription,
                  'cdg-list-interactive-description',
                )}
              >
                {description}
              </span>
            </div>
            {showIcon && (
              <div
                className={classNames(
                  styles.interactiveIconWrapper,
                  'cdg-list-interactive-icon-wrapper',
                )}
              >
                <svg
                  className={classNames(
                    styles.interactiveIcon,
                    'cdg-list-interactive-icon',
                  )}
                  viewBox='0 0 320 512'
                >
                  <path
                    fill='currentColor'
                    d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                  />
                </svg>
              </div>
            )}
          </div>
        </CssInjection>
      )
    }

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div {...htmlProps} ref={ref} className={rootClass}>
          <div>
            <div
              className={classNames(
                styles.interactiveHeader,
                'cdg-list-interactive-header',
              )}
            >
              {groupLabel ? groupLabel : null}
              <div
                className={classNames(
                  styles.interactiveAvatar,
                  'cdg-list-interactive-avatar',
                )}
              >
                {avatar
                  ? React.cloneElement(avatar as React.ReactElement, {
                      size: 'sm',
                    })
                  : null}
              </div>
            </div>
            <div
              className={classNames(
                styles.interactiveBody,
                'cdg-list-interactive-body',
              )}
            >
              {title && (
                <h2
                  className={classNames(
                    styles.interactiveTitle,
                    'cdg-list-interactive-title',
                  )}
                >
                  {title}
                </h2>
              )}
              {description && (
                <span
                  className={classNames(
                    styles.interactiveDescription,
                    'cdg-list-interactive-description',
                  )}
                >
                  {description}
                </span>
              )}
            </div>
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default InteractiveList
