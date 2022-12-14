import {useTextField} from '@react-aria/textfield'
import type {AriaTextFieldProps} from '@react-types/textfield'
import React from 'react'
import {
  StyledTextFieldHelperText,
  StyledTextFieldLabel,
} from '../textfield/textfield.styles'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledTextarea,
  StyledTextareaWrapper,
  TextareaVariantProps,
} from './textarea.styles'

interface Props extends AriaTextFieldProps, StyledComponentProps {
  label?: string
  disabled?: boolean
  errored?: boolean
  wordCount?: boolean
}

export type TextareaProps = Props & TextareaVariantProps

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      disabled,
      errored,
      wordCount,
      maxLength,
      // AriaTextFieldProps
      ...ariaSafeProps
    } = props

    const variantProps = {errored} as TextareaVariantProps
    const ariaProps = {
      label,
      maxLength,
      inputElementType: 'textarea',
      ...ariaSafeProps,
    } as AriaTextFieldProps

    const textareaRef = useDOMRef<HTMLTextAreaElement>(ref)
    const {labelProps, inputProps, descriptionProps} = useTextField<'textarea'>(
      ariaProps,
      textareaRef,
    )

    return (
      <StyledTextareaWrapper css={css}>
        <StyledTextFieldLabel {...labelProps} disabled={!!disabled}>
          {label}
        </StyledTextFieldLabel>
        <StyledTextarea ref={textareaRef} {...inputProps} {...variantProps} />
        {wordCount ? (
          <StyledTextFieldHelperText
            className='word-count'
            {...descriptionProps}
          >
            {inputProps.value?.toString().length ?? '0'}
            {maxLength ? `/${maxLength}` : null}
          </StyledTextFieldHelperText>
        ) : null}
      </StyledTextareaWrapper>
    )
  },
)

export default Textarea
