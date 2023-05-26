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

interface Props extends StyledComponentProps {
  id?: string
  label?: React.ReactNode
  cols?: number
  rows?: number
  tabIndex?: number
  wrap?: string
  autoCapitalize?: string
  isErrored?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  validationState?: 'valid' | 'invalid'
  description?: React.ReactNode
  placeholder?: string
  value?: string
  defaultValue?: string
  helperText?: string
  autoComplete?: string
  maxLength?: number
  minLength?: number
  wordCount?: boolean
  name?: string
  pattern?: string
  excludeFromTabOrder?: boolean
  errorMessage?: string
  onChangeEvent?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onChange?: (value: string) => void
  onCopy?: React.ClipboardEventHandler<HTMLTextAreaElement>
  onCut?: React.ClipboardEventHandler<HTMLTextAreaElement>
  onPaste?: React.ClipboardEventHandler<HTMLTextAreaElement>
  onCompositionStart?: React.CompositionEventHandler<HTMLTextAreaElement>
  onCompositionEnd?: React.CompositionEventHandler<HTMLTextAreaElement>
  onCompositionUpdate?: React.CompositionEventHandler<HTMLTextAreaElement>
  onSelect?: React.ReactEventHandler<HTMLTextAreaElement>
  onBeforeInput?: React.FormEventHandler<HTMLTextAreaElement>
  onInput?: React.FormEventHandler<HTMLTextAreaElement>
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void

  autoFocus?: boolean
  'aria-activedescendant'?: string
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
  'aria-controls'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
  'aria-errormessage'?: string
}

export type TextareaProps = Props &
  TextareaVariantProps &
  Omit<React.HTMLAttributes<HTMLTextAreaElement>, keyof Props>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      id = `cdg-element-${Math.random().toString(36).substring(2)}`,
      name,
      value,
      cols,
      rows,
      wrap,
      tabIndex,
      isDisabled = false,
      isErrored = false,
      isReadOnly = false,
      isRequired = false,
      errorMessage,
      wordCount,
      maxLength,
      minLength,
      autoCapitalize,
      autoFocus,
      onChange,
      onChangeEvent,
      className,
    } = props

    const textareaId = id
    const textareaRef = useDOMRef<HTMLTextAreaElement>(ref)

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event.target.value)
      onChangeEvent?.(event)
    }
    return (
      <StyledTextareaWrapper css={css} className={className}>
        {label && (
          <StyledTextFieldLabel htmlFor={textareaId}>
            {label}
            {isRequired && <span>*</span>}
          </StyledTextFieldLabel>
        )}
        <StyledTextarea
          id={textareaId}
          ref={textareaRef}
          {...props}
          cols={cols}
          rows={rows}
          wrap={wrap}
          name={name}
          value={value}
          tabIndex={tabIndex}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          readOnly={isReadOnly}
          required={isRequired}
          isErrored={isErrored}
          disabled={isDisabled}
          maxLength={maxLength}
          minLength={minLength}
          onCut={props.onCut}
          onCopy={props.onCopy}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onPaste={props.onPaste}
          onInput={props.onInput}
          onKeyUp={props.onKeyUp}
          onSelect={props.onSelect}
          onChange={handleOnChange}
          onKeyDown={props.onKeyDown}
          onBeforeInput={props.onBeforeInput}
          onCompositionEnd={props.onCompositionEnd}
          onCompositionStart={props.onCompositionStart}
          onCompositionUpdate={props.onCompositionUpdate}
        />
        {wordCount && (
          <StyledTextFieldHelperText className='word-count'>
            {textareaRef.current?.value?.toString().length ?? '0'}
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
