import {useComboBox} from '@react-aria/combobox'
import {useFilter} from '@react-aria/i18n'
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
import DropdownItem from './item'
import ListBox from './list-box'
import Popover from './popover'
import {Button, Icon} from './utils'

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

    const wrapperRef = useDOMRef<HTMLDivElement>(null)
    const buttonRef = useDOMRef<HTMLButtonElement>(null)
    const inputRef = useDOMRef<HTMLInputElement>(null)
    const listBoxRef = useDOMRef<HTMLUListElement>(null)
    const popoverRef = useDOMRef<HTMLDivElement>(null)

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

export default Dropdown as typeof Dropdown & {
  Item: typeof DropdownItem
}
