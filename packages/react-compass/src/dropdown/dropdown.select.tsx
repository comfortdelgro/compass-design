import {HiddenSelect, useSelect} from '@react-aria/select'
import {SelectProps, useSelectState} from '@react-stately/select'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownVariantProps,
  StyledDropdownWrapper,
  StyledSelect,
  StyledTextFieldHelperText,
} from './dropdown.styles'
import ListBox from './list-box/select'
import Popover from './popover/select'
import {Button, Icon} from './utils'

interface Props<T> extends SelectProps<T>, StyledComponentProps {
  isLoading?: boolean
  icon?: React.ReactNode
  isErrored?: boolean
  isRequired?: boolean
  errorMessage?: string
  headerTitle?: string
  headerOnClick?: (e: unknown) => void
}

export type DropdownProps<T = object> = Props<T> & DropdownVariantProps

const Select = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      icon = <Icon />,
      isErrored,
      isRequired,
      isDisabled,
      errorMessage,
      // AriaDropdownProps
    } = props
    const variantProps = {} as DropdownVariantProps
    const selectRef = useDOMRef<HTMLButtonElement>(ref)
    const state = useSelectState(props)

    const listBoxRef = React.useRef<HTMLUListElement>(null)
    const popoverRef = React.useRef<HTMLDivElement>(null)

    const {labelProps, triggerProps, valueProps, menuProps} = useSelect(
      props,
      state,
      selectRef,
    )

    return (
      <StyledDropdownWrapper css={css} {...variantProps}>
        {props.label && (
          <label {...labelProps}>
            {props.label}
            {isRequired && <span>*</span>}
          </label>
        )}
        <HiddenSelect
          state={state}
          triggerRef={selectRef}
          label={props.label}
        />
        <StyledSelect
          isEmpty={!state.selectedItem}
          isErrored={!!isErrored}
          isDisabled={!!isDisabled}
        >
          <Button {...triggerProps} ref={selectRef}>
            <span {...valueProps}>
              {state.selectedItem
                ? state.selectedItem.textValue !== ''
                  ? state.selectedItem.textValue
                  : state.selectedItem.rendered
                : props.placeholder}
            </span>
            {icon}
          </Button>
          {state.isOpen && (
            <Popover
              state={state}
              triggerRef={selectRef}
              popoverRef={popoverRef}
              isNonModal
              placement='bottom start'
            >
              <ListBox
                {...menuProps}
                shouldFocusOnHover={false}
                headerTitle={props.headerTitle}
                isLoading={!!props.isLoading}
                headerOnClick={(e) => props?.headerOnClick?.(e)}
                listBoxRef={listBoxRef}
                state={state}
              />
            </Popover>
          )}
        </StyledSelect>
        {errorMessage && (
          <StyledTextFieldHelperText error={!!isErrored}>
            {errorMessage}
          </StyledTextFieldHelperText>
        )}
      </StyledDropdownWrapper>
    )
  },
)

export default Select
