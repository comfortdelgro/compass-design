/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import Button from '../button'
import CssInjection from '../utils/objectToCss/CssInjection'
import ListCardDetail, {ListCardDetailProps} from './list-card-detail'
import styles from './styles/list-card.module.css'

interface Props {
  css?: unknown
  title?: string
  isDisabled?: boolean
  description?: string
  badge?: React.ReactNode
  showActionButton?: boolean
}

export type ListCardProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ListCard = React.forwardRef<HTMLDivElement, ListCardProps>(
  (props, ref) => {
    const {
      title,
      badge,
      children,
      className,
      description,
      isDisabled = false,
      showActionButton = false,
      css = {},
      ...delegated
    } = props

    const clonedChildren = React.Children.toArray(children).map((child) => {
      const typedChild = child as React.DetailedReactHTMLElement<
        ListCardDetailProps,
        HTMLElement
      >
      return React.cloneElement(typedChild, {isDisabled})
    })

    const rootClass = React.useMemo(() => {
      return [
        styles.listCard,
        isDisabled && styles.listCardIsDisabled,
        'cdg-list-card',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, isDisabled])

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div ref={ref} className={rootClass} {...delegated}>
          <div className={`${styles.listCardHeader} cdg-list-card-header`}>
            {title && (
              <h2 className={`${styles.listCardTitle} cdg-list-card-title`}>
                {title}
              </h2>
            )}
            <div
              className={`${styles.listCardHeaderRight} cdg-list-card-header-right`}
            >
              {badge ? badge : null}
              {!children && showActionButton ? (
                <Button
                  isDisabled={!!isDisabled}
                  variant='ghost'
                  aria-label='Action Header'
                >
                  <svg className={styles.listCardIcon} viewBox='0 0 128 512'>
                    <path
                      fill='currentColor'
                      d='M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z'
                    />
                  </svg>
                </Button>
              ) : null}
            </div>
          </div>
          <div
            className={`${styles.listCardDescription} cdg-list-card-description`}
          >
            {description && <span>{description}</span>}
          </div>
          <div className={`${styles.listCardFooter} cdg-list-card-footer`}>
            <div className={`${styles.listCardContent} cdg-list-card-content`}>
              {clonedChildren.map((child) => child)}
            </div>
            {children && showActionButton ? (
              <Button
                isDisabled={!!isDisabled}
                variant='ghost'
                aria-label='Action Footer'
              >
                <svg className={styles.listCardIcon} viewBox='0 0 128 512'>
                  <path
                    fill='currentColor'
                    d='M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z'
                  />
                </svg>
              </Button>
            ) : null}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default ListCard as typeof ListCard & {Detail: typeof ListCardDetail}
