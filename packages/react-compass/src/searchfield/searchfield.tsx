import {faClose, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button, { ButtonProps } from '../button/button'
import {Icon} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  SearchFieldVariantProps,
  StyledSearchFieldBox,
  StyledSearchFieldInput,
} from './searchfield.styles'

interface Props extends StyledComponentProps {
  id?: string
  isErrored?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  validationState?: 'valid' | 'invalid'
  isRequired?: boolean
  description?: React.ReactNode
  errorMessage?: React.ReactNode
  autoFocus?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  label?: React.ReactNode
  onSubmit?: (value: string) => void
  onClear?: () => void
  onChange?: (value: string) => void
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
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void
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

export type SearchFieldProps = Props & SearchFieldVariantProps

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      id = `cdg-element-${Math.random().toString(36).substring(2)}`,
      value = '',
      isErrored = false,
      isReadOnly = false,
      isRequired = false,
      isDisabled = false,
      autoFocus,
      onChangeEvent,
      onChange,
    } = props

    const [textValue, setTextValue] = React.useState<string>(value)
    const searchFieldRef = useDOMRef<HTMLInputElement>(ref)

    React.useEffect(() => {
      setTextValue(value)
    }, [value])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const v = event.target.value
      setTextValue(v)
      onChange?.(v)
      onChangeEvent?.(event)
    }

    const handleOnKeyDown = (e: React.KeyboardEvent) => {
      const key = e.key
      const target = e.target as HTMLInputElement

      if (key === 'Enter' || key === 'Escape') {
        e.preventDefault()
      }

      if (isDisabled || isReadOnly) {
        return
      }

      if (key === 'Enter' && target.value != '') {
        props.onSubmit?.(target.value)
      }

      if (key === 'Escape') {
        setTextValue('')
        props.onClear?.()
      }
      props.onKeyDown?.(e)
    }

    const onClearButtonClick = () => {
      setTextValue('')
      onChange?.('')
      props.onClear?.()
    }

    const onSearchButtonClick = () => {
      searchFieldRef.current?.focus()
    }

    return (
      <StyledSearchFieldBox
        disabled={isDisabled}
        css={css}
        isErrored={isErrored}
      >
        <StyledSearchFieldInput
          ref={searchFieldRef}
          id={id}
          autoFocus={autoFocus}
          readOnly={isReadOnly}
          required={isRequired}
          disabled={isDisabled}
          type='text'
          value={textValue}
          onCut={props.onCut}
          onCopy={props.onCopy}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onPaste={props.onPaste}
          onInput={props.onInput}
          onKeyUp={props.onKeyUp}
          onSelect={props.onSelect}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onBeforeInput={props.onBeforeInput}
          onCompositionEnd={props.onCompositionEnd}
          onCompositionStart={props.onCompositionStart}
          onCompositionUpdate={props.onCompositionUpdate}
          aria-label={props['aria-label']}
          aria-details={props['aria-details']}
          aria-haspopup={props['aria-haspopup']}
          aria-controls={props['aria-controls']}
          aria-labelledby={props['aria-labelledby']}
          aria-describedby={props['aria-describedby']}
          aria-errormessage={props['aria-errormessage']}
          aria-autocomplete={props['aria-autocomplete']}
          aria-activedescendant={props['aria-activedescendant']}
        />
        {textValue !== '' ? (
          <Button size='sm' variant='ghost' onPress={onClearButtonClick}>
            <Icon className='icon' icon={faClose} />
          </Button>
        ) : (
          <Button
            isDisabled={!!isDisabled}
            onPress={onSearchButtonClick}
            size='sm'
            variant='ghost'
          >
            <Icon className='icon' icon={faMagnifyingGlass} />
          </Button>
        )}
      </StyledSearchFieldBox>
    )
  },
)

export default SearchField
