import {HiddenSelect, useSelect} from '@react-aria/select'
import {useSelectState} from '@react-stately/select'
import type {AriaSelectProps} from '@react-types/select'
import * as React from 'react'

import {ListBox} from '../listbox'
import {Popover} from '../popover'

import {useButton} from '@react-aria/button'
import {StyledDropdownButton} from '../menu-bar-select-button.styles'

export function TextAlignmentSelector<T extends object>(
  props: AriaSelectProps<T>,
) {
  // Create state based on the incoming props
  const state = useSelectState(props)

  // Get props for child elements from useSelect
  const ref = React.useRef(null)
  const {triggerProps, valueProps, menuProps} = useSelect(props, state, ref)

  // Get props for the button based on the trigger props from useSelect
  const {buttonProps} = useButton(triggerProps, ref)

  return (
    <>
      <HiddenSelect state={state} triggerRef={ref} label={props.label} />
      <StyledDropdownButton
        {...buttonProps}
        ref={ref}
        isOpen={state.isOpen}
        css={{width: 60}}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.props.children[0]
            : 'Select an option'}
        </span>
        <svg className='accordion-chevron-icon' viewBox='0 0 512 512'>
          <path
            fill='currentColor'
            d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
          />
        </svg>
      </StyledDropdownButton>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement='bottom start'>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </>
  )
}
