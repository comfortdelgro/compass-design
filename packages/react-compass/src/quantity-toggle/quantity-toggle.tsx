import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  QuantityToggleVariantProps,
  StyledHelperText,
  StyledQuantityToggle,
} from './quantity-toggle.styles'
import {AriaNumberFieldProps} from './utils/types'
import useNumberField from './utils/useNumberField'
import useNumberFieldState from './utils/useNumberFieldState'

interface Props extends AriaNumberFieldProps, StyledComponentProps {
  helperText?: string
  isErrored?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  disableScroll?: boolean
  onUpdate?: (
    value: string | number | readonly string[] | undefined,
    number: number,
  ) => void
}

export type QuantityToggleProps = Props & QuantityToggleVariantProps

const QuantityToggle = React.forwardRef<HTMLInputElement, QuantityToggleProps>(
  (props, ref) => {
    const {
      css = {},
      isErrored = false,
      id = `cdg-element-${Math.random().toString(36).substring(2)}`,
      onUpdate,
      ...ariaSafeProps
    } = props

    const quantityToggleRef = useDOMRef<HTMLInputElement>(ref)

    const state = useNumberFieldState(ariaSafeProps)
    const {inputProps, incrementButtonProps, decrementButtonProps} =
      useNumberField(props, state, quantityToggleRef)

    React.useEffect(() => {
      onUpdate?.(state.inputValue, state.numberValue)
    }, [state.numberValue, state.inputValue])

    return (
      <StyledQuantityToggle
        css={css}
        {...variantProps}
        isErrored={!!isErrored}
        isDisabled={!!inputProps.disabled}
      >
        {props.label && (
          <label htmlFor={id}>
            {props.label}
            {props.isRequired && <span>*</span>}
          </label>
        )}
        <div>
          <button {...decrementButtonProps}>-</button>
          <input {...inputProps} id={id} ref={quantityToggleRef} />
          <button {...incrementButtonProps}>+</button>
        </div>
        {isErrored && props.errorMessage && (
          <StyledHelperText error>{props.errorMessage}</StyledHelperText>
        )}
        {props.helperText && (
          <StyledHelperText>{props.helperText}</StyledHelperText>
        )}
      </StyledQuantityToggle>
    )
  },
)

export default QuantityToggle
