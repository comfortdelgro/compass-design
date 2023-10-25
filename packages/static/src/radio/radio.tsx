import React, {useEffect, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {capitalizeFirstLetter} from '../utils/string'
import RadioGroup, {RadioContext} from './radio-group'
import styles from './styles/radio.module.css'
import Tooltip from './tooltip'

interface Props {
  className?: string
  label?: React.ReactNode
  description?: string
  rightLabel?: string
  tooltip?: string
  variant?: 'simple' | 'outlined' | 'h5'
  inputPosition?: 'left' | 'right'
  isDisabled?: boolean
  value: string
  id?: string
  name?: string
  css?: unknown
}

export type RadioProps = Props

const Radio: React.FC<RadioProps> = (props) => {
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
    ...htmlProps
  } = props
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const context = React.useContext(RadioContext)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const state = context
  const [isChecked, setIsChecked] = useState(state.value === value)

  const onClick = () => {
    if (!isDisabled) {
      state.handleOnClickRadionButton(value) // clicked value
    }
  }

  useEffect(() => {
    setIsChecked(state.value === value)
  }, [state.value])

  const internalRadioClassName = `${
    variant ? styles[`radioVariant${capitalizeFirstLetter(variant)}`] : ''
  } ${inputPosition === 'left' ? '' : styles.radioInputPositionRight} ${
    isDisabled ? styles.radioDisabled : ''
  }
  `

  const internalRadioInputClassName = `${
    variant ? styles[`radioInputVariant${capitalizeFirstLetter(variant)}`] : ''
  } ${isChecked ? styles.radioInputActive : ''} ${
    isDisabled ? styles.radioInputDisabled : ''
  }
  `

  return (
    <CssInjection css={css}>
      <div
        className={`cdg-radio ${styles.radio} ${internalRadioClassName}`}
        onClick={onClick}
        role='radio'
        aria-disabled={isDisabled}
        aria-valuetext={value}
        {...htmlProps}
      >
        <div className={styles.radioWrapper}>
          <div
            className={`cdg-radio-input ${styles.radioInput} ${internalRadioInputClassName}`}
          />
          <input
            type='radio'
            name={state.radioName ? state.radioName : name}
            disabled={isDisabled}
          ></input>
        </div>
        <div
          className={`cdg-radio-content-wrapper ${styles.radioContentWrapper}`}
        >
          {!!label && (
            <div className={`cdg-radio-label ${styles.radioLabel}`}>
              {label} {!!tooltip && <Tooltip text={tooltip} />}
            </div>
          )}

          {description && (
            <p className={`cdg-radio-label  ${styles.radioDescription}`}>
              {description}
            </p>
          )}
        </div>
        {!!rightLabel && (
          <p className={`cdg-radio-label ${styles.radioRightLabel}`}>
            {rightLabel}
          </p>
        )}
      </div>
    </CssInjection>
  )
}

export default Radio as typeof Radio & {Group: typeof RadioGroup}
