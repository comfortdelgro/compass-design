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
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Textarea = React.forwardRef<HTMLDivElement, TextareaProps>(
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
      className,
      onChange,
      onChangeEvent,
      onCut = () => null,
      onCopy = () => null,
      onPaste = () => null,
      onCompositionStart = () => null,
      onCompositionEnd = () => null,
      onCompositionUpdate = () => null,
      onSelect = () => null,
      onBeforeInput = () => null,
      onInput = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onKeyDown = () => null,
      onKeyUp = () => null,
      ...delegated
    } = props

    const textareaId = id
    const wrapperRef = useDOMRef<HTMLDivElement>(ref)
    const textareaRef = useDOMRef<HTMLTextAreaElement>(null)
    const [wordCountValue, setWordCountValue] = React.useState(0)

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event.target.value)
      onChangeEvent?.(event)
    }

    React.useEffect(() => {
      if (textareaRef.current) {
        setWordCountValue(textareaRef.current.value.length ?? 0)
      }
    }, [textareaRef?.current?.value?.length])
    return (
      <StyledTextareaWrapper
        css={css}
        className={className}
        ref={wrapperRef}
        {...delegated}
      >
        {label && (
          <StyledTextFieldLabel htmlFor={textareaId}>
            {label}
            {isRequired && <span>*</span>}
          </StyledTextFieldLabel>
        )}
        <StyledTextarea
          ref={textareaRef}
          id={textareaId}
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
          onCut={onCut}
          onCopy={onCopy}
          onBlur={onBlur}
          onFocus={onFocus}
          onPaste={onPaste}
          onInput={onInput}
          onKeyUp={onKeyUp}
          onSelect={onSelect}
          onChange={handleOnChange}
          onKeyDown={onKeyDown}
          onBeforeInput={onBeforeInput}
          onCompositionEnd={onCompositionEnd}
          onCompositionStart={onCompositionStart}
          onCompositionUpdate={onCompositionUpdate}
        />
        {wordCount && (
          <StyledTextFieldHelperText className='word-count'>
            {wordCountValue}
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
