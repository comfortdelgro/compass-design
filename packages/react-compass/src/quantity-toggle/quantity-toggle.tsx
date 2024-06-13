'use client'
import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {useId} from '../utils/useId'
import styles from './styles/quantity-toggle.module.css'
import {AriaNumberFieldProps} from './utils/types'
import useNumberField from './utils/useNumberField'
import useNumberFieldState from './utils/useNumberFieldState'

interface Props extends AriaNumberFieldProps {
  css?: CSS
  helperText?: string
  isErrored?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  disableScroll?: boolean
  className?: string
  onUpdate?: (
    value: string | number | readonly string[] | undefined,
    number: number,
  ) => void
}

export type QuantityToggleProps = Props &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>

const QuantityToggle = React.forwardRef<HTMLInputElement, QuantityToggleProps>(
  (props, ref) => {
    const {
      id,
      label,
      css = {},
      onUpdate,
      className,
      isRequired,
      isErrored = false,
      ...ariaSafeProps
    } = props

    const toggleId = useId(id)
    const quantityToggleRef = useDOMRef<HTMLInputElement>(ref)

    const state = useNumberFieldState(ariaSafeProps)
    const {inputProps, incrementButtonProps, decrementButtonProps} =
      useNumberField(props, state, quantityToggleRef)

    React.useEffect(() => {
      onUpdate?.(state.inputValue, state.numberValue)
    }, [state.numberValue, state.inputValue, onUpdate])

    const rootClass = classNames(
      styles.quantityToggleWrapper,
      !!inputProps.disabled && styles.quantityToggleWrapperIsDisabled,
      className,
      'cdg-quantity-toggle',
    )

    const quantityToggleClass = classNames(
      styles.quantityToggle,
      isErrored && styles.quantityToggleIsErrored,
      'cdg-quantity-toggle-content',
    )
    const inputClass = classNames(
      styles.quantityToggleInput,
      !!inputProps.disabled && styles.quantityToggleInputIsDisabled,
      isErrored && styles.quantityToggleInputIsErrored,
      'cdg-quantity-toggle-input',
    )

    const buttonClass = classNames(
      styles.quantityToggleButton,
      !!inputProps.disabled && styles.quantityToggleButtonIsDisabled,
      isErrored && styles.quantityToggleButtonIsErrored,
      'cdg-quantity-toggle-button',
    )

    const errorMessageClass = classNames(
      styles.quantityToggleHelperText,
      styles.quantityToggleHelperTextIsErrored,
      'cdg-quantity-toggle-error-message',
    )

    return (
      <CssInjection css={css}>
        <div className={rootClass}>
          {props.label && (
            <label
              htmlFor={toggleId}
              className={classNames(styles.label, 'cdg-quantity-toggle-label')}
            >
              {label}
              {isRequired && (
                <span
                  className={classNames(
                    styles.asterix,
                    'cdg-quantity-toggle-asterix',
                  )}
                >
                  *
                </span>
              )}
            </label>
          )}
          <div className={quantityToggleClass}>
            <button className={buttonClass} {...decrementButtonProps}>
              -
            </button>
            <input
              {...inputProps}
              id={toggleId}
              className={inputClass}
              ref={quantityToggleRef}
            />
            <button className={buttonClass} {...incrementButtonProps}>
              +
            </button>
          </div>
          {isErrored && props.errorMessage && (
            <div className={errorMessageClass}>{props.errorMessage}</div>
          )}
          {props.helperText && (
            <div
              className={classNames(
                styles.quantityToggleHelperText,
                'cdg-quantity-toggle-helper-text',
              )}
            >
              {props.helperText}
            </div>
          )}
        </div>
      </CssInjection>
    )
  },
)

export default QuantityToggle
