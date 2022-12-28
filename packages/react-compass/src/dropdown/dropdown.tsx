import {AriaComboBoxOptions, useComboBox} from '@react-aria/combobox'
import {useFilter} from '@react-aria/i18n'
import {useComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownVariantProps, StyledDropdown} from './dropdown.styles'

interface Props<T> extends AriaComboBoxOptions<T>, StyledComponentProps {
  // children?: React.ReactNode
}

export type DropdownProps<T = object> = Props<T> & DropdownVariantProps

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
      // AriaDropdownProps
    } = props
    const filter = useFilter({sensitivity: 'base'})
    const contains = (string: string, substring: string) =>
      filter.contains(string, substring)
    const state = useComboBoxState({...props, defaultFilter: contains})

    const buttonRef = React.useRef(null)
    const inputRef = React.useRef(null)
    const listBoxRef = React.useRef(null)
    const popoverRef = React.useRef(null)
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
      <StyledDropdown css={css} ref={dropdownRef} {...variantProps}>
        <label {...labelProps}>{props.label}</label>
        <div>
          <input
            {...inputProps}
            ref={inputRef}
            style={{
              height: 24,
              boxSizing: 'border-box',
              marginRight: 0,
              fontSize: 16,
            }}
          />
          <button
            {...buttonProps}
            ref={buttonRef}
            style={{
              height: 24,
              marginLeft: 0,
            }}
          >
            <span aria-hidden='true' style={{padding: '0 2px'}}>
              ▼
            </span>
          </button>
          {state.isOpen && (
            <Popover
              state={state}
              triggerRef={inputRef}
              popoverRef={popoverRef}
              isNonModal
              placement='bottom start'
            >
              <ListBox
                {...listBoxProps}
                listBoxRef={listBoxRef}
                state={state}
              />
            </Popover>
          )}
        </div>
      </StyledDropdown>
    )
  },
)

export default Dropdown
