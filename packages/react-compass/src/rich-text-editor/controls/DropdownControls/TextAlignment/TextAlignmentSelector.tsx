import {HiddenSelect, useSelect} from '@react-aria/select'
import {useSelectState} from '@react-stately/select'
import type {AriaSelectProps} from '@react-types/select'
import * as React from 'react'

import {ListBox} from '../listbox'
import {Popover} from '../popover'

import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {useButton} from '@react-aria/button'
import Icon from '../../../../icon'
import {StyledDropdownButton} from '../menu-bar-select-button.styles'

export function TextAlignmentSelector<T extends object>(
  props: AriaSelectProps<T>,
) {
  // Create state based on the incoming props
  let state = useSelectState(props)

  // Get props for child elements from useSelect
  let ref = React.useRef(null)
  let {triggerProps, valueProps, menuProps} = useSelect(props, state, ref)

  // Get props for the button based on the trigger props from useSelect
  let {buttonProps} = useButton(triggerProps, ref)

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
        <Icon className='accordion-chevron-icon' icon={faChevronDown} />
      </StyledDropdownButton>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement='bottom start'>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </>
  )
}
