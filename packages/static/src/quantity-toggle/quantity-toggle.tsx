'use client'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {useId} from '../utils/useId'
import styles from './styles/quantity-toggle.module.css'
import {AriaNumberFieldProps} from './utils/types'
import useNumberField from './utils/useNumberField'
import useNumberFieldState from './utils/useNumberFieldState'

interface Props extends AriaNumberFieldProps {
  css?: unknown
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

    const rootClass = React.useMemo(
      () =>
        [
          styles.quantityToggleWrapper,
          !!inputProps.disabled && styles.quantityToggleWrapperIsDisabled,
          'cdg-quantity-toggle-root',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [className, inputProps.disabled],
    )

    const quantityToggleClass = React.useMemo(
      () =>
        [
          styles.quantityToggle,
          isErrored && styles.quantityToggleIsErrored,
          'cdg-quantity-toggle',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [className, isErrored],
    )
    const inputClass = React.useMemo(
      () =>
        [
          styles.quantityToggleInput,
          !!inputProps.disabled && styles.quantityToggleInputIsDisabled,
          isErrored && styles.quantityToggleInputIsErrored,
          'cdg-quantity-toggle-input',
        ]
          .filter(Boolean)
          .join(' '),
      [inputProps.disabled, isErrored],
    )

    const buttonClass = React.useMemo(
      () =>
        [
          styles.quantityToggleButton,
          !!inputProps.disabled && styles.quantityToggleButtonIsDisabled,
          isErrored && styles.quantityToggleButtonIsErrored,
          'cdg-quantity-toggle-button',
        ]
          .filter(Boolean)
          .join(' '),
      [inputProps.disabled, isErrored],
    )

    const errorMessageClass = [
      styles.quantityToggleHelperText,
      styles.quantityToggleHelperTextIsErrored,
      'cdg-quantity-toggle-error-message',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css}>
        <div className={rootClass}>
          {props.label && (
            <label
              htmlFor={toggleId}
              className={`${styles.label} cdg-quantity-toggle-label`}
            >
              {label}
              {isRequired && (
                <span
                  className={`${styles.asterix} cdg-quantity-toggle-asterix`}
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
              id={toggleId}
              className={inputClass}
              ref={quantityToggleRef}
              {...inputProps}
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
              className={`${styles.quantityToggleHelperText} cdg-quantity-toggle-helper-text`}
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
