import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownContext, SelectedItemDropdown} from './dropdown-new-context'
import DropdownNewFlagItems from './dropdown-new-flag-items'
import DropdownNewItem, {DropdownItemProps} from './dropdown-new-item'
import DropdownNewList from './dropdown-new-list'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownWrapper,
  StyledHelperText,
  StyledIcon,
  StyledPopover,
  StyledSelect,
} from './dropdown-new.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  isMultiple?: boolean
  defaultOpen?: boolean
  selectedKey?: string | number
  defaultSelectedKey?: string | number
  shouldDeselect?: boolean
  allowsCustomValue?: boolean
  type?: 'select' | 'combobox' | 'flag'
  prefix?: React.ReactNode
  icon?: React.ReactNode
  label?: React.ReactNode
  isLoading?: boolean
  autoFocus?: boolean
  isErrored?: boolean
  helperText?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  numberOfRows?: number
  disabledKeys?: Array<string | number>
  children?: React.ReactNode
  description?: React.ReactNode
  onBlur?: () => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
  onSelectionChange?: (key: string | number) => void
}

export const Icon = () => (
  <StyledIcon width='16' height='16' viewBox='0 0 16 16'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </StyledIcon>
)

export type DropdownProps = Props &
  DropdownVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ITEM_HEIGHT = 32

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  // ====================================== Define ======================================
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    css = {},
    children,
    type = 'select',
    icon = <Icon />,
    placeholder,
    isMultiple = false,
    isErrored = false,
    isRequired = false,
    isReadOnly = false,
    isLoading = false,
    helperText,
    selectedKey = '',
    errorMessage,
    numberOfRows,
    disabledKeys = [],
    defaultSelectedKey = '',
    defaultOpen = false,
    isDisabled = false,
    shouldDeselect = false,
    allowsCustomValue = false,
    prefix = null,
    onSelectionChange,
    onFocus,
    onBlur,
    ...delegated
  } = props

  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const [selectedKeys, setSelectedKeys] = React.useState<
    SelectedItemDropdown[]
  >([])
  const [searchValue, setSearchValue] = useState<string>('')

  // Select ref
  const selectRef = useDOMRef<HTMLElement>(ref)
  const buttonSelectRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const displayedChildren = useMemo(
    () => (type === 'flag' ? <DropdownNewFlagItems /> : children),
    [type, children],
  )

  // ====================================== FLOATING ======================================
  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])

  // ====================================== Logic ======================================

  const handleKeyDown = useCallback(() => {
    // Todo
  }, [])

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, handleKeyDown])

  const handleDropdownToggle = useCallback(() => {
    setOpen((v) => !v)
    inputRef.current?.focus()
  }, [])

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOpen(true)
      setSearchValue(event.target.value ?? '')
    },
    [],
  )

  useEffect(() => {
    if (!open && ['combobox', 'flag'].includes(type) && inputRef.current) {
      if (selectedKeys && selectedKeys.length > 0) {
        inputRef.current.value =
          textContent(selectedKeys[0]?.displayValue as React.ReactElement) ?? ''
      } else {
        inputRef.current.value = ''
      }
      setSearchValue('')
    }
  }, [open, selectedKeys])

  useEffect(() => {
    if (selectedKeys.length || !(selectedKey || defaultSelectedKey)) return

    const currentSelectedKey = selectedKey || defaultSelectedKey
    // Find the item with the specified value
    const item = React.Children.toArray(displayedChildren).find(
      (child) =>
        (child as React.ReactElement<DropdownItemProps>).props.value ===
        currentSelectedKey,
    )

    if (item) {
      setSelectedKeys([
        {
          value: currentSelectedKey.toString(),
          displayValue: item as React.ReactNode,
        },
      ])
      if (inputRef.current) {
        inputRef.current.value = textContent(item as React.ReactElement) ?? ''
      }
    }
  }, [displayedChildren, selectedKey, defaultSelectedKey, selectedKeys])

  const headerElement = useMemo(() => {
    switch (type) {
      case 'select':
        return (
          <StyledSelect
            ref={refs.setReference}
            isEmpty={selectedKeys.length === 0}
            className='cdg-dropdown-input'
            isErrored={!!isErrored}
            {...getReferenceProps}
          >
            <button
              id={id}
              type='button'
              ref={buttonSelectRef}
              disabled={isDisabled}
              onClick={handleDropdownToggle}
              onBlur={onBlur}
              onFocus={onFocus}
              className='cdg-dropdown-button'
            >
              {prefix}
              <span>
                {selectedKeys && selectedKeys.length
                  ? selectedKeys[0]?.displayValue ?? placeholder
                  : placeholder}
              </span>
              {icon}
            </button>
          </StyledSelect>
        )
      case 'combobox':
      case 'flag':
        return (
          <StyledComboBox
            isEmpty={selectedKeys.length === 0}
            ref={refs.setReference}
            className='cdg-dropdown-input'
            isErrored={!!isErrored}
            {...getReferenceProps}
          >
            <input
              id={id}
              ref={inputRef}
              readOnly={isReadOnly}
              disabled={isDisabled}
              placeholder={placeholder}
              onChange={handleInputChange}
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={handleDropdownToggle}
            />
            <button
              type='button'
              tabIndex={-1}
              disabled={isDisabled}
              onClick={handleDropdownToggle}
              className='cdg-dropdown-button'
            >
              {icon}
            </button>
          </StyledComboBox>
        )
      //   case 'flag':
      //     return (
      //       <StyledFlag
      //         ref={refs.setReference}
      //         isEmpty={selectedKeys.length === 0}
      //         className='cdg-dropdown-input'
      //         isErrored={!!isErrored}
      //         {...getReferenceProps}
      //       >
      //         {selectedKeys && selectedKeys[0]?.flagName ? (
      //           <StyledFlagIcon>
      //             <Flag iso={selectedKeys[0].flagName} />
      //           </StyledFlagIcon>
      //         ) : null}
      //         <input
      //           id={id}
      //           ref={inputRef}
      //           readOnly={isReadOnly}
      //           disabled={isDisabled}
      //           placeholder={placeholder}
      //           onChange={handleInputChange}
      //           onBlur={onBlur}
      //           onFocus={onFocus}
      //           onClick={handleDropdownToggle}
      //         />
      //         <button
      //           tabIndex={-1}
      //           disabled={isDisabled}
      //           onClick={handleDropdownToggle}
      //           type='button'
      //           className='cdg-dropdown-button'
      //         >
      //           {icon}
      //         </button>
      //       </StyledFlag>
      //     )
      default:
        return null
    }
  }, [
    open,
    type,
    id,
    placeholder,
    selectedKeys,
    isErrored,
    isDisabled,
    isReadOnly,
    onBlur,
    onFocus,
    handleDropdownToggle,
    handleInputChange,
  ])

  const triggetWidth = useMemo(() => {
    switch (type) {
      case 'select':
        return buttonSelectRef?.current?.clientWidth ?? '100%'
      case 'combobox':
      case 'flag':
        return inputRef?.current?.clientWidth ?? '100%'
      default:
        return '100%'
    }
  }, [type, open])

  const handleDropdownItemClick = (selectedItem: SelectedItemDropdown) => {
    if (isReadOnly) {
      return
    }
    setOpen(false)
    // Deselect item
    if (
      shouldDeselect &&
      selectedKeys.findIndex((item) => item.value === selectedItem.value) !== -1
    ) {
      setSelectedKeys([])
      onSelectionChange?.('')
      return
    }
    // Select clear item
    if (!selectedItem.value) {
      setSelectedKeys([])
      onSelectionChange?.('')
      return
    }
    if (isMultiple) {
      setSelectedKeys((oldSelectedKeys) => {
        const currentIndex = oldSelectedKeys.findIndex(
          (item) => item.value === selectedItem.value,
        )
        if (currentIndex === -1) {
          oldSelectedKeys.push(selectedItem)
        } else {
          oldSelectedKeys.splice(currentIndex, 1)
        }
        return oldSelectedKeys
      })
    } else {
      if (
        selectedKeys.findIndex((item) => item.value === selectedItem.value) ===
        -1
      ) {
        onSelectionChange?.(selectedItem.value)
      }
      setSelectedKeys([selectedItem])
      if (['combobox', 'flag'].includes(type)) {
        if (inputRef.current) {
          inputRef.current.value =
            textContent(selectedItem.displayValue as React.ReactElement) ?? ''
        }
        setSearchValue(
          textContent(selectedItem.displayValue as React.ReactElement) ?? '',
        )
      }
    }
  }

  return (
    <StyledDropdownWrapper
      className={`${open ? 'cdg-dropdown-opening' : ''}`}
      css={css}
      {...delegated}
    >
      {props.label && (
        <label htmlFor={id}>
          {props.label}
          {isRequired && <span>*</span>}
        </label>
      )}
      <DropdownContext.Provider
        value={{
          open,
          selectedKey,
          defaultSelectedKey,
          disabledKeys,
          searchValue,
          selectedKeys,
          setSelectedKeys,
          onItemClick: handleDropdownItemClick,
        }}
      >
        {headerElement}
        {open && (
          <div
            className='Popover'
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              ...{
                zIndex: 60,
              },
            }}
            {...getFloatingProps}
          >
            <StyledPopover
              style={{
                width: triggetWidth,
              }}
            >
              <DropdownNewList
                isLoading={isLoading}
                css={{
                  maxHeight: numberOfRows
                    ? `${numberOfRows * ITEM_HEIGHT}px`
                    : '16rem',
                }}
              >
                {displayedChildren}
              </DropdownNewList>
            </StyledPopover>
          </div>
        )}
      </DropdownContext.Provider>
      {isErrored && errorMessage && (
        <StyledHelperText error={!!isErrored}>{errorMessage}</StyledHelperText>
      )}
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </StyledDropdownWrapper>
  )
})

export default Select as typeof Select & {
  //   ComboBox: typeof DropdownComboBox
  //   Flag: typeof DropdownFlag
  //   Select: typeof DropdownSelect
  Item: typeof DropdownNewItem
  //   Section: typeof DropdownSection
  //   Header: typeof DropdownHeader
}
