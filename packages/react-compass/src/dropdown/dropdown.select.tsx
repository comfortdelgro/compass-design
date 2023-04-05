import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownVariantProps,
  StyledDropdownWrapper,
  StyledListBoxWrapper,
  StyledSelect,
  StyledTextFieldHelperText,
} from './dropdown.styles'
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box/select'
import {ListKeyboardDelegate} from './ListKeyboardDelegate'
import Popover from './popover/select'
import {Icon} from './utils'

interface Props extends StyledComponentProps {
  label?: string
  isOpen?: boolean
  defaultOpen?: boolean
  validationState?: 'valid' | 'invalid'
  onOpenChange?: (isOpen: boolean) => void
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
  headerOnClick?: (e: unknown) => void
  selectedKey?: React.Key | null
  defaultSelectedKey?: React.Key
  onSelectionChange?: (key: React.Key) => void
  onLoadMore?: () => void
}

export type DropdownProps = Props & DropdownVariantProps

const Select = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      icon = <Icon />,
      children,
      isOpen,
      defaultOpen = false,
      isErrored,
      isRequired,
      isDisabled = false,
      errorMessage,
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
    const [open, setOpen] = React.useState<boolean>(defaultOpen)
    const selectRef = useDOMRef<HTMLButtonElement>(ref)

    const listBoxRef = React.useRef<HTMLUListElement>(null)
    const popoverRef = React.useRef<HTMLDivElement>(null)
    const collection = pickChilds(children, DropdownItem)
    const selectedItem = collection.find((item) => {
      return item.key === currentKey
    })

    const delegate = React.useMemo(
      () => new ListKeyboardDelegate(collection, disabledKeys),
      [collection, disabledKeys],
    )

    React.useEffect(() => {
      if (!selectedKey && defaultSelectedKey) {
        setCurrentKey(defaultSelectedKey)
      }
      if (selectedKey) {
        setCurrentKey(selectedKey)
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

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft': {
          // prevent scrolling containers
          e.preventDefault()

          const key =
            currentKey != null
              ? delegate.getKeyAbove(currentKey)
              : delegate.getFirstKey()
          if (key) {
            setCurrentKey(key)
          }
          break
        }
        // case 'ArrowRight': {
        //   // prevent scrolling containers
        //   e.preventDefault()

        //   let key = currentKey != null ? delegate.getKeyBelow(currentKey) : delegate.getFirstKey()
        //   if (key) {
        //     setCurrentKey(key)
        //   }
        //   break
        // }
      }
    }

    return (
      <StyledDropdownWrapper css={css}>
        {props.label && (
          <label>
            {props.label}
            {isRequired && <span>*</span>}
          </label>
        )}
        <StyledSelect
          isEmpty={!selectedItem}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
        >
          <button
            ref={selectRef}
            disabled={isDisabled}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => e.preventDefault()}
          >
            <span>
              {selectedItem
                ? selectedItem.props.textValue
                  ? selectedItem.props.textValue
                  : selectedItem.props.children
                : props.placeholder}
            </span>
            {icon}
          </button>
        </StyledSelect>
        <StyledListBoxWrapper>
          {open && (
            <Popover
              popoverRef={popoverRef}
              close={() => setOpen(false)}
              triggerRef={selectRef}
            >
              <ListBox
                collection={collection}
                onLoadMore={onLoadMore}
                headerTitle={props.headerTitle}
                isLoading={!!props.isLoading}
                headerOnClick={(e) => props?.headerOnClick?.(e)}
                listBoxRef={listBoxRef}
              />
            </Popover>
          )}
        </StyledListBoxWrapper>
        {errorMessage && (
          <StyledTextFieldHelperText error={!!isErrored}>
            {errorMessage}
          </StyledTextFieldHelperText>
        )}
      </StyledDropdownWrapper>
    )
  },
)

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
