import {useTextField} from '@react-aria/textfield'
import type {AriaTextFieldProps} from '@react-types/textfield'
import React from 'react'
import {Icon, IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledTextField,
  StyledTextFieldBox,
  StyledTextFieldHelperText,
  StyledTextFieldLabel,
  StyledTextFieldWrapper,
  TextFieldVariantProps,
} from './textfield.styles'

interface Props extends AriaTextFieldProps, StyledComponentProps {
  label?: string
  errored?: boolean
  helperText?: string
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export type TextFieldProps = Props & TextFieldVariantProps

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      errored,
      helperText,
      leftIcon,
      rightIcon,
      // AriaTextFieldProps
      isDisabled,
      ...ariaSafeProps
    } = props

    const ariaProps = {
      label,
      isDisabled,
      inputElementType: 'input',
      ...ariaSafeProps,
    } as AriaTextFieldProps

    const textfieldRef = useDOMRef<HTMLInputElement>(ref)
    const {labelProps, inputProps, descriptionProps, errorMessageProps} =
      useTextField(ariaProps, textfieldRef)

    return (
      <StyledTextFieldWrapper css={css}>
        <StyledTextFieldLabel {...labelProps} disabled={!!isDisabled}>
          {label}
        </StyledTextFieldLabel>
        <StyledTextFieldBox disabled={!!isDisabled} errored={!!errored}>
          {leftIcon ? <Icon className='left-icon' icon={leftIcon} /> : null}
          <StyledTextField css={css} ref={textfieldRef} {...inputProps} />
          {rightIcon ? <Icon className='right-icon' icon={rightIcon} /> : null}
        </StyledTextFieldBox>
        {!errored && helperText ? (
          <StyledTextFieldHelperText {...descriptionProps}>
            {helperText}
          </StyledTextFieldHelperText>
        ) : null}
        {errored ? (
          <StyledTextFieldHelperText {...errorMessageProps} error>
            {helperText}
          </StyledTextFieldHelperText>
        ) : null}
      </StyledTextFieldWrapper>
    )
  },
)

export default TextField
