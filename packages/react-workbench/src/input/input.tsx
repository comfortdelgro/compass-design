import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useTextField} from '@react-aria/textfield'
import type {AriaTextFieldProps} from '@react-types/textfield'
import type {CSS} from '@stitches/react'
import React, {useRef} from 'react'
import {
  InputVariantProps,
  StyledInput,
  StyledInputBox,
  StyledInputHelperText,
  StyledInputLabel,
  StyledInputWrapper,
} from './input.styles'

interface Props extends InputVariantProps {
  css?: CSS
  label?: string
  disabled?: boolean
  errored?: boolean
  helperText?: string
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export type InputProps = Props &
  Omit<React.ComponentPropsWithoutRef<'input'>, keyof Props>

const Input: React.FC<InputProps> = ({
  css = {},
  errored,
  label,
  disabled,
  helperText,
  leftIcon,
  rightIcon,
  ...delegated
}) => {
  const ariaProps = {
    label,
    isDisabled: disabled,
    inputElementType: 'input',
    ...delegated,
  } as unknown as AriaTextFieldProps // this is fine 🐶🔥

  const ref = useRef<HTMLInputElement>(null)
  const {labelProps, inputProps, descriptionProps, errorMessageProps} =
    useTextField(ariaProps, ref)

  return (
    <StyledInputWrapper>
      <StyledInputLabel {...labelProps} disabled={!!disabled}>
        {label}
      </StyledInputLabel>
      <StyledInputBox disabled={!!disabled} errored={!!errored}>
        {leftIcon ? (
          <FontAwesomeIcon className='left-icon' icon={leftIcon} />
        ) : null}
        <StyledInput ref={ref} css={css} {...delegated} {...inputProps} />
        {rightIcon ? (
          <FontAwesomeIcon className='right-icon' icon={rightIcon} />
        ) : null}
      </StyledInputBox>
      {!errored && helperText ? (
        <StyledInputHelperText {...descriptionProps}>
          {helperText}
        </StyledInputHelperText>
      ) : null}
      {errored ? (
        <StyledInputHelperText {...errorMessageProps} error>
          {helperText}
        </StyledInputHelperText>
      ) : null}
    </StyledInputWrapper>
  )
}

export default Input
