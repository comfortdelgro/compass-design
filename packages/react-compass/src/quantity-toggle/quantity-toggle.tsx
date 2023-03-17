import {useButton} from '@react-aria/button'
import {useLocale} from '@react-aria/i18n'
import {AriaNumberFieldProps, useNumberField} from '@react-aria/numberfield'
import {useNumberFieldState} from '@react-stately/numberfield'
import React, {CSSProperties} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  QuantityToggleVariantProps,
  StyledHelperText,
  StyledQuantityToggle,
} from './quantity-toggle.styles'

interface Props extends AriaNumberFieldProps, StyledComponentProps {
  isErrored?: boolean
  isRequired?: boolean
  helperText?: string
  errorMessage?: string
}

export type QuantityToggleProps = Props & QuantityToggleVariantProps

const Button = (props: {children: string; style: CSSProperties}) => {
  const ref = useDOMRef<HTMLButtonElement>()
  const {buttonProps} = useButton(props, ref)
  return (
    <button {...buttonProps} style={props.style} ref={ref}>
      {props.children}
    </button>
  )
}

const QuantityToggle = React.forwardRef<HTMLInputElement, QuantityToggleProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      isErrored,
      // AriaQuantityToggleProps
      ...ariaSafeProps
    } = props

    const variantProps = {} as QuantityToggleVariantProps
    const quantityToggleRef = useDOMRef<HTMLInputElement>(ref)
    const {locale} = useLocale()
    const state = useNumberFieldState({...ariaSafeProps, locale})
    const {
      labelProps,
      groupProps,
      inputProps,
      incrementButtonProps,
      decrementButtonProps,
    } = useNumberField(props, state, quantityToggleRef)

    return (
      <StyledQuantityToggle
        css={css}
        {...variantProps}
        isErrored={!!isErrored}
        isDisabled={!!inputProps.disabled}
      >
        {props.label && (
          <label {...labelProps}>
            {props.label}
            {props.isRequired && <span>*</span>}
          </label>
        )}
        <div {...groupProps}>
          <Button
            {...decrementButtonProps}
            style={{borderRight: 'none', borderRadius: '4px 0 0 4px'}}
          >
            -
          </Button>
          <input {...inputProps} ref={quantityToggleRef} />
          <Button
            {...incrementButtonProps}
            style={{
              borderLeft: 'none',
              borderRadius: '0 4px 4px 0',
            }}
          >
            +
          </Button>
        </div>
        {isErrored && props.errorMessage && (
          <StyledHelperText error>{props.errorMessage}</StyledHelperText>
        )}
        {props.helperText ? (
          <StyledHelperText>{props.helperText}</StyledHelperText>
        ) : null}
      </StyledQuantityToggle>
    )
  },
)

export default QuantityToggle
