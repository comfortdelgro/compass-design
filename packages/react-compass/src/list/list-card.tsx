import React from 'react'
import Button from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import ListCardDetail, {ListCardDetailProps} from './list-card-detail'
import {ListCardVariantProps, StyledListCard} from './list-card.styles'

interface Props extends StyledComponentProps, ListCardVariantProps {
  title?: string
  badge?: React.ReactNode
  description?: string
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

    const variantProps = {isDisabled}

    const clonedChildren = React.Children.toArray(children).map((child) => {
      const typedChild = child as React.DetailedReactHTMLElement<
        ListCardDetailProps,
        HTMLElement
      >
      return React.cloneElement(typedChild, {isDisabled})
    })

    return (
      <StyledListCard ref={ref} css={css} {...variantProps} {...delegated}>
        <div className='list-card-header'>
          {title ? <h2 className='list-card-title'>{title}</h2> : <></>}
          <div className='list-card-header-right-side'>
            {badge ? badge : <></>}
            {!children && showActionButton ? (
              <Button
                isDisabled={!!isDisabled}
                variant='ghost'
                aria-label='Action Header'
              >
                <svg className='list-card-ellipsis-icon' viewBox='0 0 128 512'>
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
        <div className='list-card-description'>
          {description ? <span>{description}</span> : <></>}
        </div>
        <div className='list-card-footer'>
          <div className='list-card-detail-wrapper'>
            {clonedChildren.map((child) => child)}
          </div>
          {children && showActionButton ? (
            <Button
              isDisabled={!!isDisabled}
              variant='ghost'
              aria-label='Action Footer'
              css={{marginTop: '$4'}}
            >
              <svg className='list-card-ellipsis-icon' viewBox='0 0 128 512'>
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
      </StyledListCard>
    )
  },
)

export default ListCard as typeof ListCard & {Detail: typeof ListCardDetail}
