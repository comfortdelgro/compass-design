import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/list-card-detail.module.css'

interface Props {
  css?: unknown
  title?: string
  isDisabled?: boolean
  description?: string
  avatar?: React.ReactNode
  variant?: 'item' | 'interactive' | 'h5'
}

export type ListCardDetailProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ListCardDetail = React.forwardRef<HTMLDivElement, ListCardDetailProps>(
  (props, ref) => {
    const {
      title,
      avatar,
      css = {},
      className,
      description,
      isDisabled = false,
      ...htmlProps
    } = props

    const rootClass = React.useMemo(() => {
      return [
        styles.cardDetail,
        isDisabled && styles.isDisabled,
        'cdg-list-card-detail',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, isDisabled])

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div ref={ref} className={rootClass} {...htmlProps}>
          {title && (
            <h3
              className={`cdg-list-card-detail-title ${styles.cardDetailTitle}`}
            >
              {title}
            </h3>
          )}
          <div
            className={`cdg-list-card-detail-footer ${styles.cardDetailFooter}`}
          >
            {avatar && (
              <div
                className={`cdg-list-card-detail-avatar ${styles.cardDetailAvatar}`}
              >
                {React.cloneElement(avatar as React.ReactElement, {
                  size: 'xxs',
                })}
              </div>
            )}
            {description && (
              <span
                className={`cdg-list-card-detail-description ${styles.cardDetailDescription}`}
              >
                {description}
              </span>
            )}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default ListCardDetail
