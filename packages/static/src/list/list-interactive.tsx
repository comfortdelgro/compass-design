import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/list-interactive.module.css'

interface Props {
  css?: unknown
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

    const rootClass = React.useMemo(() => {
      return [
        styles.interactive,
        variant === 'dropdown' && styles.interactiveVariantDropdown,
        'cdg-list-interactive',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, variant])

    if (variant === 'dropdown') {
      return (
        <CssInjection css={css} childrenRef={ref}>
          <div ref={ref} {...htmlProps} className={rootClass}>
            <div
              className={`${styles.interactiveAvatar} cdg-list-interactive-avatar`}
            >
              {avatar
                ? React.cloneElement(avatar as React.ReactElement, {
                    size: 'sm',
                  })
                : null}
            </div>
            <div
              className={`${styles.interactiveDropdownBody} cdg-list-interactive-dropdown-body`}
            >
              <h2
                className={`${styles.interactiveTitle} cdg-list-interactive-title`}
              >
                {title}
              </h2>
              <span
                className={`${styles.interactiveDescription} cdg-list-interactive-description`}
              >
                {description}
              </span>
            </div>
            {showIcon && (
              <div
                className={`${styles.interactiveIconWrapper} cdg-list-interactive-icon-wrapper`}
              >
                <svg
                  className={`${styles.interactiveIcon} cdg-list-interactive-icon`}
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
        <div ref={ref} {...htmlProps} className={rootClass}>
          <div>
            <div
              className={`cdg-list-interactive-header ${styles.interactiveHeader}`}
            >
              {groupLabel ? groupLabel : null}
              <div
                className={`cdg-list-interactive-avatar ${styles.interactiveAvatar}`}
              >
                {avatar
                  ? React.cloneElement(avatar as React.ReactElement, {
                      size: 'sm',
                    })
                  : null}
              </div>
            </div>
            <div
              className={`cdg-list-interactive-body ${styles.interactiveBody}`}
            >
              {title && (
                <h2
                  className={`cdg-list-interactive-title ${styles.interactiveTitle}`}
                >
                  {title}
                </h2>
              )}
              {description && (
                <span
                  className={`cdg-list-interactive-description ${styles.interactiveDescription}`}
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
