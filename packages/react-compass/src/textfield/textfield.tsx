import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {useTextField} from '@react-aria/textfield'
import type {AriaTextFieldProps} from '@react-types/textfield'
import React from 'react'
import Icon from '../icon'
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
  isErrored?: boolean
  isRequired?: boolean
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
      isErrored,
      isRequired,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      prefix,
      onChangeEvent,
      onChange,
      password,
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

    const [isPassWordVisible, setIsPassWordVisible] = React.useState(false)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //inputProps.onChange?.(event)
      onChange?.(event.target.value)
      onChangeEvent?.(event)
    }

    const determineInputType = () => {
      if (password == true && isPassWordVisible == false) {
        return 'password'
      } else {
        return 'text'
      }
    }

    return (
      <StyledTextFieldWrapper css={css} {...htmlProps}>
        {label && (
          <StyledTextFieldLabel {...labelProps} isDisabled={!!isDisabled}>
            {label}
            {isRequired && <span>*</span>}
          </StyledTextFieldLabel>
        )}
        <StyledTextFieldBox isDisabled={!!isDisabled} isErrored={!!isErrored}>
          {leftIcon ? <div className='left-icon'>{leftIcon}</div> : null}
          {prefix ? <div className='prefix'>{prefix}</div> : null}
          <StyledTextField
            css={css}
            ref={textfieldRef}
            {...inputProps}
            type={determineInputType()}
            onChange={handleOnChange}
          />
          {rightIcon ? <div className='right-icon'>{rightIcon}</div> : null}
          {determineInputType() == 'password' ? (
            <div
              className='right-icon'
              style={{cursor: 'pointer'}}
              onClick={() => setIsPassWordVisible(true)}
            >
              <Icon icon={faEyeSlash} />
            </div>
          ) : (
            <div
              className='right-icon'
              style={{cursor: 'pointer'}}
              onClick={() => setIsPassWordVisible(false)}
            >
              <Icon icon={faEye} />
            </div>
          )}
        </StyledTextFieldBox>
        {isErrored && errorMessage && (
          <StyledTextFieldHelperText {...errorMessageProps} error>
            {errorMessage}
          </StyledTextFieldHelperText>
        )}
        {helperText ? (
          <StyledTextFieldHelperText {...descriptionProps}>
            {helperText}
          </StyledTextFieldHelperText>
        ) : null}
      </StyledTextFieldWrapper>
    )
  },
)

export default TextField
