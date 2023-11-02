import clsx from 'clsx'
import {memo} from 'react'
import TextField from '../textfield'
import {DefaultIcons} from './pudo.config'
import {PudoItemPrivateProps} from './pudo.types'
import classes from './styles/pudo.module.css'

const PudoItemComponent = <TItemName extends string | number | symbol>({
  index,
  itemsLength,
  name,
  className = '',
  type = 'input',
  icon,
  value = '',
  onValueChange,
  onInputFocus,
  allowSwap = false,
  handleSwap,
  placeholder = '',
  maxLength = 255,
  isRequired = false,
}: PudoItemPrivateProps<TItemName>) => {
  const renderPudoContent = () => {
    switch (type) {
      case 'label':
        return (
          <p
            className={clsx(classes.pudoItemLabel, 'pudo-item__label')}
            title={value}
          >
            {value}
          </p>
        )

      case 'input':
        return (
          <TextField
            className={clsx(classes.pudoItemInput, 'pudo-item__input')}
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

      default:
        return <></>
    }
  }

  return (
    <div
      className={clsx(
        classes.pudoItem,
        type && classes[type],
        'pudo-item ',
        className,
      )}
      style={{zIndex: itemsLength - 1 - index ?? undefined}}
    >
      <div className={clsx(classes.pudoItemIcon, 'pudo-item__icon')}>
        {icon || DefaultIcons[index]}
      </div>
      {renderPudoContent()}
      <div
        className={clsx(classes.pudoItemConnectIcon, 'pudo-item__connect-icon')}
      >
        <svg
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
      </div>

      {allowSwap && type === 'input' ? (
        <button
          className={clsx(classes.pudoItemSwapIcon, 'pudo-item__swap-icon')}
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
    </div>
  )
}

const PudoItem = memo(PudoItemComponent)
export default PudoItem
