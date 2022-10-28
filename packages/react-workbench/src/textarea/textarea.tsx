import {useTextField} from '@react-aria/textfield'
import type {AriaTextFieldProps, TextFieldProps} from '@react-types/textfield'
import type {CSS} from '@stitches/react'
import React from 'react'
import {StyledInputHelperText, StyledInputLabel} from '../input/input.styles'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledTextarea,
  StyledTextareaWrapper,
  TextareaVariantProps,
} from './textarea.styles'

interface Props extends TextareaVariantProps, TextFieldProps {
  css?: CSS
  label?: string
  disabled?: boolean
  errored?: boolean
  wordCount?: boolean
}

export type TextareaProps = Props &
  Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof Props>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      css = {},
      errored,
      label,
      disabled,
      wordCount,
      onChange,
      maxLength,
      ...delegated
    } = props

    const variantProps = {errored} as TextareaVariantProps
    const ariaProps = {
      label,
      maxLength,
      onChange,
      isDisabled: disabled,
      inputElementType: 'textarea',
      ...delegated,
    } as unknown as AriaTextFieldProps // this is fine 🐶🔥

    const textareaRef = useDOMRef<HTMLTextAreaElement>(ref)
    const {labelProps, inputProps, descriptionProps} = useTextField<'textarea'>(
      ariaProps,
      textareaRef,
    )

    return (
      <StyledTextareaWrapper>
        <StyledInputLabel {...labelProps} disabled={!!disabled}>
          {label}
        </StyledInputLabel>
        <StyledTextarea
          ref={textareaRef}
          css={css}
          {...delegated}
          {...inputProps}
          {...variantProps}
        />
        {wordCount ? (
          <StyledInputHelperText className='word-count' {...descriptionProps}>
            {inputProps.value?.toString().length ?? '0'}
            {maxLength ? `/${maxLength}` : null}
          </StyledInputHelperText>
        ) : null}
      </StyledTextareaWrapper>
    )
  },
)

export default Textarea
