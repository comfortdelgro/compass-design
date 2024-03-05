'use client'
import React from 'react'
import {useIsDarkTheme} from '../theme'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {useId} from '../utils/useId'
import styles from './styles/textarea.module.css'

interface Props {
  css?: unknown
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
  textareaRef?: React.RefObject<HTMLTextAreaElement>
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
  variant?: 'h5' | string
  resizable?: boolean
}

export type TextareaProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Textarea = React.forwardRef<HTMLDivElement, TextareaProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      id,
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
      placeholder,
      textareaRef,
      helperText,
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
      resizable = true,
      variant,
      ...ariaSafeProps
    } = props
    const isDarkTheme = useIsDarkTheme()
    const htmlProps = {...ariaSafeProps} as unknown as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const textareaId = useId(id)
    const wrapperRef = useDOMRef<HTMLDivElement>(ref)
    const textareaFieldRef = useDOMRef<HTMLTextAreaElement>(textareaRef)
    const [wordCountValue, setWordCountValue] = React.useState(0)

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event.target.value)
      onChangeEvent?.(event)
      setWordCountValue(event.target.value.length)
    }

    React.useEffect(() => {
      setWordCountValue(value?.length || 0) // word count on mount
    }, [value?.length])

    //  classes
    const wrapperClasses = React.useMemo(() => {
      return [
        styles.textareaWrapper,
        variant && styles[variant],
        className,
        'cdg-textarea-container',
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, variant])

    const labelClasses = React.useMemo(() => {
      return [
        styles.textAreaLabel,
        variant && styles[variant],
        'cdg-textarea-label',
      ]
        .filter(Boolean)
        .join(' ')
    }, [variant])

    const textareaClasses = React.useMemo(() => {
      return [
        styles.textarea,
        isErrored && styles.isErrored,
        resizable && styles.resizable,
        isDarkTheme && styles.isDarkTheme,
        variant && styles[variant],
        'cdg-textarea',
      ]
        .filter(Boolean)
        .join(' ')
    }, [isDarkTheme, isErrored, resizable, variant])

    const wordCountClasses = React.useMemo(() => {
      return [
        styles.textAreaHelperText,
        styles.wordCount,
        variant && styles[variant],
        'cdg-textarea-word-count',
      ]
        .filter(Boolean)
        .join(' ')
    }, [variant])

    const helperTextClasses = React.useMemo(() => {
      return [
        styles.textAreaHelperText,
        variant && styles[variant],
        'cdg-textarea-helper-text',
      ]
        .filter(Boolean)
        .join(' ')
    }, [variant])

    const errorMessageClasses = React.useMemo(() => {
      return [
        styles.error,
        styles.textAreaHelperText,
        variant && styles[variant],
        'cdg-textarea-error-message',
      ]
        .filter(Boolean)
        .join(' ')
    }, [variant])

    return (
      <CssInjection css={css} childrenRef={wrapperRef}>
        <div {...htmlProps} className={wrapperClasses} ref={wrapperRef}>
          {label && (
            <label htmlFor={textareaId} className={labelClasses}>
              {label}
              {isRequired && (
                <span className={`${styles.asterisk} cdg-textarea-asterisk`}>
                  *
                </span>
              )}
            </label>
          )}
          <textarea
            ref={textareaFieldRef}
            className={textareaClasses}
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
            disabled={isDisabled}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholder}
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
            <div className={wordCountClasses}>
              {wordCountValue}
              {maxLength ? `/${maxLength}` : null}
            </div>
          )}
          {isErrored && errorMessage && (
            <div className={errorMessageClasses}>{errorMessage}</div>
          )}
          {helperText && <div className={helperTextClasses}>{helperText}</div>}
        </div>
      </CssInjection>
    )
  },
)

export default Textarea
