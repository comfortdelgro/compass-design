'use client'
import React from 'react'
import {useIsDarkTheme} from '../theme'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {useId} from '../utils/useId'
import styles from './styles/textfield.module.css'

export interface Props {
  css?: unknown
  id?: string
  label?: React.ReactNode
  isErrored?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  validationState?: 'valid' | 'invalid'
  description?: React.ReactNode
  placeholder?: string
  value?: string | number
  defaultValue?: string | number
  helperText?: string
  autoComplete?: string
  maxLength?: number
  minLength?: number
  name?: string
  pattern?: string
  type?: string
  inputMode?:
    | 'none'
    | 'text'
    | 'search'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | undefined
  excludeFromTabOrder?: boolean
  errorMessage?: string
  prefix?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  password?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (value: string | number) => void
  onCopy?: React.ClipboardEventHandler<HTMLInputElement>
  onCut?: React.ClipboardEventHandler<HTMLInputElement>
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>
  onCompositionStart?: React.CompositionEventHandler<HTMLInputElement>
  onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>
  onCompositionUpdate?: React.CompositionEventHandler<HTMLInputElement>
  onSelect?: React.ReactEventHandler<HTMLInputElement>
  onBeforeInput?: React.FormEventHandler<HTMLInputElement>
  onInput?: React.FormEventHandler<HTMLInputElement>
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void

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
  h5?: boolean
}

export type TextFieldProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      label,
      id,
      name,
      value,
      type,
      isErrored,
      isReadOnly = false,
      isRequired = false,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      prefix,
      password = false,
      maxLength,
      minLength,
      autoCapitalize,
      autoFocus,
      onChangeEvent,
      onChange,
      placeholder,
      // AriaTextFieldProps
      isDisabled,
      inputRef,
      className = '',
      onCut,
      onCopy,
      onBlur,
      onFocus,
      onPaste,
      onInput,
      onKeyUp,
      onSelect,
      onKeyDown,
      onBeforeInput,
      onCompositionEnd,
      onCompositionStart,
      onCompositionUpdate,
      h5 = false,
      ...ariaSafeProps
    } = props
    const isDarkTheme = useIsDarkTheme()
    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const inputId = useId(id)
    const textfieldRef = useDOMRef<HTMLDivElement>(ref)
    const inputfieldRef = useDOMRef<HTMLInputElement>(inputRef)
    const [isPassWordVisible, setIsPassWordVisible] = React.useState(false)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //inputProps.onChange?.(event)
      onChange?.(event.target.value)
      onChangeEvent?.(event)
    }

    const determineInputType = React.useMemo(() => {
      if (password == true && isPassWordVisible == false) {
        return 'password'
      } else if (password == true && isPassWordVisible == true) {
        return type
      }
      return null
    }, [password, isPassWordVisible, type])

    //  classes
    const textfieldWrapperClasses = React.useMemo(() => {
      return [
        styles.textFieldWrapper,
        h5 && styles.textFieldWrapperH5,
        className,
        'cdg-textfield-container',
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, h5])

    const labelClasses = React.useMemo(() => {
      return [
        styles.textFieldLabel,
        h5 && styles.textFieldLabelH5,
        'cdg-textfield-label',
      ]
        .filter(Boolean)
        .join(' ')
    }, [h5])

    const textfieldBoxWrapperClasses = React.useMemo(() => {
      return [
        styles.textFieldBox,
        isDisabled && styles.textFieldBoxDisabled,
        isErrored && styles.textFieldBoxErrored,
        isDarkTheme && styles.textFieldBoxDarkTheme,
        h5 && styles.textFieldBoxH5,
        'cdg-textfield-box',
      ]
        .filter(Boolean)
        .join(' ')
    }, [h5, isDarkTheme, isDisabled, isErrored])

    const textfieldInputWrapperClasses = React.useMemo(() => {
      return [
        styles.textField,
        isDisabled && styles.textFieldDisabled,
        isDarkTheme && styles.textFieldDarkTheme,
        h5 && styles.textFieldH5,
        'cdg-textfield-input',
      ]
        .filter(Boolean)
        .join(' ')
    }, [h5, isDarkTheme, isDisabled])

    const helperTextClasses = React.useMemo(() => {
      return [styles.textFieldHelperText, 'cdg-textfield-helper-text']
        .filter(Boolean)
        .join(' ')
    }, [])

    const errorMessageClasses = React.useMemo(() => {
      return [
        styles.textFieldHelperTextError,
        styles.textFieldHelperText,
        'cdg-textfield-error-message',
      ]
        .filter(Boolean)
        .join(' ')
    }, [])

    return (
      <CssInjection css={css} childrenRef={textfieldRef}>
        <div
          {...htmlProps}
          className={textfieldWrapperClasses}
          ref={textfieldRef}
        >
          {label && (
            <label htmlFor={id} className={labelClasses}>
              {label}
              {isRequired && (
                <span className={`${styles.asterisk} cdg-textfield-asterisk`}>
                  *
                </span>
              )}
            </label>
          )}
          <div className={textfieldBoxWrapperClasses}>
            {leftIcon && (
              <div className={`${styles.leftIcon} cdg-textfield-left-icon`}>
                {leftIcon}
              </div>
            )}
            {prefix && (
              <div className={`${styles.prefix} cdg-textfield-prefix`}>
                {prefix}
              </div>
            )}
            <input
              ref={inputfieldRef}
              id={inputId}
              prefix=''
              placeholder={placeholder}
              autoFocus={autoFocus}
              autoCapitalize={autoCapitalize}
              readOnly={isReadOnly}
              required={isRequired}
              disabled={isDisabled}
              maxLength={maxLength}
              minLength={minLength}
              name={name}
              value={value}
              type={determineInputType ?? type}
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
              className={textfieldInputWrapperClasses}
            />
            {rightIcon ? (
              <div className={`${styles.rightIcon} cdg-textfield-right-icon`}>
                {rightIcon}
              </div>
            ) : null}
            {password && determineInputType == 'password' ? (
              <div
                className={`${styles.passwordIcon} cdg-textfield-password-icon`}
                style={{cursor: 'pointer'}}
                onClick={() => setIsPassWordVisible(true)}
              >
                <svg viewBox='0 0 640 512'>
                  <path
                    fill='currentColor'
                    d='M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z'
                  />
                </svg>
              </div>
            ) : null}
            {password && determineInputType == type ? (
              <div
                className={`${styles.passwordIcon} cdg-textfield-password-icon`}
                style={{cursor: 'pointer'}}
                onClick={() => setIsPassWordVisible(false)}
              >
                <svg viewBox='0 0 576 512'>
                  <path
                    fill='currentColor'
                    d='M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z'
                  />
                </svg>
              </div>
            ) : null}
          </div>
          {isErrored && errorMessage && (
            <div className={errorMessageClasses}>{errorMessage}</div>
          )}
          {helperText && <div className={helperTextClasses}>{helperText}</div>}
        </div>
      </CssInjection>
    )
  },
)

export default TextField
