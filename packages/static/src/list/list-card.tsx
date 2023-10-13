/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import Button from '../button'
import styles from './styles/list-card.module.css'
import CssInjection from '../utils/objectToCss/CssInjection'
import ListCardDetail, {ListCardDetailProps} from './list-card-detail'

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
      description,
      children,
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

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div ref={ref} className={styles.listCard} {...delegated}>
          <div className={styles.listCardHeader}>
            {title ? <h2 className={styles.listCardTitle}>{title}</h2> : <></>}
            <div className={styles.listCardHeaderRight}>
              {badge ? badge : <></>}
              {!children && showActionButton ? (
                <Button
                  isDisabled={!!isDisabled}
                  variant='ghost'
                  aria-label='Action Header'
                >
                  <svg
                    className={styles.listCardIcon}
                    viewBox='0 0 128 512'
                  >
                    <path
                      fill='currentColor'
                      d='M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z'
                    />
                  </svg>
                </Button>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={styles.listCardDescription}>
            {description ? <span>{description}</span> : <></>}
          </div>
          <div className={styles.listCardFooter}>
            <div className={styles.listCardDetail}>
              {clonedChildren.map((child) => child)}
            </div>
            {children && showActionButton ? (
              <Button
                isDisabled={!!isDisabled}
                variant='ghost'
                aria-label='Action Footer'
                css={{marginTop: '$4'}}
              >
                <svg className={styles.listCardIcon} viewBox='0 0 128 512'>
                  <path
                    fill='currentColor'
                    d='M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z'
                  />
                </svg>
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default ListCard as typeof ListCard & {Detail: typeof ListCardDetail}
