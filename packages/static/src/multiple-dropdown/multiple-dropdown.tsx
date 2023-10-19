import React, {useCallback, useEffect, useMemo, useState} from 'react'
import Chip from '../chip'
import Popover from '../popover'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownItemKey,
  MultipleDropdownContext,
  SelectedItemDropdown,
} from './multiple-dropdown-context'
import MultipleDropdownItem, {
  MultipleDropdownItemProps,
} from './multiple-dropdown-item'
import MultipleDropdownList from './multiple-dropdown-list'
import MultipleDropdownHeader from './multiple-dropdown.header'
import MultipleDropdownSection, {
  DropdownSectionProps,
} from './multiple-dropdown.section'
import styles from './styles/multiple-dropdown.module.css'
import {
  getFirstItem,
  getItemAbove,
  getItemBelow,
  getItemByKey,
  getLastItem,
  textContent,
} from './utils'

interface Props {
  erroredKeys?: Array<string | number>
  selectedKeys?: Array<string | number>
  defaultSelectedKeys?: Array<string | number>
  erroredValues?: Array<string | number>
  values?: Array<string | number>
  defaultValues?: Array<string | number>
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
  disabledValues?: Array<string | number>
  disableClearable?: boolean
  children?: React.ReactNode
  description?: React.ReactNode
  noDataMessage?: string
  isLoadingMore?: boolean
  popoverCSS?: React.CSSProperties
  css?: unknown
  onBlur?: () => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
  onSelectionChange?: (key: Array<string | number>) => void
  onValuesChange?: (key: Array<string | number>) => void
}

export type MultipleDropdownProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const Icon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    className={`${styles.dropdownButtonIcon} cdg-dropdown-button-icon`}
  >
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </svg>
)

const MultipleDropdown = React.forwardRef<
  HTMLDivElement,
  MultipleDropdownProps
>((props, ref) => {
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    css = {},
    popoverCSS = {},
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
    values,
    numberOfRows,
    displayedValue = 'chip',
    icon = <Icon />,
    disabledKeys = [],
    disabledValues = [],
    isLoading = false,
    variant = 'combobox',
    customDisplayValue,
    defaultSelectedKeys,
    defaultValues,
    label,
    placeholder,
    erroredKeys,
    erroredValues,
    noDataMessage = '',
    isLoadingMore = false,
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
    onValuesChange = () => {
      //
    },
    onOpenChange = () => {
      //
    },
    onKeyDown = () => {
      //
    },
    ...delegated
  } = props
  // ====================================== STATE ======================================
  const [open, setOpen] = React.useState(isOpen ?? defaultOpen ?? false)
  const [isPositioned, setIsPositioned] = React.useState(false)
  const [focused, setFocused] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [focusKey, setFocusKey] = React.useState<string | number | undefined>()
  const [selectedSectionIndexes, setSelectedSectionIndexes] = React.useState<
    number[]
  >([])
  const [selectedItems, setSelectedItems] = React.useState<
    SelectedItemDropdown[]
  >([])
  const [dropdownItemKeys, setDropdownItemKeys] = React.useState<
    DropdownItemKey[]
  >([])
  const [clonedChildren, setClonedChildren] =
    React.useState<React.ReactNode>(null)
  const [triggerElementWidth, setTriggerElementWidth] = useState<
    string | number
  >('100%')

  // ====================================== REF ======================================
  const refDOM = useDOMRef<HTMLDivElement>(ref)
  const wrapperRef = useDOMRef<HTMLDivElement>(null)
  const inputRef = useDOMRef<HTMLInputElement>(null)

  const openStateInitialChangedRef = React.useRef(false)

  const dropdownDisabledKeys = React.useMemo(
    () => (disabledValues.length ? disabledValues : disabledKeys),
    [disabledValues, disabledKeys],
  )
  const defaultDropdownValues = React.useMemo(
    () => (defaultValues?.length ? defaultValues : defaultSelectedKeys),
    [defaultValues, defaultSelectedKeys],
  )
  const dropdownValues = React.useMemo(
    () => (values?.length ? values : selectedKeys),
    [values, selectedKeys],
  )
  const isUncontrolledComponent = React.useMemo(
    () =>
      (defaultDropdownValues && defaultDropdownValues?.length > 0) ||
      (!defaultDropdownValues && !selectedKeys),
    [defaultDropdownValues, selectedKeys],
  )
  const errorValues = React.useMemo(
    () => (erroredValues?.length ? erroredValues : erroredKeys),
    [erroredValues, erroredKeys],
  )

  // clone children to assign value prop if not exists. the value would be equal to the key prop
  // This is to support the legacy code where users don't pass value prop and use key prop instead
  const recursivelyAddValueProp = (
    children: React.ReactNode,
  ): React.ReactNode => {
    if (typeof children === 'string') return children

    let sectionIndex = -1
    return React.Children.map(children, (child) => {
      if (!child) return child

      if (React.isValidElement(child)) {
        if (child.type === MultipleDropdownItem) {
          const childWithProps =
            child as React.ReactElement<MultipleDropdownItemProps>
          if (!('value' in childWithProps.props)) {
            return React.cloneElement(childWithProps, {
              value: `${child.key}` || '',
            })
          }
        }

        const childProps = child as React.ReactElement<
          Pick<DropdownSectionProps, 'index' | 'children'>
        >
        if (childProps.props.children) {
          const newProps: Pick<DropdownSectionProps, 'index' | 'children'> = {
            children: recursivelyAddValueProp(childProps.props.children),
          }
          //   // Set index for MultipleDropdownSection to handle selected section by index
          if (childProps.type === MultipleDropdownSection) {
            sectionIndex++
            newProps.index = sectionIndex
          }
          return React.cloneElement(childProps, {...newProps})
        }
      }

      return child
    })
  }

  useEffect(() => {
    if (open) {
      setTriggerElementWidth(
        popoverCSS.width ?? wrapperRef?.current?.clientWidth ?? '100%',
      )
    }
  }, [open, popoverCSS.width, wrapperRef])

  useEffect(() => {
    setClonedChildren(recursivelyAddValueProp(children))
  }, [children])

  React.useEffect(() => {
    if (!openStateInitialChangedRef.current) {
      openStateInitialChangedRef.current = true
      return
    }
    setOpen(!!isOpen)
    if (!isOpen) {
      setFocusKey('')
    }
  }, [isOpen])

  React.useEffect(() => {
    if (!open) {
      setFocusKey('')
    }
  }, [open])

  /**
   * Fill selected data and run only on component initialization
   */
  React.useEffect(() => {
    if (
      !clonedChildren ||
      !(
        (dropdownValues && dropdownValues?.length > 0) ||
        (defaultDropdownValues && defaultDropdownValues.length > 0)
      )
    ) {
      setSelectedItems([])
      return
    }

    const currentSelectedKeys = defaultDropdownValues ?? dropdownValues ?? []

    let currentFocusKey = ''

    const newSelectedItems: SelectedItemDropdown[] = []

    // Find the item with the specified value
    for (const currentSelectedKey of currentSelectedKeys) {
      const item = getItemByKey(currentSelectedKey, clonedChildren)

      if (item) {
        newSelectedItems.push({
          value: currentSelectedKey.toString(),
          displayValue: item as React.ReactNode,
        })
        currentFocusKey = currentSelectedKey.toString()
      }
    }
    setSelectedItems(newSelectedItems)
    setFocusKey((oldFocusKey) => {
      return oldFocusKey ?? currentFocusKey
    })
  }, [clonedChildren, dropdownValues, defaultDropdownValues])

  const handleDropdownItemClick = React.useCallback(
    (item: SelectedItemDropdown) => {
      if (!isReadOnly) {
        const newSelectedItems = [...selectedItems]
        const itemIndex = newSelectedItems.findIndex(
          (currentItem) =>
            currentItem.value.toString() === item.value.toString(),
        )
        if (itemIndex === -1) {
          newSelectedItems.push(item)
        } else {
          newSelectedItems.splice(itemIndex, 1)
        }
        isUncontrolledComponent && setSelectedItems([...newSelectedItems])
        const selectedValues = newSelectedItems.map((item) => item.value)
        onSelectionChange?.(selectedValues)
        onValuesChange?.(selectedValues)
        inputRef.current?.focus()
      }
    },
    [
      isReadOnly,
      selectedItems,
      isUncontrolledComponent,
      onSelectionChange,
      onValuesChange,
    ],
  )

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown(event)
      if (!open) {
        return
      }
      const currentFocusKey =
        (focusKey
          ? focusKey
          : selectedItems.length
          ? selectedItems[0]?.value
          : '') ?? ''

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
            const itemKey =
              nextKey?.props.value ??
              nextKey?.key?.toString().replace('.$', '') ??
              ''
            if (itemKey) {
              setFocusKey(itemKey)
            }
          } else {
            setFocusKey(
              getLastItem(
                clonedChildren,
                dropdownItemKeys,
              )?.props.value?.toString() ?? '',
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
            const itemKey =
              prevKey?.props.value ??
              prevKey?.key?.toString().replace('.$', '') ??
              ''

            if (itemKey) {
              setFocusKey(itemKey)
            }
          } else {
            setFocusKey(
              getFirstItem(
                clonedChildren,
                dropdownItemKeys,
              )?.props.value?.toString() ?? '',
            )
          }
          break
        case 'Enter':
          event.preventDefault()
          setOpen(true)
          if (currentFocusKey) {
            const focusedItem = getItemByKey(currentFocusKey, clonedChildren)
            if (focusedItem) {
              handleDropdownItemClick({
                value: focusedItem.props.value?.toString() || '',
                displayValue:
                  focusedItem.props.textValue || focusedItem.props.children,
              })
            }
          }
          break
        case 'Escape':
        case 'Tab':
          event.preventDefault()
          setOpen(false)
          onOpenChange(false)
          break
      }
    },
    [
      open,
      focusKey,
      clonedChildren,
      selectedItems,
      dropdownItemKeys,
      handleDropdownItemClick,
      onOpenChange,
      onKeyDown,
    ],
  )

  const handleOpen = () => {
    if (!isDisabled) {
      setOpen(true)
      onOpenChange(true)
      inputRef.current?.focus()
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (wrapperRef.current) {
      const value = event.target.value
      setSearch(value)
      setOpen(true)
      onOpenChange(true)
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

  const convertSelectedNodeToString = () => {
    const array = selectedItems.map((v) =>
      textContent(v.displayValue as React.ReactElement),
    )
    if (array.length > 0) {
      return <>{array.join(', ')}</>
    }
    return ''
  }

  const handleCloseChipClick = useCallback(
    (selectedItem: SelectedItemDropdown) =>
      (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()
        handleDropdownItemClick(selectedItem)
      },
    [handleDropdownItemClick],
  )

  const checkIsError = useCallback(
    (value: string) => {
      return !!errorValues?.some(
        (erroredKey) => erroredKey.toString() === value,
      )
    },
    [errorValues],
  )

  const handleDropdownSectionClick = (
    items: SelectedItemDropdown[],
    checking: boolean,
    _id: number | string,
    index: number,
  ) => {
    if (index === -1) return
    const newSelectedItems = [...selectedItems]
    items.forEach((item) => {
      if (!isReadOnly) {
        const itemIndex = newSelectedItems.findIndex(
          (currentItem) =>
            currentItem.value.toString() === item.value.toString(),
        )
        if (itemIndex === -1) {
          if (checking) {
            newSelectedItems.push(item)
          }
        } else {
          if (!checking) {
            newSelectedItems.splice(itemIndex, 1)
          }
        }
      }
    })
    const sectionIdsSet = new Set(selectedSectionIndexes)
    if (checking) {
      sectionIdsSet.add(index)
    } else {
      sectionIdsSet.delete(index)
    }
    setSelectedSectionIndexes([...sectionIdsSet])
    isUncontrolledComponent && setSelectedItems([...newSelectedItems])
    const selectedValues = newSelectedItems.map((item) => item.value)
    onSelectionChange?.(selectedValues)
    onValuesChange?.(selectedValues)
    inputRef.current?.focus()
  }

  const handleClosePopover = useCallback(() => {
    setOpen(false)
  }, [])

  const handleKeydownInput = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!open) {
        event.stopPropagation()
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
    [onOpenChange],
  )

  const handleDropdownHeaderClick = () => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const handlePositionedChange = useCallback((isPositioned: boolean) => {
    setIsPositioned(isPositioned)
  }, [])

  const dropdownClassName = useMemo(() => {
    let className = `dropdownContainer ${styles.multipleDropdownControl}`
    if (open) {
      className += ` ${styles.multipleDropdownControlIsOpen}`
    }
    if (isErrored) {
      className += ` ${styles.multipleDropdownControlIsErrored}`
    }
    if (isDisabled) {
      className += ` ${styles.multipleDropdownControlIsDisabled}`
    }

    return className
  }, [isDisabled, isErrored, open])

  const dropdownWrapperClassName = useMemo(() => {
    let className = `cdg-multiple-dropdown-wrapper ${styles.multipleDropdownWrapper}`
    if (displayedValue === 'string') {
      className += ` ${styles.displayedValueString}`
    } else if (displayedValue === 'chip') {
      className += ` ${styles.displayedValueChip}`
    }
    if (variant === 'select') {
      className += ` ${styles.variantSelect}`
    } else if (variant === 'combobox') {
      className += ` ${styles.variantCombobox}`
    }

    return className
  }, [displayedValue, variant])

  return (
    <CssInjection css={css} childrenRef={refDOM}>
      <div
        className={dropdownWrapperClassName}
        ref={refDOM}
        onKeyDown={handleKeyDown}
        {...delegated}
      >
        <MultipleDropdownContext.Provider
          value={{
            isLoadingMore,
            open,
            focusKey: focusKey ?? '',
            selectedKeys: dropdownValues ?? [],
            defaultSelectedKeys: defaultDropdownValues ?? [],
            disabledKeys: dropdownDisabledKeys,
            searchValue: search,
            selectedItems,
            labelId: `${id}-label`,
            setSelectedItems,
            dropdownItemKeys,
            setDropdownItemKeys,
            selectedSectionIndexes,
            setSelectedSectionIndexes,
            onItemClick: handleDropdownItemClick,
            onSectionClick: handleDropdownSectionClick,
            onHeaderClick: handleDropdownHeaderClick,
            isPositioned,
          }}
        >
          {label && (
            <label onClick={handleOpen} htmlFor={id} id={`${id}-label`}>
              {label}
              {isRequired && <span>*</span>}
            </label>
          )}
          <Popover
            isOpen={open}
            onPositionedChange={handlePositionedChange}
            anchor={
              <div
                className={dropdownClassName}
                ref={wrapperRef}
                onClick={handleOpen}
                onBlur={onBlur}
                onFocus={onFocus}
                role='button'
              >
                <div
                  className={`${styles.multipleDropdownSelectedItemWrapper} cdg-selectedItemWrapper`}
                >
                  {selectedItems.length === 0 &&
                    search === '' &&
                    !open &&
                    !focused && (
                      <p
                        className={`${styles.placeholderSelectedItemWrapper} cdg-placeholder`}
                      >
                        {placeholder}
                      </p>
                    )}
                  {displayedValue === 'chip' &&
                    selectedItems.length > 0 &&
                    selectedItems.map((selectedItem) => (
                      <Chip
                        key={selectedItem.value}
                        hasCloseButton={
                          dropdownDisabledKeys.findIndex(
                            (item) =>
                              item.toString() === selectedItem.value.toString(),
                          ) === -1
                        }
                        onCloseClick={handleCloseChipClick(selectedItem)}
                        isErrored={checkIsError(selectedItem.value.toString())}
                      >
                        {selectedItem.displayValue instanceof Array
                          ? selectedItem.displayValue
                          : textContent(
                              selectedItem.displayValue as React.ReactElement,
                            )}
                      </Chip>
                    ))}
                  {displayedValue === 'string' && selectedItems.length > 0 ? (
                    <div className={`${styles.itemListString}`}>
                      {customDisplayValue ?? convertSelectedNodeToString()}
                    </div>
                  ) : null}
                  {!isDisabled && variant === 'combobox' && (
                    <input
                      id={id}
                      type='text'
                      ref={inputRef}
                      value={search}
                      onKeyDown={handleKeydownInput}
                      onChange={handleInputChange}
                      onBlur={() => setFocused(false)}
                      onFocus={() => setFocused(true)}
                      aria-autocomplete='list'
                      role='combobox'
                      aria-required={isRequired}
                      aria-invalid={isErrored}
                      aria-expanded={open}
                    />
                  )}
                </div>
                <div
                  className={`${styles.multipleDropdownControlIcon} dropdown-icon`}
                >
                  {icon}
                </div>
              </div>
            }
            css={{width: '100%'}}
            direction='bottom-left'
            onClose={handleClosePopover}
          >
            <div
              className={`${styles.dropdownPopover}`}
              onClick={handleDropdownHeaderClick}
              style={{
                ...popoverCSS,
                width: popoverCSS.width ?? triggerElementWidth,
              }}
            >
              <MultipleDropdownList
                searchValue=''
                isLoading={isLoading}
                css={{
                  maxHeight: numberOfRows ? `${numberOfRows * 40}px` : '16rem',
                }}
                onLoadMore={onLoadMore}
                noDataMessage={noDataMessage}
              >
                {clonedChildren}
              </MultipleDropdownList>
            </div>
          </Popover>
        </MultipleDropdownContext.Provider>
        {isErrored && errorMessage && (
          <div
            className={`${styles.dropdownHelperText} ${
              isErrored ? styles.dropdownHelperIsErrored : ''
            }`}
          >
            {errorMessage}
          </div>
        )}
        {helperText && (
          <div className={`${styles.dropdownHelperText}`}>{helperText}</div>
        )}
      </div>
    </CssInjection>
  )
})

export default MultipleDropdown as typeof MultipleDropdown & {
  Item: typeof MultipleDropdownItem
  Header: typeof MultipleDropdownHeader
  Section: typeof MultipleDropdownSection
}
