import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
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

interface Props extends StyledComponentProps {
  id?: string
  label?: string
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
  type?: 'text' | 'search' | 'url' | 'tel' | 'email' | 'password'
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
  excludeFromTabOrder?: boolean
  errorMessage?: string
  prefix?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  password?: boolean
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
      password,
      onChangeEvent,
      onChange,
      // AriaTextFieldProps
      isDisabled,
      ...ariaSafeProps
    } = props

    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const inputId = id
    const textfieldRef = useDOMRef<HTMLInputElement>(ref)
    const [isPassWordVisible, setIsPassWordVisible] = React.useState(false)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //inputProps.onChange?.(event)
      onChange?.(event.target.value)
      onChangeEvent?.(event)
    }

    const determineInputType = () => {
      if (password == true && isPassWordVisible == false) {
        return 'password'
      } else if (password == true && isPassWordVisible == true) {
        return type
      }
      return null
    }

    return (
      <StyledTextFieldWrapper css={css} {...htmlProps}>
        {label && (
          <StyledTextFieldLabel htmlFor={inputId} isDisabled={!!isDisabled}>
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
            id={inputId}
            aria-controls={props['aria-controls']}
            aria-label={props['aria-label']}
            aria-labelledby={props['aria-labelledby']}
            aria-describedby={props['aria-describedby']}
            aria-details={props['aria-details']}
            aria-errormessage={props['aria-errormessage']}
            aria-haspopup={props['aria-haspopup']}
            aria-autocomplete={props['aria-autocomplete']}
            aria-activedescendant={props['aria-activedescendant']}
            readOnly={!!isReadOnly}
            required={!!isRequired}
            name={name}
            value={value}
            onChange={handleOnChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onCopy={props.onCopy}
            onCut={props.onCut}
            onPaste={props.onPaste}
            onCompositionStart={props.onCompositionStart}
            onCompositionEnd={props.onCompositionEnd}
            onCompositionUpdate={props.onCompositionUpdate}
            onSelect={props.onSelect}
            onBeforeInput={props.onBeforeInput}
            onInput={props.onInput}
            onKeyDown={props.onKeyDown}
            onKeyUp={props.onKeyUp}
            type={determineInputType() || type}
          />
          {rightIcon ? <div className='right-icon'>{rightIcon}</div> : null}
          {determineInputType() == 'password' ? (
            <div
              className='password-icon'
              style={{cursor: 'pointer'}}
              onClick={() => setIsPassWordVisible(true)}
            >
              <Icon icon={faEyeSlash} />
            </div>
          ) : null}
          {determineInputType() == type ? (
            <div
              className='password-icon'
              style={{cursor: 'pointer'}}
              onClick={() => setIsPassWordVisible(false)}
            >
              <Icon icon={faEye} />
            </div>
          ) : null}
        </StyledTextFieldBox>
        {isErrored && errorMessage && (
          <StyledTextFieldHelperText error>
            {errorMessage}
          </StyledTextFieldHelperText>
        )}
        {helperText ? (
          <StyledTextFieldHelperText>{helperText}</StyledTextFieldHelperText>
        ) : null}
      </StyledTextFieldWrapper>
    )
  },
)

export default TextField
