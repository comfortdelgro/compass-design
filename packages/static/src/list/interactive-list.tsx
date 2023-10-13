import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'

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
      groupLabel,
      avatar,
      title,
      description,
      variant = 'default',
      showIcon = false,
      css = {},
      ...delegated
    } = props

    if (variant === 'dropdown') {
      return (
        <CssInjection css={css} childrenRef={ref}>
          <div
            // variant={variant}
            ref={ref}
            {...delegated}
          >
            <div className='interactive-list-avatar'>
              {avatar ? avatar : <></>}
            </div>
            <div className='interactive-list-dropdown-body'>
              <h2 className='interactive-list-title'>{title}</h2>
              <span className='interactive-list-description'>
                {description}
              </span>
            </div>
            {showIcon ? (
              <div className='interactive-list-icon-wrapper'>
                <svg
                  className='interactive-list-chevron-icon'
                  viewBox='0 0 320 512'
                >
                  <path
                    fill='currentColor'
                    d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                  />
                </svg>
              </div>
            ) : (
              <></>
            )}
          </div>
        </CssInjection>
      )
    }

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          ref={ref}
          // variant={variant}
          {...delegated}
        >
          <div>
            <div className='interactive-list-header'>
              <>{groupLabel ? groupLabel : <></>}</>
              <>{avatar ? avatar : <></>}</>
            </div>
            <div className='interactive-list-body'>
              {title ? (
                <h2 className='interactive-list-title'>{title}</h2>
              ) : (
                <></>
              )}{' '}
              {description ? (
                <span className='interactive-list-description'>
                  {description}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default InteractiveList
