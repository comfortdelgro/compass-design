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
      let classes = `cdg-list-image ${styles.image}`
      if (isDisabled) classes += ` ${styles.isDisabled}`
      if (className) classes += ` ${className}`
      return classes
    }, [className, isDisabled])

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div ref={ref} className={rootClass} {...htmlProps}>
          {title && <h3 className={styles.cardDetailTitle}>{title}</h3>}
          <div className={styles.cardDetailFooter}>
            {avatar && <div className={styles.cardDetailAvatar}>{avatar}</div>}
            {description && (
              <span className={styles.cardDetailDescription}>
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
