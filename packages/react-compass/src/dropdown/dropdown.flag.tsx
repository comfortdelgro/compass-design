import {useComboBox} from '@react-aria/combobox'
import {useFilter} from '@react-aria/i18n'
import {Item} from '@react-stately/collections'
import {ComboBoxStateOptions, useComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownVariantProps,
  StyledDropdownWrapper,
  StyledFlag,
  StyledFlagIcon,
  StyledLoading,
  StyledTextFieldHelperText,
} from './dropdown.styles'
import ListBox from './list-box/flag'
import Popover from './popover/combox'
import {Button, countries, Flag, Icon} from './utils'

interface P<T = object> extends ComboBoxStateOptions<T>, StyledComponentProps {
  isLoading?: boolean
  icon?: React.ReactNode
  isErrored?: boolean
  errorMessage?: string
  headerTitle?: string
  keyType?: 'alpha-2' | 'alpha-3' | 'name' | 'country-code' | 'phone-code'
  headerOnClick?: (e: unknown) => void
}

type Props<T> = Omit<P<T>, 'children'>

export type DropdownProps<T = object> = Props<T> & DropdownVariantProps

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    return (
      <PreDropdown ref={ref} {...props}>
        {countries.map((item) => (
          <Item key={item[props.keyType ?? 'alpha-3']}>{item.name}</Item>
        ))}
      </PreDropdown>
    )
  },
)

const PreDropdown = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    icon = <Icon />,
    isErrored,
    errorMessage,
    // AriaDropdownProps
  } = props
  const variantProps = {} as DropdownVariantProps
  const dropdownRef = useDOMRef<HTMLDivElement>(ref)
  const filter = useFilter({sensitivity: 'base'})
  const contains = (string: string, substring: string) =>
    filter.contains(string, substring)
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
  })

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

  const currentState = React.useMemo(
    () =>
      countries.find(
        (item) =>
          item.name === inputProps.value ||
          item['alpha-2'] === inputProps.value ||
          item['alpha-3'] === inputProps.value ||
          item['phone-code'] === inputProps.value ||
          item['country-code'] === inputProps.value,
      ),
    [inputProps.value],
  )

  return (
    <StyledDropdownWrapper css={css} ref={dropdownRef} {...variantProps}>
      {props.label && <label {...labelProps}>{props.label}</label>}
      <StyledFlag isEmpty={!inputProps.value} isErrored={!!isErrored}>
        {currentState && (
          <StyledFlagIcon>
            <Flag iso={currentState['alpha-3']} />
          </StyledFlagIcon>
        )}
        <input {...inputProps} ref={inputRef} />
        <Button {...buttonProps} ref={buttonRef}>
          {icon}
        </Button>
        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={inputRef}
            popoverRef={popoverRef}
            isNonModal
            placement='bottom start'
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
                shouldFocusOnHover={false}
                isLoading={!!props.isLoading}
                headerTitle={props.headerTitle}
                headerOnClick={(e) => props?.headerOnClick?.(e)}
                listBoxRef={listBoxRef}
                state={state}
              />
            )}
          </Popover>
        )}
      </StyledFlag>
      {errorMessage && (
        <StyledTextFieldHelperText error={!!isErrored}>
          {errorMessage}
        </StyledTextFieldHelperText>
      )}
    </StyledDropdownWrapper>
  )
})

export default Dropdown
