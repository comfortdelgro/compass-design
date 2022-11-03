import {useTextField} from '@react-aria/textfield'
import type {AriaTextFieldProps} from '@react-types/textfield'
import React from 'react'
import {Icon, IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledTextfield,
  StyledTextfieldBox,
  StyledTextfieldHelperText,
  StyledTextfieldLabel,
  StyledTextfieldWrapper,
  TextfieldVariantProps,
} from './textfield.styles'

interface Props extends AriaTextFieldProps, StyledComponentProps {
  label?: string
  errored?: boolean
  helperText?: string
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export type TextfieldProps = Props & TextfieldVariantProps

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
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
      <StyledTextfieldWrapper>
        <StyledTextfieldLabel {...labelProps} disabled={!!isDisabled}>
          {label}
        </StyledTextfieldLabel>
        <StyledTextfieldBox disabled={!!isDisabled} errored={!!errored}>
          {leftIcon ? <Icon className='left-icon' icon={leftIcon} /> : null}
          <StyledTextfield css={css} ref={textfieldRef} {...inputProps} />
          {rightIcon ? <Icon className='right-icon' icon={rightIcon} /> : null}
        </StyledTextfieldBox>
        {!errored && helperText ? (
          <StyledTextfieldHelperText {...descriptionProps}>
            {helperText}
          </StyledTextfieldHelperText>
        ) : null}
        {errored ? (
          <StyledTextfieldHelperText {...errorMessageProps} error>
            {helperText}
          </StyledTextfieldHelperText>
        ) : null}
      </StyledTextfieldWrapper>
    )
  },
)

export default Textfield
