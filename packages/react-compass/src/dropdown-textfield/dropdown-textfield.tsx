import React, {Key} from 'react'
import Dropdown from '../dropdown'
import TextField from '../textfield'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dropdown-textfield.module.css'

interface Props {
  id?: string
  inputType?: 'text' | 'numeric' | 'email' | 'password'
  options: DropdownOptions[]
  onChange?: (dropdownValue: string, inputValue: string | number) => void
  label: string
  isErrored?: boolean
  errorMessage?: string
  isRequired?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  defaultSelectedKey?: string
  defaultInputValue?: string | number
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
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
  textfieldPlaceholder?: string
  dropdownPlaceholder?: string
  autoFocus?: boolean
  maxLength?: number
  minLength?: number
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
  css?: unknown
}

export type DropdownTextfieldProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export type DropdownOptions = {
  value: string
  icon: React.ReactNode | null
  label: string
}

const DropdownTextfield = React.forwardRef<
  HTMLDivElement,
  DropdownTextfieldProps
>((props, ref) => {
  const {
    id = '',
    className,
    options,
    defaultSelectedKey,
    defaultInputValue,
    isErrored = false,
    isReadOnly = false,
    isRequired = false,
    isDisabled = false,
    errorMessage = '',
    textfieldPlaceholder = '',
    dropdownPlaceholder = '',
    inputType = 'text',
    label = '',
    minLength,
    maxLength,
    autoFocus = false,
    onChange: onDropdownInputChange,
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
    css = {},
  } = props
  const componentRef = useDOMRef(ref)

  const [selectedDropdownKey, setDropdownKey] = React.useState<Key>('')
  const [textfieldValue, setTextfieldValue] = React.useState<Key>(
    defaultInputValue ?? '',
  )

  const handleDropdownChange = (newValue: Key) => {
    setDropdownKey(newValue)
    onDropdownInputChange?.(String(newValue), textfieldValue)
  }
  const handleInputChange = (value: string | number) => {
    setTextfieldValue(value)
    onDropdownInputChange?.(String(selectedDropdownKey), value)
  }

  React.useEffect(() => {
    setDropdownKey(defaultSelectedKey as Key)
    setTextfieldValue(defaultInputValue)
  }, [defaultSelectedKey, defaultInputValue])

  return (
    <CssInjection css={css} childrenRef={componentRef}>
      <div
        ref={componentRef}
        className={`${className} ${styles.dropdownTextfield}`}
      >
        {label && (
          <label
            htmlFor={id}
            className={`${styles.textFieldLabel} ${
              h5 ? styles.textFieldLabelH5 : ''
            }`}
          >
            {label}
            {isRequired && <span className={`${styles.asterisk}`}>*</span>}
          </label>
        )}
        <div
          className={`${styles.inputWrapper} input-wrapper cdg-input-wrapper`}
        >
          <Dropdown.Select
            className={`${styles.dropdownTextfieldSelect} cdg-dropdown-textfield-select`}
            aria-label={label}
            selectedKey={selectedDropdownKey}
            defaultSelectedKey={defaultSelectedKey as Key}
            onSelectionChange={handleDropdownChange}
            isErrored={isErrored}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            isDisabled={isDisabled}
            placeholder={dropdownPlaceholder}
            h5={h5}
          >
            {options.map((option) => (
              <Dropdown.Item
                key={option.value}
                textValue={option.label}
                css={{
                  'div:first-child': {
                    gap: '$2',
                    alignItems: 'center',
                  },
                }}
              >
                {option.icon} {option.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Select>
          <TextField
            id={id}
            className='cdg-dropdown-textfield-input'
            aria-label={label}
            type={inputType}
            onChange={handleInputChange}
            value={textfieldValue}
            errorMessage={errorMessage}
            isErrored={isErrored}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            placeholder={textfieldPlaceholder}
            isDisabled={isDisabled}
            minLength={minLength ?? 0}
            maxLength={maxLength ?? 524288}
            h5={h5}
            autoFocus={autoFocus}
            onCut={onCut}
            onCopy={onCopy}
            onBlur={onBlur}
            onFocus={onFocus}
            onPaste={onPaste}
            onInput={onInput}
            onKeyUp={onKeyUp}
            onSelect={onSelect}
            onKeyDown={onKeyDown}
            onBeforeInput={onBeforeInput}
            onCompositionEnd={onCompositionEnd}
            onCompositionStart={onCompositionStart}
            onCompositionUpdate={onCompositionUpdate}
            css={{
              width: '75%',
              'div:nth-child(2)': {
                display: 'none',
              },
            }}
          />
        </div>
        {isErrored && (
          <div
            className={`${styles.dropdownTextfieldError} dropdown-textfield__error`}
          >
            {errorMessage}
          </div>
        )}
      </div>
    </CssInjection>
  )
})

export default DropdownTextfield
