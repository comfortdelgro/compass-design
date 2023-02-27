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
  isDisabled?: boolean
  isRequired?: boolean
  isErrored?: boolean
  errorMessage?: string
  wordCount?: boolean
  onChange?: (value: string) => void
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type TextareaProps = Props &
  TextareaVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      isDisabled,
      isErrored,
      isRequired,
      errorMessage,
      wordCount,
      maxLength,
      onChange,
      onChangeEvent,
      // AriaTextFieldProps
      ...ariaSafeProps
    } = props

    const variantProps = {isErrored} as TextareaVariantProps
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

    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //inputProps.onChange?.(event)
      onChange?.(event.target.value)
      onChangeEvent?.(event)
    }

    return (
      <StyledTextareaWrapper css={css} {...htmlProps}>
        <StyledTextFieldLabel {...labelProps} disabled={!!disabled}>
          {label}
        </StyledTextFieldLabel>
        <StyledTextarea
          ref={textareaRef}
          {...inputProps}
          {...variantProps}
          onChange={(e) =>
            handleOnChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
          }
        />
        {wordCount ? (
          <StyledTextFieldHelperText
            className='word-count'
            {...descriptionProps}
          >
            {inputProps.value?.toString().length ?? '0'}
            {maxLength ? `/${maxLength}` : null}
          </StyledTextFieldHelperText>
        )}
        {isErrored && errorMessage && (
          <StyledTextFieldHelperText error>
            {errorMessage}
          </StyledTextFieldHelperText>
        )}
      </StyledTextareaWrapper>
    )
  },
)

export default Textarea
