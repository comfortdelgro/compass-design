import React, {useEffect, useState} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import RadioGroup, {RadioContext} from './radio-group'
import styles from './styles/radio.module.css'
import Tooltip from './tooltip'

interface Props {
  className?: string
  label?: React.ReactNode
  description?: string
  rightLabel?: string
  tooltip?: string
  variant?: 'simple' | 'outlined'
  inputPosition?: 'left' | 'right'
  isDisabled?: boolean
  value: string
  id?: string
  name?: string
  css?: CSS
}

export type RadioProps = Props &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    value,
    label,
    description,
    tooltip,
    rightLabel,
    isDisabled = false,
    variant = 'simple',
    inputPosition = 'left',
    name = '',
    css = {},
    className,
    ...htmlProps
  } = props
  const radioRef = useDOMRef<HTMLInputElement>(ref)
  const context = React.useContext(RadioContext)
  const state = context
  const [isChecked, setIsChecked] = useState(state.value === value)

  const onClick = () => {
    if (!isDisabled) {
      state.handleOnClickRadionButton(value) // clicked value
    }
  }

  useEffect(() => {
    setIsChecked(state.value === value)
  }, [state.value, value])

  const rootClasses = [
    styles.radio,
    variant && styles[`radioVariant${capitalizeFirstLetter(variant)}`],
    inputPosition === 'left' ? '' : styles.radioInputPositionRight,
    isDisabled && styles.radioDisabled,
    className,
    'cdg-radio',
  ]
    .filter(Boolean)
    .join(' ')

  const inputClasses = [
    styles.radioInput,
    variant && styles[`radioInputVariant${capitalizeFirstLetter(variant)}`],
    isChecked && styles.radioInputActive,
    isDisabled && styles.radioInputDisabled,
    'cdg-radio-input',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <div
        {...htmlProps}
        role='radio'
        onClick={onClick}
        aria-valuetext={value}
        aria-disabled={isDisabled}
        className={rootClasses}
      >
        <div className={styles.radioWrapper}>
          <div className={inputClasses} />
          <input
            type='radio'
            ref={radioRef}
            name={state.radioName ? state.radioName : name}
            disabled={isDisabled}
          ></input>
        </div>
        <div
          className={`${styles.radioContentWrapper} cdg-radio-content-wrapper`}
        >
          {!!label && (
            <div className={`${styles.radioLabel} cdg-radio-label`}>
              {label} {!!tooltip && <Tooltip text={tooltip} />}
            </div>
          )}

          {description && (
            <p className={`${styles.radioDescription} cdg-radio-description`}>
              {description}
            </p>
          )}
        </div>
        {!!rightLabel && (
          <p className={`${styles.radioRightLabel} cdg-radio-right-label`}>
            {rightLabel}
          </p>
        )}
      </div>
    </CssInjection>
  )
}) as typeof Radio & {Group: typeof RadioGroup}

export default Radio
