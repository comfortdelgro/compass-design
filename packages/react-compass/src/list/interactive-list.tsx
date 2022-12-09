import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Icon from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledInteractiveList} from './interactive-list.styles'

interface Props extends StyledComponentProps {
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
        <StyledInteractiveList
          variant={variant}
          ref={ref}
          css={css}
          {...delegated}
        >
          <div className='interactive-list-avatar'>
            {avatar ? avatar : <></>}
          </div>
          <div className='interactive-list-dropdown-body'>
            <h2 className='interactive-list-title'>{title}</h2>
            <span className='interactive-list-description'>{description}</span>
          </div>
          {showIcon ? (
            <div className='interactive-list-icon-wrapper'>
              <Icon
                icon={faChevronRight}
                className='interactive-list-chevron-icon'
              />
            </div>
          ) : (
            <></>
          )}
        </StyledInteractiveList>
      )
    }

    return (
      <StyledInteractiveList
        ref={ref}
        css={css}
        variant={variant}
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
      </StyledInteractiveList>
    )
  },
)

export default InteractiveList
