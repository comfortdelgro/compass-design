import React, {Key} from 'react'
import Dropdown from '../dropdown'
import TextField from '../textfield'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  InputWrapper,
  StyledDropdownTextfield,
} from './dropdown-textfield.styles'

interface Props extends StyledComponentProps {
  inputType: 'text' | 'numeric' | 'email'
  options: DropdownOptions[]
  onChange: (dropdownValue: string, inputValue: string | number) => void
  label: string
  isErrored?: boolean
  errorMessage?: string
  isRequired?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  defaultSelectedKey?: string
  defaultInputValue?: string | number
  inputValue?: string | number
  inputRef?: React.RefObject<HTMLInputElement>
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
    options,
    defaultSelectedKey,
    defaultInputValue,
    label,
    isErrored = false,
    isReadOnly = false,
    isRequired = false,
    errorMessage = '',
    onChange: onDropdownInputChange,
  } = props
  const componentRef = useDOMRef(ref)
  const [selectedDropdownKey, setDropdownKey] = React.useState<Key>(
    defaultSelectedKey ?? options[0]?.value ?? '',
  )
  const [textfieldValue, setTextfieldValue] = React.useState<Key>(
    defaultInputValue ?? '',
  )

  const handleDropdownChange = (newValue: Key) => {
    setDropdownKey(newValue)
  }
  const handleInputChange = (value: string | number) => {
    setTextfieldValue(value)
  }

  React.useEffect(() => {
    if (onDropdownInputChange) {
      onDropdownInputChange(String(selectedDropdownKey), textfieldValue)
    }
  }, [selectedDropdownKey, textfieldValue])
  return (
    <StyledDropdownTextfield ref={componentRef}>
      <InputWrapper className='input-wrapper'>
        <Dropdown.Select
          aria-label={label}
          selectedKey={selectedDropdownKey}
          onSelectionChange={handleDropdownChange}
          isErrored={isErrored}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          css={{
            width: '20%',
            '& .cdg-dropdown-input': {
              borderRadius: '$lg',
              // borderWidth: '2px',
              // border: '1px solid $grayShades20',
            },
          }}
        >
          {options.map((option) => (
            <Dropdown.Item key={option.value} textValue={option.label}>
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Select>
        <TextField
          aria-label={label}
          onChange={handleInputChange}
          value={textfieldValue}
          errorMessage={errorMessage}
          isErrored={isErrored}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          css={{
            'div:nth-child(2)': {
              display: 'none',
            },
            width: '80%',
            border: '1px solid $grayShades20',
            borderRadius: '$lg',
          }}
        />
      </InputWrapper>
      {isErrored && (
        <div className='dropdown-textfield__error'>{errorMessage}</div>
      )}
    </StyledDropdownTextfield>
  )
})

export default DropdownTextfield
