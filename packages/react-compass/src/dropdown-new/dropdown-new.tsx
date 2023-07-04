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
import {
  DropdownContext,
  DropdownItemKey,
  SelectedItemDropdown,
} from './dropdown-new-context'
import DropdownFlag from './dropdown-new-flag'
import DropdownNewItem, {DropdownItemProps} from './dropdown-new-item'
import DropdownNewList from './dropdown-new-list'
import DropdownComboBox from './dropdown-new.combobox'
import DropdownHeader from './dropdown-new.header'
import DropdownSection from './dropdown-new.section'
import DropdownSelect from './dropdown-new.select'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownWrapper,
  StyledFlag,
  StyledFlagIcon,
  StyledHelperText,
  StyledIcon,
  StyledPopover,
  StyledSelect,
} from './dropdown-new.styles'
import {Flag} from './flags'
import {
  findItemByValue,
  getFirstItem,
  getItemAbove,
  getItemBelow,
  getItemByKey,
  getLastItem,
  textContent,
} from './utils'

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
  const [selectedKeysBackup, setSelectedKeysBackup] = React.useState<
    SelectedItemDropdown[]
  >([])
  const [focusKey, setFocusKey] = React.useState<string | number | undefined>(
    selectedKey || defaultSelectedKey,
  )
  const [searchValue, setSearchValue] = useState<string>('')
  const [dropdownItemKeys, setDropdownItemKeys] = useState<DropdownItemKey[]>(
    [],
  )

  // Select ref
  const selectRef = useDOMRef<HTMLDivElement>(ref)
  const buttonSelectRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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

  const mounted = useRef(false)

  /**
   * Reset focus key when closes popover
   */
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      if (!open) {
        setFocusKey('')
      }
    }
  }, [open])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const currentFocusKey =
        (focusKey || selectedKeys[0]?.value.toString()) ?? ''
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault()
          if (currentFocusKey) {
            const nextKey = getItemAbove(
              currentFocusKey,
              children,
              dropdownItemKeys,
            )
            if (nextKey?.props?.value) {
              setFocusKey(nextKey.props.value.toString() ?? '')
            }
          } else {
            setFocusKey(
              getLastItem(children, dropdownItemKeys)?.props.value.toString() ??
                '',
            )
          }
          break
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault()
          if (currentFocusKey) {
            const prevKey = getItemBelow(
              currentFocusKey,
              children,
              dropdownItemKeys,
            )
            if (prevKey?.props?.value) {
              setFocusKey(prevKey.props.value.toString() ?? '')
            }
          } else {
            setFocusKey(
              getFirstItem(
                children,
                dropdownItemKeys,
              )?.props.value.toString() ?? '',
            )
          }
          break
        case 'Enter':
          event.preventDefault()
          if (currentFocusKey) {
            const focusedItem = getItemByKey(currentFocusKey, children)
            if (focusedItem) {
              setOpen(false)
              // Deselect item
              if (
                shouldDeselect &&
                selectedKeys.findIndex(
                  (item) => item.value === focusedItem.props.value,
                ) !== -1
              ) {
                setSelectedKeys([])
                onSelectionChange?.('')
                return
              }
              setSelectedKeys([
                {
                  value: focusedItem.props.value.toString(),
                  displayValue: focusedItem.props.children,
                  flagName: focusedItem.props.flagName ?? '',
                },
              ])
              if (inputRef.current) {
                inputRef.current.value = textContent(
                  focusedItem.props.children as React.ReactElement,
                )
              }
              onSelectionChange?.(focusedItem.props.value)
            }
          }

          break
        case 'Escape':
        case 'Tab':
          event.preventDefault()
          setOpen(false)
          break
      }
    },
    [focusKey, children, selectedKeys, dropdownItemKeys],
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
      if (type === 'flag') {
        if (selectedKeys.length && !selectedKeysBackup.length) {
          setSelectedKeysBackup(selectedKeys)
        }
        setSelectedKeys([])
      }
    },
    [type, selectedKeys, selectedKeysBackup],
  )

  const fillTextForInput = useCallback(() => {
    if (['combobox', 'flag'].includes(type) && inputRef.current) {
      // wait for document move cursor
      setTimeout(() => {
        if (document.activeElement === inputRef.current) {
          return
        }
        if (
          type === 'flag' &&
          selectedKeysBackup.length &&
          !selectedKeys.length
        ) {
          setSelectedKeys(selectedKeysBackup)
          setSelectedKeysBackup([])
          return
        }
        if (inputRef.current) {
          if (selectedKeys && selectedKeys.length > 0) {
            inputRef.current.value = textContent(
              selectedKeys[0]?.displayValue as React.ReactElement,
            )
          } else {
            inputRef.current.value = ''
          }
          setSearchValue('')
        }
      })
    }
  }, [type, selectedKeysBackup, selectedKeys])

  useEffect(() => {
    if (!open && ['combobox', 'flag'].includes(type) && inputRef.current) {
      fillTextForInput()
    }
  }, [open, fillTextForInput])

  useEffect(() => {
    if (selectedKeys.length || !(selectedKey || defaultSelectedKey)) return

    const currentSelectedKey = selectedKey || defaultSelectedKey

    // Find the item with the specified value
    const item = findItemByValue(
      React.Children.toArray(children) as Array<
        React.ReactElement<DropdownItemProps>
      >,
      currentSelectedKey,
    )

    if (item) {
      setSelectedKeys([
        {
          value: currentSelectedKey.toString(),
          displayValue: item as React.ReactNode,
        },
      ])
      setFocusKey(currentSelectedKey.toString())
      if (inputRef.current) {
        inputRef.current.value = textContent(item as React.ReactElement)
      }
    }
  }, [children, selectedKey, defaultSelectedKey, selectedKeys])

  const handleInputBlur = useCallback(() => {
    onBlur?.()
    fillTextForInput()
  }, [fillTextForInput])

  const contentElement = useMemo(() => {
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
                  ? textContent(
                      selectedKeys[0]?.displayValue as React.ReactElement,
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
              onBlur={handleInputBlur}
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
            isEmpty={selectedKeys.length === 0}
            className='cdg-dropdown-input'
            isErrored={!!isErrored}
            {...getReferenceProps}
          >
            {selectedKeys && selectedKeys[0]?.flagName ? (
              <StyledFlagIcon>
                <Flag iso={selectedKeys[0].flagName} />
              </StyledFlagIcon>
            ) : null}
            <input
              id={id}
              ref={inputRef}
              readOnly={isReadOnly}
              disabled={isDisabled}
              placeholder={placeholder}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
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
    selectedKeys,
    isErrored,
    isDisabled,
    isReadOnly,
    onBlur,
    onFocus,
    handleDropdownToggle,
    handleInputChange,
    handleInputBlur,
  ])

  const triggeElWidth = useMemo(() => {
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
      setSelectedKeysBackup([selectedItem])
      if (['combobox', 'flag'].includes(type)) {
        if (inputRef.current) {
          inputRef.current.value = textContent(
            selectedItem.displayValue as React.ReactElement,
          )
          inputRef.current.blur()
        }
        setSearchValue(
          textContent(selectedItem.displayValue as React.ReactElement),
        )
      }
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
          selectedKeys,
          setSelectedKeys,
          dropdownItemKeys,
          setDropdownItemKeys,
          onItemClick: handleDropdownItemClick,
        }}
      >
        {contentElement}
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
                width: triggeElWidth,
              }}
            >
              <DropdownNewList
                searchValue={searchValue}
                isLoading={isLoading}
                css={{
                  maxHeight: numberOfRows
                    ? `${numberOfRows * ITEM_HEIGHT}px`
                    : '16rem',
                }}
              >
                {children}
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
  ComboBox: typeof DropdownComboBox
  Flag: typeof DropdownFlag
  Select: typeof DropdownSelect
  Item: typeof DropdownNewItem
  Section: typeof DropdownSection
  Header: typeof DropdownHeader
}
