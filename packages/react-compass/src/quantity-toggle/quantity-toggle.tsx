import {useButton} from '@react-aria/button'
import {useLocale} from '@react-aria/i18n'
import {AriaNumberFieldProps, useNumberField} from '@react-aria/numberfield'
import {useNumberFieldState} from '@react-stately/numberfield'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  QuantityToggleVariantProps,
  StyledQuantityToggle,
} from './quantity-toggle.styles'

interface Props extends AriaNumberFieldProps, StyledComponentProps {
  isErrored?: boolean
  helperText?: string
}

export type QuantityToggleProps = Props & QuantityToggleVariantProps

const Button = (props: {children: string}) => {
  const ref = useDOMRef<HTMLButtonElement>()
  const {buttonProps} = useButton(props, ref)
  return (
    <button {...buttonProps} ref={ref}>
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
          <label {...labelProps} className='quantity-toggle-label'>
            {props.label}
          </label>
        )}
        <div {...groupProps}>
          <Button {...decrementButtonProps}>-</Button>
          <input {...inputProps} ref={quantityToggleRef} />
          <Button {...incrementButtonProps}>+</Button>
        </div>
        {props.helperText && (
          <p className='quantity-toggle-helper-text'>{props.helperText}</p>
        )}
      </StyledQuantityToggle>
    )
  },
)

export default QuantityToggle
