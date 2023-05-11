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
  StyledListBoxWrapper,
  StyledSelect,
} from './dropdown.styles'
import {countries, Flag} from './flags'
import DropdownHeader from './header'
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box'
import Popover from './popover'
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
  onSelectionChange?: (key: React.Key) => void
  type?: 'select' | 'combobox' | 'flag'
}

export type DropdownProps = Props &
  DropdownVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const {
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
    icon = <Icon />,
    type = 'select',
    isLoading = false,
    disabledKeys = [],
    defaultSelectedKey,
    isDisabled = false,
    defaultOpen = false,
    onLoadMore = () => {
      //Load more
    },
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
  const firstBlur = React.useRef(true)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const listBoxRef = React.useRef<HTMLUListElement>(null)
  // Select ref
  const selectRef = useDOMRef<HTMLElement>(ref)
  // Combobox ref
  const inputRef = React.useRef<HTMLInputElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

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
    return item.key === currentKey
  })

  const delegate = React.useMemo(
    () => new ListKeyboardDelegate(rawCollection, disabledKeys),
    [rawCollection, disabledKeys],
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

  // ====================================== EFFECT ======================================
  // map default value
  React.useEffect(() => {
    if (selectedKey) {
      setCurrentKey(selectedKey)
    }
  }, [selectedKey])

  React.useEffect(() => {
    const getTextFromKey = (key: React.Key) => {
      const selected = rawCollection.find((item) => {
        return item.key === key
      })
      if (selected) {
        const text =
          selected?.props.textValue && selected?.props.textValue !== ''
            ? selected?.props.textValue
            : textContent(selected)
        return text
      }
      return ''
    }

    if (!selectedKey && defaultSelectedKey) {
      setSearch(getTextFromKey(defaultSelectedKey))
    }
    if (selectedKey) {
      setSearch(getTextFromKey(selectedKey))
    }
  }, [selectedKey, defaultSelectedKey])

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
        props.onFocus?.()
        firstBlur.current = false
      } else if (!firstBlur.current) {
        props.onBlur?.()
      }
    }
  }, [open])

  React.useEffect(() => {
    if (currentKey !== undefined) {
      setFocusKey(currentKey)
      const text =
        selectedItem?.props.textValue && selectedItem?.props.textValue !== ''
          ? selectedItem?.props.textValue
          : textContent(selectedItem as React.ReactElement)
      setSearch(text ?? '')
      props.onSelectionChange?.(currentKey)
    }
  }, [currentKey])

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
          setCurrentKey(focusKey)
          setOpen(false)
        }
        break
      }
      case 'Escape': {
        e.preventDefault()
        setOpen(false)
        break
      }
    }
  }

  const close = () => {
    setIsSearching(false)
    setOpen(false)
  }

  const onHover = (key: React.Key | null) => {
    if (key) {
      setFocusKey(key)
    }
  }

  const onSelect = (key: React.Key) => {
    if (!isReadOnly) {
      setCurrentKey(key)
      setOpen(false)
    }
  }

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setIsSearching(true)
    setOpen(true)
  }

  const labelClick = () => {
    selectRef.current?.click()
    inputRef.current?.focus()
    buttonRef.current?.click()
  }

  const handleClickIcon = () => {
    setOpen(true)
    inputRef.current?.focus()
  }

  const hanleInputFocus = () => {
    props.onFocus?.()
  }

  const handleInputBlur = () => {
    props.onBlur?.()
  }
  // ====================================== RENDER ======================================
  return (
    <StyledDropdownWrapper css={css}>
      {props.label && (
        <label onClick={labelClick}>
          {props.label}
          {isRequired && <span>*</span>}
        </label>
      )}
      {type === 'select' && (
        <StyledSelect
          isEmpty={!selectedItem}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
          isOpened={open}
        >
          <button
            ref={selectRef as React.RefObject<HTMLButtonElement>}
            disabled={isDisabled}
            onClick={handleClickIcon}
          >
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
        >
          <input
            ref={inputRef}
            value={search}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={onSearch}
            onBlur={handleInputBlur}
            onFocus={hanleInputFocus}
          />
          <button
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
        >
          {choosenFlag && (
            <StyledFlagIcon>
              <Flag iso={choosenFlag['alpha-2']} />
            </StyledFlagIcon>
          )}
          <input
            ref={inputRef}
            value={search}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={onSearch}
            onBlur={handleInputBlur}
            onFocus={hanleInputFocus}
          />
          <button
            ref={buttonRef}
            disabled={isDisabled}
            onClick={handleClickIcon}
          >
            {icon}
          </button>
        </StyledFlag>
      )}
      <StyledListBoxWrapper>
        {collection && collection.length > 0 && open && (
          <Popover
            popoverRef={popoverRef}
            close={close}
            triggerRef={selectRef as React.RefObject<HTMLDivElement>}
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
              onHover={onHover}
              onSelect={onSelect}
              onLoadMore={onLoadMore}
            />
          </Popover>
        )}
      </StyledListBoxWrapper>
      {errorMessage && (
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
