import React, {useEffect, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/checkbox.module.css'

interface Props {
  id?: string
  css?: unknown
  name?: string
  value?: string
  autoFocus?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isSelected?: boolean
  defaultSelected?: boolean
  isIndeterminate?: boolean
  cssCheckBoxInput?: unknown
  children?: React.ReactNode
  validationState?: 'valid' | 'invalid'
  variant?: 'default' | 'rounded' | 'h5'
  onChange?: (isSelected: boolean) => void
}

export type CheckboxProps = Props &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      css = {},
      children,
      isSelected,
      validationState,
      isDisabled = false,
      isReadOnly = false,
      variant = 'default',
      isIndeterminate = false,
      defaultSelected = false,
      cssCheckBoxInput = {},
      onChange,
      ...ariaSafeProps
    } = props

    const [checked, setChecked] = useState<boolean>(
      isSelected || defaultSelected,
    )
    const checkboxRef = useDOMRef<HTMLInputElement>(ref)
    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const handleCheckboxChange = () => {
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

    const labelStyle = React.useMemo(() => {
      let className = `cdg-checkbox-label ${styles.label}`
      if (variant === 'h5') className += ` ${styles.labelVariantH5}`
      if (variant === 'h5' && checked)
        className += ` ${styles.labelVariantH5Checked}`
      return className
    }, [checked, variant])

    const checkboxBoxStyle = React.useMemo(() => {
      let className = `cdg-checkbox-checkboxBox ${styles.checkboxBox}`
      if (variant === 'rounded') className += ` ${styles.rounded}`
      return className
    }, [variant])

    return (
      <CssInjection css={css} childrenRef={checkboxRef}>
        <div
          className={`cdg-checkbox-wrapper ${styles.wrapper}`}
          {...htmlProps}
        >
          <label className={labelStyle}>
            <CssInjection css={cssCheckBoxInput} childrenRef={checkboxRef}>
              <input
                tabIndex={-1}
                type='checkbox'
                ref={checkboxRef}
                checked={checked}
                disabled={isDisabled}
                readOnly={isReadOnly}
                className={`cdg-checkbox-input ${styles.input}`}
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
              aria-checked={checked}
              className={checkboxBoxStyle}
              onKeyDown={handleKeyDown}
            >
              <span className={`cdg-checkbox-checkmark ${styles.checkmark}`}>
                {isIndeterminate ? <InterminateIcon /> : <TickIcon />}
              </span>
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
    className={`cdg-checkbox-checkmarkIcon ${styles.checkmarkIcon}`}
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
    className={`cdg-checkbox-checkmarkIcon ${styles.checkmarkIcon}`}
    viewBox='0 0 448 512'
  >
    <path
      fill='currentColor'
      d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
    ></path>
  </svg>
)

export default Checkbox
