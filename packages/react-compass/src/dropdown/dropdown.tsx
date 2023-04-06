import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownWrapper,
  StyledErrorMessage,
  StyledFlag,
  StyledFlagIcon,
  StyledListBoxWrapper,
  StyledSelect,
} from './dropdown.styles'
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box'
import Popover from './popover'
import {countries, Flag, Icon, ListKeyboardDelegate} from './utils'

interface Props extends StyledComponentProps {
  label?: string
  isOpen?: boolean
  defaultOpen?: boolean
  validationState?: 'valid' | 'invalid'
  disabledKeys?: Iterable<React.Key>
  isLoading?: boolean
  icon?: React.ReactNode
  isDisabled?: boolean
  isReadOnly?: boolean
  isErrored?: boolean
  isRequired?: boolean
  description?: React.ReactNode
  placeholder?: string
  errorMessage?: string
  headerTitle?: string
  autoFocus?: boolean
  selectedKey?: React.Key | null
  defaultSelectedKey?: React.Key
  children?: React.ReactNode
  flagKeyType?: 'alpha-2' | 'alpha-3' | 'name' | 'country-code'
  headerOnClick?: (e: unknown) => void
  onOpenChange?: (isOpen: boolean) => void
  onSelectionChange?: (key: React.Key) => void
  onFlagChange?: (p: string) => void
  onLoadMore?: () => void

  type?: 'select' | 'combobox' | 'flag'
}

export type DropdownProps = Props & DropdownVariantProps

const Select = React.forwardRef<HTMLElement, DropdownProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    icon = <Icon />,
    children,
    type = 'select',
    isOpen,
    defaultOpen = false,
    isErrored,
    isRequired,
    isDisabled = false,
    errorMessage,
    placeholder,
    selectedKey,
    defaultSelectedKey,
    disabledKeys = [],
    onLoadMore = () => {
      //Load more
    },
  } = props
  const [currentKey, setCurrentKey] = React.useState<React.Key | undefined>(
    defaultSelectedKey,
  )
  const [focusKey, setFocusKey] = React.useState<React.Key | undefined>(
    defaultSelectedKey,
  )
  const [search, setSearch] = React.useState('')
  const [isSearching, setIsSearching] = React.useState(false)
  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const listBoxRef = React.useRef<HTMLUListElement>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  // Select ref
  const selectRef = useDOMRef<HTMLElement>(ref)

  // Combobox ref
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const rawCollection = pickChilds(children, DropdownItem)
  const collection = React.useMemo(() => {
    if (!isSearching) return rawCollection
    if (search === '') {
      return rawCollection
    } else {
      return rawCollection.filter((item) => {
        return item.props.children?.toLowerCase().includes(search.toLowerCase())
      })
    }
  }, [rawCollection, search, isSearching])

  const selectedItem = collection.find((item) => {
    return item.key === currentKey
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

  React.useEffect(() => {
    if (choosenFlag?.['phone-code']) {
      props.onFlagChange?.(choosenFlag['phone-code'])
    }
  }, [choosenFlag])

  React.useEffect(() => {
    if (!selectedKey && defaultSelectedKey) {
      setCurrentKey(defaultSelectedKey)
      setFocusKey(defaultSelectedKey)
      setSearch(defaultSelectedKey.toString())
    }
    if (selectedKey) {
      setCurrentKey(selectedKey)
      setFocusKey(selectedKey)
      setSearch(selectedKey.toString())
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
      setSearch(selectedItem?.props.children ?? '')
      props.onSelectionChange?.(currentKey)
    }
  }, [currentKey])

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        const key =
          focusKey != null
            ? delegate.getKeyAbove(focusKey)
            : delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        const key =
          focusKey != null
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
        {open && (
          <Popover
            popoverRef={popoverRef}
            close={close}
            triggerRef={selectRef as React.RefObject<HTMLDivElement>}
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
              handleKeyDown={handleKeyDown}
              onHover={onHover}
              onSelect={onSelect}
              onLoadMore={onLoadMore}
              headerOnClick={(e) => props?.headerOnClick?.(e)}
            />
          </Popover>
        )}
      </StyledListBoxWrapper>
      {errorMessage && (
        <StyledErrorMessage error={!!isErrored}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledDropdownWrapper>
  )
})

const pickChilds = (
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): Array<React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>> => {
  const matched: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  > = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(
        item as React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>,
      )
    }
    return item
  })
  const childs = matched.length >= 0 ? matched : []

  return childs
}

export default Select
