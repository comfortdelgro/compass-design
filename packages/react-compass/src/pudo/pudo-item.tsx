import React, {useCallback, useMemo, useRef} from 'react'
import Button from '../button'
import TextField from '../textfield'
import {DefaultIcons} from './pudo.config'
import {StyledPUDOItem} from './pudo.styles'
import {PudoItemPrivateProps} from './pudo.types'

const PudoItem = <TItemName extends PropertyKey>({
  index,
  itemsLength,
  name,
  className = '',
  css = {},
  icon,

  type = 'input',
  value = '',
  placeholder = '',
  title,
  content,

  onValueChange,
  onInputFocus,
  allowSwap = false,
  handleSwap,
  maxLength = 255,
  isRequired = false,
  alignIcon = 'center',
  compact,
  isClearable = false,
}: PudoItemPrivateProps<TItemName>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const pudoItemCSS = useMemo(
    () => ({...css, zIndex: itemsLength - 1 - index ?? undefined}),
    [css, index, itemsLength],
  )

  const handleClearInput = useCallback(() => {
    onValueChange?.('')
    inputRef.current?.focus()
  }, [onValueChange])

  const renderPudoContent = useCallback(() => {
    switch (type) {
      case 'input':
        return (
          <TextField
            inputRef={inputRef}
            className='cdg-pudo-item__input'
            css={{
              '& > div': {
                border: 'none',
                height: 'unset',
                backgroundColor: 'inherit',
              },
              input: {
                padding: '$2 0',
                height: '$12',
                fontWeight: '$normal',
                backgroundColor: 'inherit',
                '&::placeholder': {
                  fontWeight: '$normal',
                },
              },
              '.right-icon': {
                marginRight: 0,
              },
            }}
            type='text'
            name={name.toString()}
            value={value}
            onFocus={(event) => onInputFocus?.(event)}
            onChange={(v) => onValueChange?.(v.toString())}
            placeholder={placeholder}
            maxLength={maxLength}
            isRequired={isRequired}
            rightIcon={
              <Button
                css={{
                  padding: 0,
                  width: '$6',
                  height: '$6',
                  '.children > svg': {
                    width: '$4',
                    height: '$4',
                  },
                  ...(!value || !isClearable ? {display: 'none'} : undefined),
                }}
                className='cdg-pudo-item__input-btn-clear'
                variant='ghost'
                type='button'
                onClick={() => handleClearInput()}
                aria-label='Clear input'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M7.29289 5.73746C7.68342 6.12798 8.31658 6.12798 8.70711 5.73746L12.7376 1.70698C13.1281 1.31646 13.7613 1.31646 14.1518 1.70699L14.2929 1.84808C14.6834 2.23861 14.6834 2.87177 14.2929 3.2623L10.2624 7.29277C9.87189 7.68329 9.87189 8.31646 10.2624 8.70698L14.2929 12.7375C14.6834 13.128 14.6834 13.7612 14.2929 14.1517L14.1518 14.2928C13.7613 14.6833 13.1281 14.6833 12.7376 14.2928L8.70711 10.2623C8.31658 9.87177 7.68342 9.87177 7.29289 10.2623L3.26242 14.2928C2.87189 14.6833 2.23873 14.6833 1.8482 14.2928L1.70711 14.1517C1.31658 13.7611 1.31658 13.128 1.70711 12.7375L5.73758 8.70698C6.12811 8.31646 6.12811 7.6833 5.73758 7.29277L1.70711 3.2623C1.31658 2.87177 1.31658 2.23861 1.70711 1.84808L1.8482 1.70698C2.23873 1.31646 2.87189 1.31646 3.26242 1.70698L7.29289 5.73746Z'
                    fill='#B4B4B4'
                  />
                </svg>
              </Button>
            }
          />
        )

      case 'custom':
        return (
          <div className='cdg-pudo-item__custom'>
            {typeof title === 'string' && title ? (
              <div className='cdg-pudo-item__custom-title' title={title}>
                {title}
              </div>
            ) : (
              title
            )}
            {typeof content === 'string' && content ? (
              <p className='cdg-pudo-item__custom-content'>{content}</p>
            ) : (
              content
            )}
          </div>
        )

      default:
        return <></>
    }
  }, [type, value, onValueChange])

  if (type === 'custom' && !title && !content) {
    return <></>
  }

  return (
    <StyledPUDOItem
      css={pudoItemCSS}
      className={`cdg-pudo-item ${className}`}
      type={type}
      alignIcon={alignIcon}
      {...(compact ? {compact} : undefined)}
    >
      <div className='cdg-pudo-item__icon'>
        <div className='cdg-pudo-item__icon-shape'>
          {icon || DefaultIcons[index]}
        </div>
      </div>
      {renderPudoContent()}

      {allowSwap && type === 'input' ? (
        <button
          className='cdg-pudo-item__swap-icon'
          type='button'
          onClick={() => handleSwap?.()}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 23C5.9247 23 1 18.0753 1 12C1 5.9247 5.9247 1 12 1C18.0753 1 23 5.9247 23 12C23 18.0753 18.0753 23 12 23ZM6.5 8.7H8.7V13.1H10.9V8.7H13.1L9.8 4.85L6.5 8.7ZM17.5 15.3H15.3V10.9H13.1V15.3H10.9L14.2 19.15L17.5 15.3Z'
              fill='#0142AF'
            />
          </svg>
        </button>
      ) : (
        <></>
      )}
    </StyledPUDOItem>
  )
}

export default PudoItem
