import {AriaButtonProps, useButton} from '@react-aria/button'
import {useComboBox} from '@react-aria/combobox'
import {useFilter} from '@react-aria/i18n'
import {Item} from '@react-stately/collections'
import {ComboBoxStateOptions, useComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledLoading} from '../dropdown/dropdown.styles'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownVariantProps,
  StyledDropdown,
  StyledDropdownWrapper,
} from './dropdown.styles'
import ListBox from './list-box'
import Popover from './popover'

interface Props<T> extends ComboBoxStateOptions<T>, StyledComponentProps {
  searchable?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
  headerTitle?: string
  headerOnClick?: (e: unknown) => void
}

export type DropdownProps<T = object> = Props<T> & DropdownVariantProps

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      searchable,
      icon = <Icon />,
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
    const listBoxRef = React.useRef<HTMLDivElement>(null)
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

    return (
      <StyledDropdownWrapper css={css} ref={dropdownRef} {...variantProps}>
        {props.label && <label {...labelProps}>{props.label}</label>}
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
            <div className='dropdown-icon'>{icon}</div>
          </Button>
        </StyledDropdown>
        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={wrapperRef}
            popoverRef={popoverRef}
          >
            {props.isLoading ? (
              <StyledLoading>
                <div className='spinner'>
                  <div className='spinner-1' />
                  <div className='spinner-2' />
                  <div className='spinner-3' />
                  <div />
                </div>
              </StyledLoading>
            ) : (
              <ListBox
                {...listBoxProps}
                ref={listBoxRef}
                state={state}
                headerTitle={props.headerTitle}
                headerOnClick={(e) => props?.headerOnClick?.(e)}
              />
            )}
          </Popover>
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

export default Dropdown as typeof Dropdown & {
  Item: typeof Item
}
