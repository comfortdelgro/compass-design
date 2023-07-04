import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownComboBox from './dropdown.combobox'
import DropdownFlag from './dropdown.flag'
import DropdownSelect from './dropdown.select'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownWrapper,
  StyledFlag,
  StyledFlagIcon,
  StyledHelperText,
  StyledSelect,
} from './dropdown.styles'
import {countries, Flag} from './flags'
import DropdownHeader from './header'
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box'
import Popover from './popover'
import RowCalculator from './rowCalculator'
import DropdownSection from './section'
import {
  DropdownBase,
  getDefaulValue,
  Icon,
  ListKeyboardDelegate,
  pickChilds,
  pickSections,
  textContent,
} from './utils'

interface Props extends DropdownBase {
  selectedKey?: React.Key
  defaultSelectedKey?: React.Key
  shouldDeselect?: boolean
  allowsCustomValue?: boolean
  onSelectionChange?: (key: React.Key) => void
  type?: 'select' | 'combobox' | 'flag'
  prefix?: React.ReactNode
}

export type DropdownProps = Props &
  DropdownVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    css = {},
    isOpen,
    children,
    isErrored,
    isRequired,
    isReadOnly,
    helperText,
    selectedKey,
    placeholder,
    errorMessage,
    numberOfRows,
    icon = <Icon />,
    type = 'select',
    isLoading = false,
    disabledKeys = [],
    defaultSelectedKey,
    isDisabled = false,
    defaultOpen = false,
    shouldDeselect = false,
    disableClearable = false,
    allowsCustomValue = false,
    prefix = null,
    onLoadMore = () => {
      //Load more
    },
    onBlur = () => {
      //
    },
    onFocus = () => {
      //
    },
    onSelectionChange = () => {
      //
    },
    ...delegated
  } = props
  // ====================================== STATE ======================================
  const [search, setSearch] = React.useState('')
  const [isSearching, setIsSearching] = React.useState(false)
  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const [currentKey, setCurrentKey] = React.useState<React.Key | undefined>(
    getDefaulValue(defaultSelectedKey, selectedKey),
  )
  const [focusKey, setFocusKey] = React.useState<React.Key | undefined>(
    getDefaulValue(defaultSelectedKey, selectedKey),
  )

  // ====================================== REF ======================================
  const listBoxRef = React.useRef<HTMLUListElement>(null)
  const visualizeList = React.useRef<HTMLDivElement>(null)
  const visualizeULList = React.useRef<HTMLUListElement>(null)
  // Select ref
  const selectRef = useDOMRef<HTMLElement>(ref)
  // Combobox ref
  const inputRef = React.useRef<HTMLInputElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  // ====================================== FLOATING ======================================
  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])

  // ====================================== CONST ======================================
  const rawCollection = React.useMemo(
    () => pickChilds<DropdownItemProps>(children, DropdownItem),
    [children],
  )

  const sectionCollection = React.useMemo(
    () => pickSections(children),
    [children],
  )

  // Filter collection by search text, works with combobox
  const collection = React.useMemo(() => {
    if (!isSearching) return rawCollection
    if (search === '') {
      return rawCollection
    } else {
      return rawCollection.filter((item) => {
        const text = textContent(item)
        return text?.toLowerCase().includes(search.toLowerCase())
      })
    }
  }, [rawCollection, search, isSearching])

  const selectedItem = rawCollection.find((item) => {
    return item.key == currentKey
  })

  const delegate = React.useMemo(
    () => new ListKeyboardDelegate(collection, disabledKeys),
    [collection, disabledKeys],
  )

  const choosenFlag = React.useMemo(() => {
    if (search !== '') {
      return countries.find(
        (item) =>
          item.name === search ||
          item['alpha-2'] === search ||
          item['alpha-3'] === search ||
          item['phone-code'] === search ||
          item['country-code'] === search,
      )
    }
    return null
  }, [search])

  const getTextFromKey = React.useCallback(
    (key: React.Key) => {
      const selected = rawCollection.find((item) => {
        return item.key == key
      })
      if (selected) {
        const text =
          selected?.props.textValue && selected?.props.textValue !== ''
            ? selected?.props.textValue
            : textContent(selected)
        return text
      }
      return ''
    },
    [rawCollection],
  )

  // ====================================== EFFECT ======================================
  // map default value
  React.useEffect(() => {
    const newValue = getDefaulValue(defaultSelectedKey, selectedKey, true)
    setCurrentKey(newValue)
    setFocusKey(newValue)
    if (newValue) {
      setSearch(getTextFromKey(newValue))
    }
  }, [selectedKey, getTextFromKey])

  React.useEffect(() => {
    if (!isOpen && defaultOpen) {
      setOpen(defaultOpen)
    }
    if (isOpen) {
      setOpen(isOpen)
    }
  }, [isOpen])

  React.useEffect(() => {
    props.onOpenChange?.(open)
    if (type === 'select') {
      if (open) {
        selectRef.current?.focus()
        inputRef.current?.focus()
      } else {
        setIsSearching(false)
        selectRef.current?.blur()
        inputRef.current?.blur()
      }
    } else if (type === 'combobox') {
      if (!open) {
        if (!allowsCustomValue) {
          if (currentKey) {
            setSearch(getTextFromKey(currentKey))
          } else {
            setSearch('')
          }
        } else {
          if (currentKey && search) {
            const originalText = getTextFromKey(currentKey)
            if (originalText !== search && isSearching) {
              setCurrentKey(undefined)
              onSelectionChange?.('')
            }
          }
        }
        setIsSearching(false)
      }
    }
  }, [open])

  React.useEffect(() => {
    if (currentKey !== undefined) {
      setFocusKey(currentKey)
      setSearch(getTextFromKey(currentKey))
    }
  }, [currentKey, getTextFromKey])

  // ====================================== CALLBACK ======================================
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        const key =
          focusKey != undefined && focusKey != -1
            ? delegate.getKeyAbove(focusKey)
            : delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        const key =
          focusKey != undefined && focusKey != -1
            ? delegate.getKeyBelow(focusKey)
            : delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'Enter': {
        e.preventDefault()
        if (focusKey) {
          onSelect(focusKey)
        }
        break
      }
      case 'Escape': {
        e.preventDefault()
        setOpen(false)
        break
      }
      case 'Tab': {
        setOpen(false)
        break
      }
    }
  }

  const onSelect = (key: React.Key) => {
    if (!isReadOnly) {
      if (currentKey === key && shouldDeselect) {
        setCurrentKey(undefined)
        onSelectionChange?.('')
      } else {
        setCurrentKey(key)
        onSelectionChange?.(key)
      }
      setIsSearching(false)
      setOpen(false)
    }
  }

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.value === '' ||
      isEmpty(event.target.value.replaceAll(' ', ''))
    ) {
      if (!isReadOnly) {
        if (!disableClearable) {
          setCurrentKey(undefined)
          setFocusKey(undefined)
          onSelectionChange?.('')
        }
        setSearch(event.target.value)
        setIsSearching(false)
      }
    } else {
      setSearch(event.target.value)
    }
    setIsSearching(true)
    setOpen(true)
  }

  const labelClick = () => {
    document.getElementById(id)?.click()
    selectRef.current?.click()
    buttonRef.current?.click()
  }

  const handleClickIcon = () => {
    setOpen((v) => !v)
    inputRef.current?.focus()
  }

  const handleBlur = () => {
    if (type == 'select') {
      onBlur()
    }
    setFocusKey(currentKey)
  }

  const handleFocus = () => {
    if (type == 'select') {
      onFocus()
    }
    setFocusKey(currentKey)
  }

  // ====================================== RENDER ======================================
  return (
    <StyledDropdownWrapper css={css} {...delegated}>
      {props.label && (
        <label onClick={labelClick} htmlFor={id}>
          {props.label}
          {isRequired && <span>*</span>}
        </label>
      )}
      {type === 'select' && (
        <StyledSelect
          isEmpty={!selectedItem}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
          ref={refs.setReference}
          {...getReferenceProps}
        >
          <button
            id={id}
            type='button'
            ref={selectRef as React.RefObject<HTMLButtonElement>}
            disabled={isDisabled}
            onClick={handleClickIcon}
          >
            {prefix}
            <span>
              {selectedItem
                ? selectedItem.props.textValue
                  ? selectedItem.props.textValue
                  : selectedItem.props.children
                : placeholder}
            </span>
            {icon}
          </button>
        </StyledSelect>
      )}
      {type === 'combobox' && (
        <StyledComboBox
          isEmpty={!selectedItem}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
          ref={refs.setReference}
          {...getReferenceProps}
        >
          <input
            id={id}
            ref={inputRef}
            value={search}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={onSearch}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <button
            type='button'
            tabIndex={-1}
            ref={buttonRef}
            disabled={isDisabled}
            onClick={handleClickIcon}
          >
            {icon}
          </button>
        </StyledComboBox>
      )}
      {type == 'flag' && (
        <StyledFlag
          isEmpty={!choosenFlag}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
          ref={refs.setReference}
          {...getReferenceProps}
        >
          {choosenFlag && (
            <StyledFlagIcon>
              <Flag iso={choosenFlag['alpha-2']} />
            </StyledFlagIcon>
          )}
          <input
            id={id}
            ref={inputRef}
            value={search}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={onSearch}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <button
            ref={buttonRef}
            tabIndex={-1}
            disabled={isDisabled}
            onClick={handleClickIcon}
            type='button'
          >
            {icon}
          </button>
        </StyledFlag>
      )}
      {collection && open && (
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
          <Popover
            isEmpty={!isLoading ? collection.length === 0 : false}
            visualizeRef={visualizeULList}
            triggerRef={
              type == 'select'
                ? (selectRef as React.RefObject<HTMLDivElement>)
                : inputRef
            }
            onBlur={handleBlur}
            onFocus={handleFocus}
            handleKeyDown={handleKeyDown}
          >
            <ListBox
              dropdownType={type}
              focusKey={focusKey}
              currentKey={currentKey}
              collection={collection}
              listBoxRef={listBoxRef}
              disabledKeys={disabledKeys}
              isLoading={isLoading}
              sectionCollection={sectionCollection}
              rootChildren={children}
              onSelect={onSelect}
              onLoadMore={onLoadMore}
            />
          </Popover>
        </div>
      )}
      <RowCalculator
        ref={visualizeList}
        dropdownType={type}
        isLoading={isLoading}
        collection={rawCollection}
        listBoxRef={visualizeULList}
        rootChildren={children}
        numberOfRows={numberOfRows}
        sectionCollection={sectionCollection}
        onLoadMore={() => {
          //
        }}
      />
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
