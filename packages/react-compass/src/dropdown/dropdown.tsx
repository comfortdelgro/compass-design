import React, {
  Key,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Popover from '../popover'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownContext,
  DropdownItemKey,
  SelectedItemDropdown,
} from './dropdown-context'
import DropdownItem, {DropdownItemProps} from './dropdown-item'
import DropdownList from './dropdown-list'
import DropdownComboBox from './dropdown.combobox'
import DropdownHeader from './dropdown.header'
import DropdownSection from './dropdown.section'
import DropdownSelect from './dropdown.select'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownWrapper,
  StyledHelperText,
  StyledIcon,
  StyledPopover,
  StyledSelect,
} from './dropdown.styles'
import {
  getFirstItem,
  getItemAbove,
  getItemBelow,
  getItemByKey,
  getLastItem,
  textContent,
} from './utils'

interface Props extends StyledComponentProps {
  defaultOpen?: boolean
  selectedKey?: Key
  defaultSelectedKey?: Key
  value?: Key
  defaultValue?: Key
  shouldDeselect?: boolean
  allowsCustomValue?: boolean
  type?: 'select' | 'combobox'
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
  disabledKeys?: Key[]
  disabledValues?: Key[]
  children?: React.ReactNode
  description?: React.ReactNode
  disableClearable?: boolean
  noDataMessage?: string
  isCloseOnSelect?: boolean
  isLoadingMore?: boolean
  popoverCSS?: CSS
  onBlur?: (event: React.FocusEvent) => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
  onSelectionChange?: (key: Key) => void
  onValueChange?: (key: Key) => void
}

export const Icon = () => (
  <StyledIcon
    width='16'
    height='16'
    viewBox='0 0 16 16'
    className='cdg-dropdown-button-icon'
  >
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
const EMPTY_FUNC = () => {
  //
}

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  // ====================================== Define ======================================
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    css = {},
    popoverCSS = {},
    children,
    type = 'select',
    icon = <Icon />,
    placeholder,
    isErrored = false,
    isRequired = false,
    isReadOnly = false,
    isLoading = false,
    helperText,
    errorMessage,
    numberOfRows,
    disabledKeys = [],
    selectedKey = '',
    defaultSelectedKey = '',
    disabledValues,
    value = '',
    defaultValue = '',
    defaultOpen = false,
    isDisabled = false,
    shouldDeselect = false,
    allowsCustomValue = false,
    disableClearable = false,
    prefix = null,
    noDataMessage = '',
    label,
    isCloseOnSelect = true,
    isLoadingMore = false,
    onValueChange = EMPTY_FUNC,
    onSelectionChange = EMPTY_FUNC,
    onFocus = EMPTY_FUNC,
    onBlur = EMPTY_FUNC,
    onLoadMore = EMPTY_FUNC,
    onOpenChange = EMPTY_FUNC,
    ...delegated
  } = props

  const defaultValueDropdown = useMemo(
    () => defaultValue || defaultSelectedKey,
    [defaultValue, defaultSelectedKey],
  )
  const valueDropdown = useMemo(
    () => value || selectedKey,
    [value, selectedKey],
  )

  const [isPositioned, setIsPositioned] = React.useState(false)
  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const [selectedItem, setSelectedItem] =
    React.useState<SelectedItemDropdown | null>(null)
  const [focusKey, setFocusKey] = React.useState<Key | null>(null)
  const [searchValue, setSearchValue] = useState<string>('')
  const [dropdownItemKeys, setDropdownItemKeys] = useState<DropdownItemKey[]>(
    [],
  )

  const [clonedChildren, setClonedChildren] = useState<React.ReactNode>(null)

  // Select ref
  const selectRef = useDOMRef<HTMLDivElement>(ref)
  const buttonSelectRef = useDOMRef<HTMLButtonElement>(null)
  const inputRef = useDOMRef<HTMLInputElement>(null)

  // ====================================== Logic ======================================

  const openStateInitialChangedRef = useRef(false)

  const isUncontrolledComponent = useMemo(
    () => !!defaultValueDropdown || (!defaultValueDropdown && !valueDropdown),
    [defaultValueDropdown],
  )

  const triggeElWidth = useMemo(() => {
    switch (type) {
      case 'select':
        return buttonSelectRef.current?.clientWidth ?? '100%'
      case 'combobox':
        return inputRef.current?.clientWidth ?? '100%'
      default:
        return '100%'
    }
  }, [type, open])

  /**
   * Reset focus key when closes popover
   */
  useEffect(() => {
    if (!openStateInitialChangedRef.current) {
      openStateInitialChangedRef.current = true
    } else {
      if (!open) {
        setFocusKey(null)
      }
    }
  }, [open, allowsCustomValue])

  // clone children to assign value prop if not exists. the value would be equal to the key prop
  // This is to support the legacy code where users don't pass value prop and use key prop instead
  const recursivelyAddValueProp = (
    children: React.ReactNode,
  ): React.ReactNode => {
    if (typeof children === 'string') return children

    return React.Children.map(children, (child) => {
      if (!child) return child

      if (React.isValidElement(child)) {
        if (child.type === DropdownItem) {
          const childWithProps = child as React.ReactElement<DropdownItemProps>
          if (!('value' in childWithProps.props)) {
            return React.cloneElement(childWithProps, {
              value: `${child.key}` || '',
            })
          }
        }

        const childProps = child as React.ReactElement<{
          children?: React.ReactNode
        }>
        if (childProps.props.children) {
          return React.cloneElement(childProps, {
            children: recursivelyAddValueProp(childProps.props.children),
          })
        }
      }

      return child
    })
  }

  useEffect(() => {
    setClonedChildren(recursivelyAddValueProp(children))
  }, [children])

  const setValueForItemAndFocusKey = useCallback(
    (item: SelectedItemDropdown | null) => {
      if (isUncontrolledComponent) {
        setSelectedItem(item)
        setFocusKey(item?.value ?? null)
      }
    },
    [isUncontrolledComponent],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (open) {
        const currentFocusKey =
          focusKey ?? selectedItem?.value.toString() ?? null
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowLeft':
            event.preventDefault()
            // Check if focus key exists
            if (currentFocusKey !== null) {
              const nextKey = getItemAbove(
                currentFocusKey ?? '',
                clonedChildren,
                dropdownItemKeys,
              )
              const itemKey =
                nextKey?.props.value ??
                nextKey?.key?.toString().replace('.$', '') ??
                null
              setFocusKey(itemKey)
            } else {
              setFocusKey(
                getLastItem(
                  clonedChildren,
                  dropdownItemKeys,
                )?.props?.value?.toString() ?? null,
              )
            }
            break
          case 'ArrowDown':
          case 'ArrowRight':
            event.preventDefault()
            if (currentFocusKey !== null) {
              const prevKey = getItemBelow(
                currentFocusKey ?? '',
                clonedChildren,
                dropdownItemKeys,
              )
              const itemKey =
                prevKey?.props.value ??
                prevKey?.key?.toString().replace('.$', '') ??
                null

              setFocusKey(itemKey)
            } else {
              setFocusKey(
                getFirstItem(
                  clonedChildren,
                  dropdownItemKeys,
                )?.props?.value?.toString() ?? null,
              )
            }
            break
          case 'Enter':
            event.preventDefault()
            if (currentFocusKey !== null) {
              setSearchValue('')
              const focusedItem = getItemByKey(
                currentFocusKey ?? '',
                clonedChildren,
              )
              if (focusedItem) {
                isCloseOnSelect && setOpen(false)
                onOpenChange?.(false)
                // Deselect item
                if (
                  !disableClearable &&
                  shouldDeselect &&
                  selectedItem?.value === focusedItem.props.value
                ) {
                  setValueForItemAndFocusKey(null)
                  onSelectionChange?.('')
                  onValueChange?.('')
                  return
                }
                setValueForItemAndFocusKey({
                  value: focusedItem?.props?.value?.toString() ?? '',
                  displayValue:
                    focusedItem.props.textValue || focusedItem.props.children,
                  flagName: focusedItem.props.flagName ?? '',
                })
                if (inputRef.current) {
                  inputRef.current.value = textContent(
                    focusedItem.props.children as React.ReactElement,
                  )
                }
                onSelectionChange?.(focusedItem?.props?.value as Key)
                onValueChange?.(focusedItem?.props?.value as Key)
              }
            }

            break
          case 'Escape':
          case 'Tab':
            setOpen(false)
            onOpenChange?.(false)
            break
          case 'Home':
            event.preventDefault()
            setFocusKey(
              getFirstItem(
                clonedChildren,
                dropdownItemKeys,
              )?.props?.value?.toString() ?? null,
            )
            break
          case 'End':
            event.preventDefault()
            setFocusKey(
              getLastItem(
                clonedChildren,
                dropdownItemKeys,
              )?.props?.value?.toString() ?? null,
            )
            break
          default:
            break
        }
      } else {
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowDown':
            event.preventDefault()
            setOpen(true)
            onOpenChange?.(true)
            break
          default:
            break
        }
      }
    },
    [
      isCloseOnSelect,
      open,
      disableClearable,
      shouldDeselect,
      focusKey,
      clonedChildren,
      selectedItem,
      dropdownItemKeys,
      onValueChange,
      onSelectionChange,
      onOpenChange,
      setValueForItemAndFocusKey,
    ],
  )

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [handleKeyDown])

  const handleDropdownToggle = useCallback(() => {
    setSearchValue('')
    setOpen((v) => !v)
    onOpenChange?.(!open)
    inputRef.current?.focus()
  }, [onOpenChange, open])

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOpen(true)
      onOpenChange?.(true)
      setSearchValue(event.target.value ?? '')
      if (type === 'combobox') {
        if (allowsCustomValue) {
          setValueForItemAndFocusKey(null)
          onSelectionChange?.('')
          onValueChange?.('')
        }
      }
    },
    [
      isUncontrolledComponent,
      type,
      selectedItem,
      allowsCustomValue,
      onOpenChange,
      onValueChange,
      onSelectionChange,
      setValueForItemAndFocusKey,
    ],
  )

  const fillTextForInput = useCallback(() => {
    if (['combobox'].includes(type) && inputRef.current) {
      // wait for document move cursor
      setTimeout(() => {
        // Check if click into content of Dropdown
        if (document.activeElement === inputRef.current) {
          return
        }
        if (inputRef.current) {
          if (!allowsCustomValue) {
            // Check if there is selected item then set text for input
            if (selectedItem) {
              inputRef.current.value = textContent(
                selectedItem?.displayValue as React.ReactElement,
              )
            } else {
              inputRef.current.value = ''
            }
          }
          setSearchValue('')
        }
      })
    }
  }, [type, selectedItem, allowsCustomValue, isUncontrolledComponent])

  useEffect(() => {
    if (!open && ['combobox'].includes(type) && inputRef.current) {
      fillTextForInput()
    }
  }, [open, type, fillTextForInput])

  useEffect(() => {
    if (!clonedChildren || (!valueDropdown && !defaultValueDropdown)) {
      setSelectedItem(null)
      setSearchValue('')
      if (!allowsCustomValue && inputRef.current) {
        inputRef.current.value = ''
      }
      setFocusKey((oldFocusKey) => oldFocusKey ?? null)
      return
    }

    const currentSelectedKey = valueDropdown || defaultValueDropdown

    // Find the item with the specified value
    const item = getItemByKey(currentSelectedKey, clonedChildren)

    if (item) {
      setSelectedItem({
        value: currentSelectedKey.toString(),
        displayValue: item as React.ReactNode,
        flagName: item?.props?.flagName ?? '',
      })
      if (inputRef.current) {
        inputRef.current.value = textContent(item as React.ReactElement)
      }
    }
  }, [clonedChildren, valueDropdown, defaultValueDropdown, allowsCustomValue])

  const handleInputComboboxBlur = useCallback(
    (event: React.FocusEvent) => {
      onBlur?.(event)
      if (['combobox'].includes(type) && inputRef.current) {
        if (inputRef.current) {
          if (!allowsCustomValue) {
            // Check if there is selected item then set text for input
            if (selectedItem) {
              inputRef.current.value = textContent(
                selectedItem?.displayValue as React.ReactElement,
              )
            } else {
              inputRef.current.value = ''
            }
          }
          setSearchValue('')
        }
      }
    },
    [onBlur, selectedItem, type, allowsCustomValue],
  )

  const contentElement = useMemo(() => {
    switch (type) {
      case 'select':
        return (
          <StyledSelect
            isEmpty={!selectedItem}
            className='cdg-dropdown-input'
            role='button'
            isErrored={!!isErrored}
            isDisabled={isDisabled}
            aria-required={isRequired}
          >
            <button
              id={id}
              type='button'
              ref={buttonSelectRef}
              disabled={isDisabled}
              onClick={handleDropdownToggle}
              onBlur={handleInputComboboxBlur}
              onFocus={onFocus}
              className='cdg-dropdown-button'
            >
              {prefix}
              <span>
                {selectedItem
                  ? textContent(
                      selectedItem?.displayValue as React.ReactElement,
                    )
                  : placeholder}
              </span>
              {icon}
            </button>
          </StyledSelect>
        )
      case 'combobox':
        return (
          <StyledComboBox
            isEmpty={!selectedItem}
            className='cdg-dropdown-input'
            role='button'
            isErrored={!!isErrored}
            isDisabled={isDisabled}
            aria-required={isRequired}
          >
            <input
              id={id}
              ref={inputRef}
              readOnly={isReadOnly}
              disabled={isDisabled}
              placeholder={placeholder}
              onChange={handleInputChange}
              onBlur={handleInputComboboxBlur}
              onFocus={onFocus}
              onClick={handleDropdownToggle}
              aria-autocomplete='list'
              role='combobox'
              aria-invalid={isErrored}
              aria-expanded={open}
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
      default:
        return null
    }
  }, [
    open,
    type,
    id,
    placeholder,
    selectedItem,
    isErrored,
    isDisabled,
    isReadOnly,
    onBlur,
    onFocus,
    handleDropdownToggle,
    handleInputChange,
    handleInputComboboxBlur,
  ])

  const handleDropdownItemClick = (currentItem: SelectedItemDropdown) => {
    if (isReadOnly) {
      return
    }
    isCloseOnSelect && setOpen(false)
    onOpenChange?.(false)
    setSearchValue('')
    setTimeout(() => {
      inputRef.current?.focus()
      buttonSelectRef.current?.focus()
    }, 0)
    // Select clear item
    if (!disableClearable && !currentItem.value) {
      setValueForItemAndFocusKey(null)
      onSelectionChange?.('')
      onValueChange?.('')
      return
    }
    // Deselect item
    if (
      !disableClearable &&
      shouldDeselect &&
      selectedItem?.value === currentItem.value
    ) {
      setValueForItemAndFocusKey(null)
      onSelectionChange?.('')
      onValueChange?.('')
      return
    }

    if (selectedItem?.value !== currentItem.value) {
      onSelectionChange?.(currentItem.value)
      onValueChange?.(currentItem.value)
    }
    setValueForItemAndFocusKey(currentItem)
    if (['combobox'].includes(type)) {
      if (inputRef.current) {
        inputRef.current.value = textContent(
          currentItem.displayValue as React.ReactElement,
        )
        if (!isCloseOnSelect) {
          inputRef.current?.focus()
        } else {
          inputRef.current.blur()
        }
      }
      setSearchValue(
        textContent(currentItem.displayValue as React.ReactElement),
      )
    } else {
      buttonSelectRef.current?.focus()
    }
  }

  const handleDropdownHeaderClick = () => {
    setTimeout(() => {
      inputRef.current?.focus()
      buttonSelectRef.current?.focus()
    }, 0)
  }

  const handleClosePopover = useCallback(() => {
    setOpen(false)
    onOpenChange?.(false)
  }, [onOpenChange])

  const handlePositionedChange = useCallback((isPositioned: boolean) => {
    setIsPositioned(isPositioned)
  }, [])

  return (
    <StyledDropdownWrapper
      className={`${open ? 'cdg-dropdown-opening' : ''}`}
      css={css}
      ref={selectRef}
      {...delegated}
    >
      {label && (
        <label htmlFor={id} id={`${id}-label`}>
          {label}
          {isRequired && <span>*</span>}
        </label>
      )}
      <DropdownContext.Provider
        value={{
          isLoadingMore,
          isPositioned,
          open,
          focusKey: focusKey,
          selectedKey: valueDropdown,
          defaultSelectedKey: defaultValueDropdown,
          disabledKeys: disabledValues ?? disabledKeys ?? [],
          searchValue,
          labelId: `${id}-label`,
          selectedItem,
          setSelectedItem,
          dropdownItemKeys,
          setDropdownItemKeys,
          onItemClick: handleDropdownItemClick,
          onHeaderClick: handleDropdownHeaderClick,
        }}
      >
        <Popover
          isOpen={open}
          anchor={contentElement}
          css={{width: '100%'}}
          direction='bottom-left'
          onClose={handleClosePopover}
          onPositionedChange={handlePositionedChange}
        >
          <StyledPopover
            css={{...popoverCSS, width: popoverCSS.width ?? triggeElWidth}}
          >
            <DropdownList
              searchValue={searchValue}
              isLoading={isLoading}
              css={{
                maxHeight: numberOfRows
                  ? `${numberOfRows * ITEM_HEIGHT}px`
                  : '16rem',
              }}
              onLoadMore={onLoadMore}
              noDataMessage={noDataMessage}
            >
              {clonedChildren}
            </DropdownList>
          </StyledPopover>
        </Popover>
      </DropdownContext.Provider>
      {isErrored && errorMessage && (
        <StyledHelperText error={!!isErrored}>{errorMessage}</StyledHelperText>
      )}
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </StyledDropdownWrapper>
  )
})

export default Select as typeof Select & {
  ComboBox: typeof DropdownComboBox
  Select: typeof DropdownSelect
  Item: typeof DropdownItem
  Section: typeof DropdownSection
  Header: typeof DropdownHeader
}
