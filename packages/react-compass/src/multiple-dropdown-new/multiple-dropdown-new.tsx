import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownItemKey,
  MultipleDropdownContext,
  SelectedItemDropdown,
} from './multiple-dropdown-new-context'
import MultipleDropdownNewItem from './multiple-dropdown-new-item'
import MultipleDropdownList from './multiple-dropdown-new-list'
import MultipleDropdownHeader from './multiple-dropdown-new.header'
import {
  DropdownVariantProps,
  StyledDropdown,
  StyledDropdownWrapper,
  StyledIcon,
  StyledPopover,
  StyledSelectedItemWrapper,
} from './multiple-dropdown-new.styles'

interface Props extends StyledComponentProps {
  selectedKeys?: Array<string | number>
  defaultSelectedKeys?: Array<string | number>
  customDisplayValue?: React.ReactNode
  displayedValue?: 'chip' | 'string'
  variant?: 'combobox' | 'select'
  label?: React.ReactNode
  isOpen?: boolean
  isLoading?: boolean
  autoFocus?: boolean
  isErrored?: boolean
  helperText?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  defaultOpen?: boolean
  numberOfRows?: number
  icon?: React.ReactNode
  disabledKeys?: Array<string | number>
  disableClearable?: boolean
  children?: React.ReactNode
  description?: React.ReactNode
  onBlur?: () => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
  onSelectionChange?: (key: Array<string | number>) => void
}

export type MultipleDropdownProps = Props &
  DropdownVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const Icon = () => (
  <StyledIcon width='16' height='16' viewBox='0 0 16 16'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </StyledIcon>
)

const MultipleDropdown = React.forwardRef<
  HTMLDivElement,
  MultipleDropdownProps
>((props, ref) => {
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    css = {},
    isOpen,
    children,
    isErrored,
    isDisabled,
    isRequired,
    isReadOnly,
    helperText,
    defaultOpen,
    errorMessage,
    selectedKeys,
    numberOfRows,
    displayedValue = 'chip',
    icon = <Icon />,
    disabledKeys = [],
    isLoading = false,
    variant = 'combobox',
    customDisplayValue,
    defaultSelectedKeys = [],
    label,
    placeholder,
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
    onOpenChange = () => {
      //
    },
    ...delegated
  } = props
  // ====================================== STATE ======================================
  const [open, setOpen] = React.useState(false)
  const [focused, setFocused] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [focusKey, setFocusKey] = React.useState<string | number | undefined>()
  const [selectedItems, setSelectedItems] = React.useState<
    SelectedItemDropdown[]
  >([])
  const [dropdownItemKeys, setDropdownItemKeys] = React.useState<
    DropdownItemKey[]
  >([])

  // ====================================== REF ======================================
  const refDOM = useDOMRef<HTMLDivElement>(ref)
  const wrapperRef = useDOMRef<HTMLDivElement>(null)
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

  const handleOpen = () => {
    if (!isDisabled) {
      setOpen(true)
      inputRef.current?.focus()
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (wrapperRef.current) {
      const value = event.target.value
      setSearch(value)
      setOpen(true)
      if (value !== '') {
        const fakeEle = document.createElement('div')
        fakeEle.style.position = 'absolute'
        fakeEle.style.top = '0'
        fakeEle.style.left = '-9999px'
        fakeEle.style.overflow = 'hidden'
        fakeEle.style.visibility = 'hidden'
        fakeEle.style.whiteSpace = 'nowrap'
        fakeEle.style.height = '0'
        fakeEle.style.width = 'fit-content'
        fakeEle.style.maxWidth = `${wrapperRef.current.clientWidth - 62}px`
        fakeEle.innerHTML = value.replace(/\s/g, '&' + 'nbsp;')
        document.body.appendChild(fakeEle)
        event.target.focus()
        event.target.style.width = `${fakeEle.clientWidth + 4}px`
        fakeEle.remove()
      } else {
        event.target.style.width = `4px`
      }
    }
  }

  const handleDropdownItemClick = (item: SelectedItemDropdown) => {
    if (!isReadOnly) {
      setSelectedItems((currentItems) => {
        const itemIndex = currentItems.findIndex(
          (currentItem) => currentItem.value.toString() === item.value,
        )
        if (itemIndex === -1) {
          currentItems.push(item)
        } else {
          currentItems.splice(itemIndex, 1)
        }

        return [...currentItems]
      })

      // const clickedItem = currentKeys.find((v) => v == key)
      // if (clickedItem) {
      //   v.delete(clickedItem)
      //   if (clickedItem == focusKey) {
      //     setFocusKey(Array.from(v).pop() ?? undefined)
      //   }
      // } else if (!removeOnly) {
      //   v.add(key)
      //   setFocusKey(key)
      // }
      // setCurrentKeys([...v])
      // onSelectionChange?.([...v])
      // inputRef.current?.focus()
    }
  }

  return (
    <StyledDropdownWrapper
      css={css}
      ref={refDOM}
      {...delegated}
      displayedValue={displayedValue}
      variant={variant}
    >
      <MultipleDropdownContext.Provider
        value={{
          open,
          focusKey: focusKey ?? '',
          selectedKeys: selectedKeys ?? [],
          defaultSelectedKeys,
          disabledKeys,
          searchValue: search,
          selectedItems,
          setSelectedItems,
          dropdownItemKeys,
          setDropdownItemKeys,
          onItemClick: handleDropdownItemClick,
        }}
      >
        {label && (
          <label onClick={handleOpen} htmlFor={id}>
            {props.label}
            {isRequired && <span>*</span>}
          </label>
        )}
        <div ref={refs.setReference} {...getReferenceProps}>
          <StyledDropdown
            className='dropdownContainer'
            isOpen={open}
            ref={wrapperRef}
            isErrored={!!isErrored}
            isDisabled={!!isDisabled}
            onClick={handleOpen}
          >
            <StyledSelectedItemWrapper className='selectedItemWrapper'>
              {/* {selectedNode.length === 0 &&
              search === '' &&
              !open &&
              !focused && <p className='placeholder'>{placeholder}</p>} */}
              {!isDisabled && variant == 'combobox' && (
                <input
                  id={id}
                  type='text'
                  ref={inputRef}
                  value={search}
                  onChange={handleInputChange}
                  onBlur={() => setFocused(false)}
                  onFocus={() => setFocused(true)}
                />
              )}
            </StyledSelectedItemWrapper>
            <div className='dropdown-icon'>{icon}</div>
          </StyledDropdown>
        </div>

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
                width: wrapperRef?.current?.clientWidth ?? '100%',
              }}
            >
              <MultipleDropdownList
                searchValue=''
                isLoading={isLoading}
                css={{
                  maxHeight: numberOfRows ? `${numberOfRows * 40}px` : '16rem',
                }}
              >
                {children}
              </MultipleDropdownList>
            </StyledPopover>
          </div>
        )}
      </MultipleDropdownContext.Provider>
    </StyledDropdownWrapper>
  )
})

export default MultipleDropdown as typeof MultipleDropdown & {
  Item: typeof MultipleDropdownNewItem
  Header: typeof MultipleDropdownHeader
  // Section: typeof DropdownSection
}
