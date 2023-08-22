import React, {useCallback, useMemo} from 'react'
import TextField from '../textfield'
import {DefaultIcons} from './pudo.config'
import {StyledPUDOItem} from './pudo.styles'
import {PudoItemPrivateProps} from './pudo.types'

const PudoItem = <TItemName extends string | number | symbol>({
  index,
  itemsLength,
  name,
  className = '',
  css = {},
  type = 'input',
  icon,
  value = '',
  onValueChange,
  allowSwap = false,
  handleSwap,
  placeholder = '',
  maxLength = 255,
  ...delegated
}: PudoItemPrivateProps<TItemName>) => {
  const pudoItemCSS = useMemo(
    () => ({...css, zIndex: itemsLength - 1 - index ?? undefined}),
    [css, index, itemsLength],
  )

  const renderPudoContent = useCallback(() => {
    switch (type) {
      case 'label':
        return (
          <p className='pudo-item__label' title={value}>
            {value}
          </p>
        )

      case 'input':
        return (
          <TextField
            className='pudo-item__input'
            css={{
              '&.pudo-item__input > div': {
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
            }}
            type='text'
            name={name.toString()}
            value={value}
            onChange={(v) => onValueChange?.(v.toString())}
            placeholder={placeholder}
            maxLength={maxLength}
          />
        )

      default:
        return <></>
    }
  }, [type, value, onValueChange])

  return (
    <StyledPUDOItem
      css={pudoItemCSS}
      className={`pudo-item ${className}`}
      {...{type}}
      {...delegated}
    >
      <div className='pudo-item__icon'>{icon || DefaultIcons[index]}</div>
      {renderPudoContent()}
      <svg
        className='pudo-item__connect-icon'
        width='20'
        height='29'
        viewBox='0 0 20 29'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='10' cy='5.5' r='1.5' fill='#B4B4B4' />
        <circle cx='10' cy='11.5' r='1.5' fill='#B4B4B4' />
        <circle cx='10' cy='17.5' r='1.5' fill='#B4B4B4' />
        <circle cx='10' cy='23.5' r='1.5' fill='#B4B4B4' />
      </svg>

      {allowSwap && type === 'input' ? (
        <button
          className='pudo-item__swap-icon'
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
