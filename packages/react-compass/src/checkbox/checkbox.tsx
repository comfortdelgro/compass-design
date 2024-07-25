import React, {useEffect, useState} from 'react'
import {useIsDarkTheme} from '../theme/useCurrentTheme'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/checkbox.module.css'

interface Props {
  id?: string
  css?: CSS
  name?: string
  value?: string
  autoFocus?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isSelected?: boolean
  defaultSelected?: boolean
  isIndeterminate?: boolean
  cssCheckBoxInput?: CSS
  children?: React.ReactNode
  validationState?: 'valid' | 'invalid'
  variant?: 'default' | 'rounded'
  onChange?: (isSelected: boolean) => void
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type CheckboxProps = Props &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      css = {},
      children,
      className,
      isSelected,
      validationState,
      isDisabled = false,
      isReadOnly = false,
      variant = 'default',
      isIndeterminate = false,
      defaultSelected = false,
      cssCheckBoxInput = {},
      onChange,
      onChangeEvent,
      ...ariaSafeProps
    } = props

    const isDarkTheme = useIsDarkTheme()

    const [checked, setChecked] = useState<boolean>(
      isSelected || defaultSelected,
    )
    const checkboxRef = useDOMRef<HTMLInputElement>(ref)
    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const handleCheckboxChange = (
      event?: React.ChangeEvent<HTMLInputElement>,
    ) => {
      onChangeEvent?.(event)
      if (isDisabled || isReadOnly) return
      if (onChange) {
        onChange(!checked)
      }
      if (isSelected !== undefined) return

      setChecked(!checked)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const key = event.key
      if (key === 'Enter' || key === ' ') {
        event.preventDefault()
        handleCheckboxChange()
      }
    }

    useEffect(() => {
      setChecked((isSelected || defaultSelected) ?? false)
    }, [defaultSelected, isSelected])

    const rootClasses = classNames(styles.checkbox, 'cdg-checkbox', className)

    const labelClasses = classNames(styles.label, 'cdg-checkbox-label')

    const boxClasses = classNames(
      styles.box,
      isDarkTheme && styles.boxDarkTheme,
      variant === 'rounded' && styles.rounded,
      'cdg-checkbox-box',
    )

    return (
      <CssInjection css={css} childrenRef={checkboxRef}>
        <div {...htmlProps} className={rootClasses}>
          <label className={labelClasses}>
            <CssInjection css={cssCheckBoxInput} childrenRef={checkboxRef}>
              <input
                tabIndex={-1}
                type='checkbox'
                ref={checkboxRef}
                checked={checked}
                disabled={isDisabled}
                readOnly={isReadOnly}
                className={classNames(styles.input, 'cdg-checkbox-input')}
                aria-readonly={isReadOnly === true ? 'true' : undefined}
                aria-invalid={
                  validationState === 'invalid' ? 'true' : undefined
                }
                onChange={handleCheckboxChange}
              />
            </CssInjection>

            <div
              tabIndex={0}
              role='checkbox'
              className={boxClasses}
              aria-checked={checked}
              onKeyDown={handleKeyDown}
            >
              {checked && (
                <span
                  className={classNames(
                    styles.checkmark,
                    'cdg-checkbox-checkmark',
                  )}
                >
                  {isIndeterminate ? <InterminateIcon /> : <TickIcon />}
                </span>
              )}
            </div>

            {children && <span>{children}</span>}
          </label>
        </div>
      </CssInjection>
    )
  },
)

const InterminateIcon = () => (
  <svg
    className={classNames(styles.checkmarkIcon, 'cdg-checkbox-icon')}
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z'
    ></path>
  </svg>
)

const TickIcon = () => (
  <svg
    className={classNames(styles.checkmarkIcon, 'cdg-checkbox-icon')}
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
    ></path>
  </svg>
)

export default Checkbox
