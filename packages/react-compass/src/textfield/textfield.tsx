import {useTextField} from '@react-aria/textfield'
import type {AriaTextFieldProps} from '@react-types/textfield'
import React from 'react'
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
  errorMessage?: string
  prefix?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (value: string) => void
  password?: boolean
}

export type TextFieldProps = Props &
  TextFieldVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      errored,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      prefix,
      onChangeEvent,
      onChange,
      password = false,
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

    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const textfieldRef = useDOMRef<HTMLInputElement>(ref)
    const {labelProps, inputProps, descriptionProps, errorMessageProps} =
      useTextField(ariaProps, textfieldRef)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //inputProps.onChange?.(event)
      onChange?.(event.target.value)
      onChangeEvent?.(event)
    }

    const typeDetermineFunc = () => {
      if (password == false) return 'text'
      if (password == true) return 'password'
    }

    return (
      <StyledTextFieldWrapper css={css} {...htmlProps}>
        {label && (
          <StyledTextFieldLabel {...labelProps} disabled={!!isDisabled}>
            {label}
          </StyledTextFieldLabel>
        )}
        <StyledTextFieldBox disabled={!!isDisabled} errored={!!errored}>
          {leftIcon ? <div className='left-icon'>{leftIcon}</div> : null}
          {prefix ? <div className='prefix'>{prefix}</div> : null}
          <StyledTextField
            css={css}
            ref={textfieldRef}
            {...inputProps}
            onChange={handleOnChange}
            type={typeDetermineFunc()}
          />
          {rightIcon ? <div className='right-icon'>{rightIcon}</div> : null}
        </StyledTextFieldBox>
        <StyledTextFieldHelperText {...descriptionProps}>
          {helperText}
        </StyledTextFieldHelperText>
        {errored ? (
          <StyledTextFieldHelperText {...errorMessageProps} error>
            {errorMessage}
          </StyledTextFieldHelperText>
        ) : null}
      </StyledTextFieldWrapper>
    )
  },
)

export default TextField
