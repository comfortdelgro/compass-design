import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import ListImage from './list-image'
import {ListVariantProps, StyledList} from './list.styles'

interface Props extends StyledComponentProps, ListVariantProps {
  leftInfo?: React.ReactNode
  title?: string
  description?: string
  descriptionIcon?: React.ReactNode
  rightInfo?: {
    text?: string
    description?: string
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
    descriptionIcon,
    ...delegated
  } = props

  const [isPressed, setPressed] = useState(false)
  const variantProps = {isDisabled, size, variant}
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDisabled) return
    if (props.onClick) {
      props.onClick(e)
    }
  }

  const onMouse = (value: boolean) => {
    if (isDisabled) return
    setPressed(value)
  }

  return (
    <StyledList
      ref={ref}
      tabIndex={0}
      role='button'
      css={css}
      className={`${className} ${isPressed ? 'pressed' : ''}
        ${variant === 'interactive' ? 'interactive' : 'item'}`}
      isPressed={isPressed}
      onClick={handleClick}
      onMouseDown={() => onMouse(true)}
      onMouseUp={() => onMouse(false)}
      {...variantProps}
      {...delegated}
    >
      <div className='list-left-side'>
        {leftInfo && <div className='list-left-info'>{leftInfo}</div>}
        {(title || description) && (
          <div className='list-text-wrapper'>
            {title && <h2 className='list-text-title'>{title}</h2>}
            <div>
              {description && (
                <span className='list-text-description'>{description}</span>
              )}
              {descriptionIcon && descriptionIcon}
            </div>
          </div>
        )}
      </div>
      {rightInfo && (
        <>
          {variant === 'h5' ? (
            <div className='list-h5-right-side'>
              {rightInfo?.text && (
                <h2 className='list-text-title'>{rightInfo?.text}</h2>
              )}
              {rightInfo?.description && (
                <span className='list-text-description'>
                  {rightInfo?.description}
                </span>
              )}
            </div>
          ) : (
            <div className='list-right-side'>
              {rightInfo.text && (
                <span className='list-right-side-text'>{rightInfo?.text}</span>
              )}
              {rightInfo?.icon}
            </div>
          )}
        </>
      )}
    </StyledList>
  )
})

export default List as typeof List & {Image: typeof ListImage}
