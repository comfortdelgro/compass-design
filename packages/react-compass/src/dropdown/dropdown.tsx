import {AriaButtonProps, useButton} from '@react-aria/button'
import {useComboBox} from '@react-aria/combobox'
import {useFilter} from '@react-aria/i18n'
import {ComboBoxStateOptions, useComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownVariantProps,
  StyledBox,
  StyledDropdown,
  StyledDropdownWrapper,
} from './dropdown.styles'
import ListBox from './list-box'

interface Props<T> extends ComboBoxStateOptions<T>, StyledComponentProps {
  searchable?: boolean
}

export type DropdownProps<T = object> = Props<T> & DropdownVariantProps

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      searchable,
      // ComponentProps
      menuTrigger = 'focus',
      // AriaDropdownProps
    } = props
    const filter = useFilter({sensitivity: 'base'})
    const contains = (string: string, substring: string) =>
      filter.contains(string, substring)
    const state = useComboBoxState({
      ...props,
      defaultFilter: contains,
      menuTrigger,
    })

    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const listBoxRef = React.useRef<HTMLUListElement>(null)
    const popoverRef = React.useRef<HTMLDivElement>(null)
    const {buttonProps, inputProps, listBoxProps, labelProps} = useComboBox(
      {
        ...props,
        inputRef,
        buttonRef,
        listBoxRef,
        popoverRef,
      },
      state,
    )

    const variantProps = {} as DropdownVariantProps
    const dropdownRef = useDOMRef<HTMLDivElement>(ref)

    React.useEffect(() => {
      /**
       * Close the sidebar if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (
          listBoxRef.current &&
          !listBoxRef?.current?.contains(event.target as Node) &&
          !wrapperRef?.current?.contains(event.target as Node)
        ) {
          event.preventDefault()
          state.setOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [listBoxRef, wrapperRef])

    return (
      <StyledDropdownWrapper css={css} ref={dropdownRef} {...variantProps}>
        <label {...labelProps}>{props.label}</label>
        <StyledDropdown ref={wrapperRef} isEmpty={!state.inputValue}>
          <Button {...buttonProps} ref={buttonRef}>
            {!searchable && (
              <p>
                {inputProps.value ? inputProps.value : inputProps.placeholder}
              </p>
            )}
            <input
              {...inputProps}
              ref={inputRef}
              style={!searchable ? {display: 'none'} : {}}
            />
            <div className='dropdown-icon'>
              <Icon />
            </div>
          </Button>
        </StyledDropdown>
        {state.isOpen && (
          <StyledBox ref={popoverRef}>
            <ListBox {...listBoxProps} ref={listBoxRef} state={state} />
          </StyledBox>
        )}
      </StyledDropdownWrapper>
    )
  },
)

const Button = React.forwardRef<HTMLButtonElement, AriaButtonProps>(
  (props, ref) => {
    const buttonRef = useDOMRef<HTMLButtonElement>(ref)
    const {buttonProps} = useButton(props, buttonRef)
    return (
      <button {...buttonProps} ref={ref}>
        {props.children}
      </button>
    )
  },
)

const Icon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='#201F1E'
    />
  </svg>
)

export default Dropdown
