import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import styles from './styles/list-card-detail.module.css'

interface Props {
  css?: CSS
  title?: string
  isDisabled?: boolean
  description?: string
  avatar?: React.ReactNode
  variant?: 'item' | 'interactive'
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

    const rootClass = classNames(
      styles.cardDetail,
      isDisabled && styles.isDisabled,
      className,
      'cdg-list-card-detail',
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div {...htmlProps} ref={ref} className={rootClass}>
          {title && (
            <h3
              className={classNames(
                styles.cardDetailTitle,
                'cdg-list-card-detail-title',
              )}
            >
              {title}
            </h3>
          )}
          <div
            className={classNames(
              styles.cardDetailFooter,
              'cdg-list-card-detail-footer',
            )}
          >
            {avatar && (
              <div
                className={classNames(
                  styles.cardDetailAvatar,
                  'cdg-list-card-detail-avatar',
                )}
              >
                {React.cloneElement(avatar as React.ReactElement, {
                  size: 'xxs',
                })}
              </div>
            )}
            {description && (
              <span
                className={classNames(
                  styles.cardDetailDescription,
                  'cdg-list-card-detail-description',
                )}
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
