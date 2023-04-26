import {useButton} from '@react-aria/button'
import {useLocale} from '@react-aria/i18n'
import {AriaNumberFieldProps, useNumberField} from '@react-aria/numberfield'
import {useNumberFieldState} from '@react-stately/numberfield'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  QuantityToggleVariantProps,
  StyledHelperText,
  StyledQuantityToggle,
} from './quantity-toggle.styles'

interface Props extends AriaNumberFieldProps, StyledComponentProps {
  disableScroll?: boolean
  isErrored?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  placeholder?: string
  helperText?: string
  errorMessage?: string
  onUpdate?: (
    value: string | number | readonly string[] | undefined,
    number: number,
  ) => void
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
      disableScroll = true,
      // AriaQuantityToggleProps
      ...ariaSafeProps
    } = props

    const mountedRef = React.useRef(false)
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

    React.useEffect(() => {
      if (mountedRef.current) {
        const value = inputProps.value as string
        props.onUpdate?.(value, parseFloat(value?.replace(/[^0-9.-]+/g, '')))
      } else {
        mountedRef.current = true
      }
    }, [inputProps.value])

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
          <Button {...decrementButtonProps}>-</Button>
          {disableScroll && (
            <input
              {...inputProps}
              ref={quantityToggleRef}
              style={{display: 'none'}}
            />
          )}
          <input
            {...inputProps}
            ref={disableScroll ? null : quantityToggleRef}
            onWheel={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          />
          <Button {...incrementButtonProps}>+</Button>
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
