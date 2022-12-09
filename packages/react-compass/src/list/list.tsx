import {usePress} from '@react-aria/interactions'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import ListImage from './list-image'
import {ListVariantProps, StyledList} from './list.styles'

interface Props extends StyledComponentProps, ListVariantProps {
  leftInfo?: React.ReactNode
  title?: string
  description?: string
  rightInfo?: {
    text?: string
    icon?: React.ReactNode
  }
}

export type ListProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const {
    leftInfo,
    title,
    description,
    rightInfo,
    variant = 'interactive',
    isDisabled = false,
    size = 'md',
    css = {},
    className = '',
    ...delegated
  } = props

  const {pressProps, isPressed} = usePress({
    onPress: (e) => {
      if (isDisabled) return
      const event = e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>
      if (props.onClick) props.onClick(event)
    },
  })

  const variantProps = {isDisabled, size, variant}

  return (
    <StyledList
      ref={ref}
      tabIndex={0}
      role='button'
      css={css}
      className={`${className} ${isPressed ? 'pressed' : ''} ${
        isDisabled ? 'disabled' : ''
      } ${variant === 'interactive' ? 'interactive' : 'item'}`}
      {...variantProps}
      {...delegated}
      {...pressProps}
    >
      <div className='list-left-side'>
        {leftInfo && <div className='list-left-info'>{leftInfo}</div>}
        {(title || description) && (
          <div className='list-text-wrapper'>
            {title && <h2 className='list-text-title'>{title}</h2>}
            {description && (
              <span className='list-text-description'>{description}</span>
            )}
          </div>
        )}
      </div>
      {rightInfo && (
        <div className='list-right-side'>
          {rightInfo.text && (
            <span className='list-right-side-text'>{rightInfo?.text}</span>
          )}
          {rightInfo?.icon}
        </div>
      )}
    </StyledList>
  )
})

export default List as typeof List & {Image: typeof ListImage}
