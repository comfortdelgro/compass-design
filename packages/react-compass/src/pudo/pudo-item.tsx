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
}: PudoItemPrivateProps<TItemName>) => {
  const pudoItemCSS = useMemo(
    () => ({...css, zIndex: itemsLength - 1 - index ?? undefined}),
    [css, index, itemsLength],
  )

  const renderPudoContent = useCallback(() => {
    switch (type) {
      /**
       * @deprecated
       * @todo remove label type when `@comfortdelgro/react-compass@3.x` is planned to be released soon.
       */
      case 'label':
        return (
          <p className='cdg-pudo-item__label' title={value}>
            {value}
          </p>
        )

      case 'input':
        return (
          <TextField
            className='cdg-pudo-item__input'
            css={{
              '&.cdg-pudo-item__input > div': {
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
            onFocus={(event) => onInputFocus?.(event)}
            onChange={(v) => onValueChange?.(v.toString())}
            placeholder={placeholder}
            maxLength={maxLength}
            isRequired={isRequired}
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

  if (
    (type === 'custom' && !title && !content) ||
    (type === 'label' && !value)
  ) {
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
      <div className='cdg-pudo-item__icon'>{icon || DefaultIcons[index]}</div>
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
