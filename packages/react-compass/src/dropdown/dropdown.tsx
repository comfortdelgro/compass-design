import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
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
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box'
import Popover from './popover'
import {
  DropdownBase,
  Icon,
  ListKeyboardDelegate,
  pickChilds,
  textContent,
} from './utils'

interface Props extends DropdownBase {
  selectedKey?: React.Key
  defaultSelectedKey?: React.Key
  flagKeyType?: 'alpha-2' | 'alpha-3' | 'name' | 'country-code'
  onSelectionChange?: (key: React.Key) => void
  type?: 'select' | 'combobox' | 'flag'
}

export type DropdownProps = Props & DropdownVariantProps

const Select = React.forwardRef<HTMLElement, DropdownProps>((props, ref) => {
  const {
    css = {},
    isOpen,
    children,
    isErrored,
    isRequired,
    helperText,
    selectedKey,
    placeholder,
    errorMessage,
    icon = <Icon />,
    type = 'select',
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
    defaultSelectedKey,
  )
  const [focusKey, setFocusKey] = React.useState<React.Key | undefined>(
    defaultSelectedKey,
  )

  // ====================================== REF ======================================
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
  React.useEffect(() => {
    if (choosenFlag?.['phone-code']) {
      props.onFlagChange?.(choosenFlag['phone-code'])
    }
  }, [choosenFlag])

  React.useEffect(() => {
    const getTextFromKey = (key: React.Key) => {
      const selected = rawCollection.find((item) => {
        return item.key === key
      })
      if (selected) {
        const text = textContent(selected)
        return text
      }
      return ''
    }

    if (!selectedKey && defaultSelectedKey) {
      setCurrentKey(defaultSelectedKey)
      setFocusKey(defaultSelectedKey)
      setSearch(getTextFromKey(defaultSelectedKey))
    }
    if (selectedKey) {
      setCurrentKey(selectedKey)
      setFocusKey(selectedKey)
      setSearch(getTextFromKey(selectedKey))
    }
  }, [selectedKey])

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
  }, [open])

  React.useEffect(() => {
    if (currentKey !== undefined) {
      setFocusKey(currentKey)
      const text = textContent(selectedItem as React.ReactElement)
      setSearch(text ?? '')
      props.onSelectionChange?.(currentKey)
    }
  }, [currentKey])

  console.log(search)
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
    setCurrentKey(key)
    setOpen(false)
  }

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setIsSearching(true)
    setOpen(true)
  }

  // ====================================== RENDER ======================================
  return (
    <StyledDropdownWrapper css={css}>
      {props.label && (
        <label>
          {props.label}
          {isRequired && <span>*</span>}
        </label>
      )}
      {type === 'select' && (
        <StyledSelect
          isEmpty={!selectedItem}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
        >
          <button
            ref={selectRef as React.RefObject<HTMLButtonElement>}
            disabled={isDisabled}
            onClick={() => setOpen(true)}
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
            placeholder={placeholder}
            ref={inputRef}
            value={search}
            onChange={onSearch}
          />
          <button
            ref={buttonRef}
            disabled={isDisabled}
            onClick={() => setOpen(true)}
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
            placeholder={placeholder}
            ref={inputRef}
            value={search}
            onChange={onSearch}
          />
          <button
            ref={buttonRef}
            disabled={isDisabled}
            onClick={() => setOpen(true)}
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
              listBoxRef={listBoxRef}
              focusKey={focusKey}
              currentKey={currentKey}
              collection={collection}
              disabledKeys={disabledKeys}
              isLoading={!!props.isLoading}
              headerTitle={props.headerTitle}
              dropdownType={type}
              onHover={onHover}
              onSelect={onSelect}
              onLoadMore={onLoadMore}
              headerOnClick={(e) => props?.headerOnClick?.(e)}
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

export default Select
