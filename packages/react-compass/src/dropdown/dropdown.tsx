import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React, {
  Key,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownContext,
  DropdownItemKey,
  SelectedItemDropdown,
} from './dropdown-context'
import DropdownItem from './dropdown-item'
import DropdownList from './dropdown-list'
import DropdownComboBox from './dropdown.combobox'
import DropdownFlag from './dropdown.flag'
import DropdownHeader from './dropdown.header'
import DropdownSection from './dropdown.section'
import DropdownSelect from './dropdown.select'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownPopover,
  StyledDropdownWrapper,
  StyledFlag,
  StyledFlagIcon,
  StyledHelperText,
  StyledIcon,
  StyledPopover,
  StyledSelect,
} from './dropdown.styles'
import Flag from './flags'
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
  disabledKeys?: Key[]
  children?: React.ReactNode
  description?: React.ReactNode
  disableClearable?: boolean
  noDataMessage?: string
  onBlur?: () => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
  onSelectionChange?: (key: Key) => void
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
const EMPTY_FUNC = () => {
  //
}

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  // ====================================== Define ======================================
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    css = {},
    children,
    type = 'select',
    icon = <Icon />,
    placeholder,
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
    disableClearable = false,
    prefix = null,
    noDataMessage = '',
    onSelectionChange = EMPTY_FUNC,
    onFocus = EMPTY_FUNC,
    onBlur = EMPTY_FUNC,
    onLoadMore = EMPTY_FUNC,
    ...delegated
  } = props

  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const [selectedItem, setSelectedItem] =
    React.useState<SelectedItemDropdown | null>(null)
  const [selectedItemBackup, setSelectedItemBackup] =
    React.useState<SelectedItemDropdown | null>(null)
  const [focusKey, setFocusKey] = React.useState<Key | undefined>(
    selectedKey || defaultSelectedKey,
  )
  const [searchValue, setSearchValue] = useState<string>('')
  const [dropdownItemKeys, setDropdownItemKeys] = useState<DropdownItemKey[]>(
    [],
  )

  const [clonedChildren, setClonedChildren] = useState<React.ReactNode>(null)

  // Select ref
  const selectRef = useDOMRef<HTMLDivElement>(ref)
  const buttonSelectRef = useDOMRef<HTMLButtonElement>(null)
  const inputRef = useDOMRef<HTMLInputElement>(null)

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

  const openChangedRef = useRef(false)
  const selectedItemChangedRef = useRef(false)

  /**
   * Reset focus key when closes popover
   */
  useEffect(() => {
    if (!openChangedRef.current) {
      openChangedRef.current = true
    } else {
      if (!open) {
        setFocusKey('')
      }
    }
  }, [open])

  // clone children to assign value prop if not exists. the value would be equal to the key prop
  // This is to support the legacy code where users don't pass value prop and use key prop instead
  useEffect(() => {
    const clonedChildren = React.Children.map(children, (child) => {
      const clonedChild = React.cloneElement(child as React.ReactElement)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (!clonedChild?.props?.value) {
        return React.cloneElement(clonedChild, {
          value: clonedChild.key || '',
        })
      } else {
        return clonedChild
      }
    })
    setClonedChildren(clonedChildren)
  }, [children])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const currentFocusKey = (focusKey || selectedItem?.value.toString()) ?? ''
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault()
          // Check if focus key exists
          if (currentFocusKey) {
            const nextKey = getItemAbove(
              currentFocusKey,
              clonedChildren,
              dropdownItemKeys,
            )
            if (nextKey?.props?.value) {
              setFocusKey(nextKey.props.value.toString() ?? '')
            }
          } else {
            setFocusKey(
              getLastItem(
                clonedChildren,
                dropdownItemKeys,
              )?.props?.value?.toString() ?? '',
            )
          }
          break
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault()
          if (currentFocusKey) {
            const prevKey = getItemBelow(
              currentFocusKey,
              clonedChildren,
              dropdownItemKeys,
            )
            if (prevKey?.props?.value) {
              setFocusKey(prevKey.props.value.toString() ?? '')
            }
          } else {
            setFocusKey(
              getFirstItem(
                clonedChildren,
                dropdownItemKeys,
              )?.props?.value?.toString() ?? '',
            )
          }
          break
        case 'Enter':
          event.preventDefault()
          if (currentFocusKey) {
            const focusedItem = getItemByKey(currentFocusKey, clonedChildren)
            if (focusedItem) {
              setOpen(false)
              // Deselect item
              if (
                !disableClearable &&
                shouldDeselect &&
                selectedItem?.value === focusedItem.props.value
              ) {
                setSelectedItem(null)
                onSelectionChange?.('')
                return
              }
              setSelectedItem({
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
            }
          }

          break
        case 'Escape':
        case 'Tab':
          setOpen(false)
          break
      }
    },
    [
      disableClearable,
      shouldDeselect,
      focusKey,
      clonedChildren,
      selectedItem,
      dropdownItemKeys,
    ],
  )

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
      // Reset current selected item and set to backup item
      if (type === 'flag') {
        // Check if selectedItemBackup exists
        if (selectedItem && !selectedItemBackup) {
          setSelectedItemBackup(selectedItem)
        }
        setSelectedItem(null)
      }
      // Combobox
      else if (type === 'combobox') {
        if (allowsCustomValue) {
          setSelectedItem(null)
          onSelectionChange?.('')
        }
      }
    },
    [
      type,
      selectedItem,
      selectedItemBackup,
      allowsCustomValue,
      onSelectionChange,
    ],
  )

  const fillTextForInput = useCallback(() => {
    if (['combobox', 'flag'].includes(type) && inputRef.current) {
      // wait for document move cursor
      setTimeout(() => {
        // Check if click into content of Dropdown
        if (document.activeElement === inputRef.current) {
          return
        }
        // Check if there is a backup item but no new item is selected then rollback backup item
        if (type === 'flag' && selectedItemBackup && !selectedItem) {
          setSelectedItem(selectedItemBackup)
          setSelectedItemBackup(null)
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
  }, [type, selectedItemBackup, selectedItem, allowsCustomValue])

  useEffect(() => {
    if (!open && ['combobox', 'flag'].includes(type) && inputRef.current) {
      fillTextForInput()
    }
  }, [open, type, fillTextForInput])

  useEffect(() => {
    // Wait for calculate clonedChildren
    // Run set current selectedKey | defaultSelectedKey for first time
    if (!clonedChildren || selectedItemChangedRef.current) {
      return
    }
    selectedItemChangedRef.current = true
    if (!!selectedItem || !(selectedKey || defaultSelectedKey)) return

    const currentSelectedKey = selectedKey || defaultSelectedKey

    // Find the item with the specified value
    const item = getItemByKey(currentSelectedKey, clonedChildren)

    if (item) {
      setSelectedItem({
        value: currentSelectedKey.toString(),
        displayValue: item as React.ReactNode,
        flagName: item?.props?.flagName ?? '',
      })
      setFocusKey(currentSelectedKey.toString())
      if (inputRef.current) {
        inputRef.current.value = textContent(item as React.ReactElement)
      }
    }
  }, [clonedChildren, selectedKey, defaultSelectedKey, selectedItem])

  const contentElement = useMemo(() => {
    switch (type) {
      case 'select':
        return (
          <StyledSelect
            ref={refs.setReference}
            isEmpty={!selectedItem}
            className='cdg-dropdown-input'
            isErrored={!!isErrored}
            isDisabled={isDisabled}
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
            ref={refs.setReference}
            className='cdg-dropdown-input'
            isErrored={!!isErrored}
            isDisabled={isDisabled}
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
      case 'flag':
        return (
          <StyledFlag
            ref={refs.setReference}
            isEmpty={!selectedItem}
            className='cdg-dropdown-input'
            isErrored={!!isErrored}
            isDisabled={isDisabled}
            {...getReferenceProps}
          >
            {selectedItem && selectedItem?.flagName ? (
              <StyledFlagIcon>
                <Flag iso={selectedItem.flagName} />
              </StyledFlagIcon>
            ) : null}
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
              tabIndex={-1}
              disabled={isDisabled}
              onClick={handleDropdownToggle}
              type='button'
              className='cdg-dropdown-button'
            >
              {icon}
            </button>
          </StyledFlag>
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
  ])

  const triggeElWidth = useMemo(() => {
    switch (type) {
      case 'select':
        return buttonSelectRef.current?.clientWidth ?? '100%'
      case 'combobox':
      case 'flag':
        return inputRef.current?.clientWidth ?? '100%'
      default:
        return '100%'
    }
  }, [type, open])

  const handleDropdownItemClick = (currentItem: SelectedItemDropdown) => {
    if (isReadOnly) {
      return
    }
    setOpen(false)
    // Select clear item
    if (!disableClearable && !currentItem.value) {
      setSelectedItem(null)
      onSelectionChange?.('')
      return
    }
    // Deselect item
    if (
      !disableClearable &&
      shouldDeselect &&
      selectedItem?.value === currentItem.value
    ) {
      setSelectedItem(null)
      onSelectionChange?.('')
      return
    }

    if (selectedItem?.value !== currentItem.value) {
      onSelectionChange?.(currentItem.value)
    }
    setSelectedItem(currentItem)
    setSelectedItemBackup(currentItem)
    if (['combobox', 'flag'].includes(type)) {
      if (inputRef.current) {
        inputRef.current.value = textContent(
          currentItem.displayValue as React.ReactElement,
        )
        inputRef.current.blur()
      }
      setSearchValue(
        textContent(currentItem.displayValue as React.ReactElement),
      )
    }
  }

  return (
    <StyledDropdownWrapper
      className={`${open ? 'cdg-dropdown-opening' : ''}`}
      css={css}
      ref={selectRef}
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
          focusKey: focusKey ?? '',
          selectedKey,
          defaultSelectedKey,
          disabledKeys,
          searchValue,
          selectedItem,
          setSelectedItem,
          dropdownItemKeys,
          setDropdownItemKeys,
          onItemClick: handleDropdownItemClick,
        }}
      >
        {contentElement}
        {open && (
          <StyledDropdownPopover
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
            }}
            {...getFloatingProps}
          >
            <StyledPopover
              style={{
                width: triggeElWidth,
              }}
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
          </StyledDropdownPopover>
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
  ComboBox: typeof DropdownComboBox
  Flag: typeof DropdownFlag
  Select: typeof DropdownSelect
  Item: typeof DropdownItem
  Section: typeof DropdownSection
  Header: typeof DropdownHeader
}
