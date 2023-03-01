import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {useComboBox} from '@react-aria/combobox'
import {useFilter} from '@react-aria/i18n'
import {Item} from '@react-stately/collections'

import {Icon} from '../icon'

import {ComboBoxStateOptions, useComboBoxState} from '@react-stately/combobox'
import React from 'react'
import Popover from '../dropdown/popover'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import RichTextEditorDropdownButton from './menu-bar-select-button'
import {
  DropdownVariantProps,
  StyledDropdown,
  StyledDropdownWrapper,
} from './menu-bar-select.styles'

interface Props<T> extends ComboBoxStateOptions<T>, StyledComponentProps {
  icon?: React.ReactNode
}

export type DropdownProps<T = object> = Props<T> & DropdownVariantProps
const MenuBarSelect = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      icon = <Icon className='accordion-chevron-icon' icon={faChevronDown} />,
      // ComponentProps
      menuTrigger = 'focus',
      children,
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
    const {buttonProps, labelProps} = useComboBox(
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
        <StyledDropdown ref={wrapperRef}>
          {/* <Button {...buttonProps} ref={buttonRef}>
            <div className='dropdown-icon'>{icon}</div>
          </Button> */}
          <RichTextEditorDropdownButton
            ref={buttonRef}
            css={css}
            // className={`accordion-title-container ${expand ? 'open' : 'close'}`}
            expand={state.isOpen ? 'open' : 'close'}
            {...buttonProps}
            // onPress={(e) => handleOnClick(e)}
          >
            {/* <StyledAccordionTitleWrapper expand={expand ? 'open' : 'close'}>
              {renderLeftIcon()} */}
            <div className='accordion-title'>title</div>
            <div className='accordion-chevron-container'>{icon}</div>
            {/* </StyledAccordionTitleWrapper> */}
          </RichTextEditorDropdownButton>
        </StyledDropdown>
        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={wrapperRef}
            popoverRef={popoverRef}
          >
            {children}
          </Popover>
        )}
      </StyledDropdownWrapper>
    )
  },
)

export default MenuBarSelect as typeof MenuBarSelect & {
  Item: typeof Item
}
