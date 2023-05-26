import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React, {Key} from 'react'
import {StyledHelperText} from '../dropdown/dropdown.styles'
import DropdownHeader from '../dropdown/header'
import DropdownItem from '../dropdown/item'
import Popover from '../dropdown/popover'
import DropdownSection from '../dropdown/section'
import {
  DropdownBase,
  Icon,
  ListKeyboardDelegate,
  pickChilds,
  pickSections,
  textContent,
} from '../dropdown/utils'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownItemProps} from './item'
import ListBox from './list-box'
import {
  DropdownVariantProps,
  StyledDropdown,
  StyledDropdownWrapper,
  StyledSelectedItem,
  StyledSelectedItemWrapper,
} from './multiple-dropdown.styles'
import RowCalculator from './rowCalculator'
import {getDefaulValues, XIcon} from './utils'

interface Props extends DropdownBase {
  selectedKeys?: React.Key[]
  defaultSelectedKeys?: React.Key[]
  onSelectionChange?: (key: React.Key[]) => void
}

export type MultipleDropdownProps = Props &
  DropdownVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MultipleDropdown = React.forwardRef<
  HTMLDivElement,
  MultipleDropdownProps
>((props, r) => {
  const {
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
    icon = <Icon />,
    disabledKeys = [],
    isLoading = false,
    defaultSelectedKeys = [],
    onLoadMore = () => {
      //Load more
    },
    onBlur = () => {
      //
    },
    onFocus = () => {
      //
    },
    ...delegated
  } = props
  // ====================================== STATE ======================================
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [isSearching, setIsSearching] = React.useState(false)
  const [currentKeys, setCurrentKeys] = React.useState<React.Key[]>(
    getDefaulValues(defaultSelectedKeys, selectedKeys),
  )
  const [focusKey, setFocusKey] = React.useState<React.Key | undefined>()

  // ====================================== REF ======================================
  const ref = useDOMRef<HTMLDivElement>(r)
  const wrapperRef = useDOMRef<HTMLDivElement>(null)
  const inputRef = useDOMRef<HTMLInputElement>(null)
  const listBoxRef = React.useRef<HTMLUListElement>(null)
  const visualizeList = React.useRef<HTMLDivElement>(null)
  const visualizeULList = React.useRef<HTMLUListElement>(null)

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

  const delegate = React.useMemo(
    () => new ListKeyboardDelegate(rawCollection, disabledKeys),
    [rawCollection, disabledKeys],
  )

  const selectedNode = React.useMemo(() => {
    const t: Array<{
      key: Key
      rendered: React.ReactNode
    }> = []
    if (rawCollection.length > 0 && currentKeys && currentKeys.length > 0) {
      currentKeys.forEach((selectedKey) => {
        const item = rawCollection.find((item) => {
          return item.key === selectedKey
        })
        t.push({key: selectedKey, rendered: item?.props.children})
      })
    }
    return t
  }, [currentKeys, rawCollection, currentKeys.length])

  // ====================================== EFFECT ======================================
  React.useEffect(() => {
    setCurrentKeys(getDefaulValues(defaultSelectedKeys, selectedKeys))
    // if (
    //   defaultSelectedKeys &&
    //   !selectedKeys &&
    //   defaultSelectedKeys.length > 0
    // ) {
    //   setCurrentKeys(defaultSelectedKeys)
    // }
    // if (selectedKeys && selectedKeys.length > 0) {
    //   setCurrentKeys(selectedKeys)
    // }
  }, [JSON.stringify(selectedKeys), JSON.stringify(defaultSelectedKeys)])

  // React.useEffect(() => {
  //   if (currentKeys.length > 0) {
  //     props.onSelectionChange?.(currentKeys)
  //   }
  // }, [currentKeys])

  React.useEffect(() => {
    if (!isOpen && defaultOpen) {
      setOpen(defaultOpen)
    }
    if (isOpen) {
      setOpen(isOpen)
    }
  }, [isOpen])

  React.useEffect(() => {
    setFocusKey([...currentKeys].pop())
    props.onOpenChange?.(open)
    if (open) {
      inputRef.current?.focus()
    } else {
      setIsSearching(false)
      inputRef.current?.blur()
      setIsSearching(false)
    }
  }, [open])

  // ====================================== CALLBACK ======================================
  const removeItem = (key: Key) => {
    const v = new Set(currentKeys)
    if (currentKeys.includes(key)) {
      v.delete(key)
      setCurrentKeys([...v])
      props.onSelectionChange?.([...v])
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (wrapperRef.current) {
      const string = e.target.value
      setIsSearching(true)
      setSearch(string)
      if (string !== '') {
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
        fakeEle.innerHTML = string.replace(/\s/g, '&' + 'nbsp;')
        document.body.appendChild(fakeEle)
        e.target.focus()
        e.target.style.width = `${fakeEle.clientWidth + 4}px`
        fakeEle.remove()
      } else {
        e.target.style.width = `4px`
      }
    }
  }

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

  const onSelect = (key: React.Key) => {
    if (!isReadOnly) {
      const v = new Set(currentKeys)
      if (currentKeys.includes(key)) {
        v.delete(key)
      } else {
        v.add(key)
      }
      setCurrentKeys([...v])
      props.onSelectionChange?.([...v])
      setFocusKey(key)
    }
  }

  const onHover = (key: React.Key | null) => {
    if (key) {
      setFocusKey(key)
    }
  }

  const handleOpen = () => {
    if (!isDisabled) {
      setOpen(true)
    }
  }

  // ====================================== RENDER ======================================
  return (
    <StyledDropdownWrapper css={css} ref={ref} {...delegated}>
      {props.label && (
        <label onClick={handleOpen}>
          {props.label}
          {isRequired && <span>*</span>}
        </label>
      )}
      <div ref={refs.setReference} {...getReferenceProps}>
        <StyledDropdown
          ref={wrapperRef}
          isErrored={!!isErrored}
          isDisabled={!!isDisabled}
          onClick={handleOpen}
        >
          <StyledSelectedItemWrapper>
            {selectedNode.length === 0 && search === '' && !open && (
              <p>{props.placeholder}</p>
            )}
            {selectedNode.length > 0 &&
              selectedNode.map((item) => {
                const isHideXIcon =
                  isDisabled || disabledKeys.includes(item.key)
                return (
                  <StyledSelectedItem
                    key={item.key}
                    style={{cursor: isDisabled ? 'not-allowed' : 'pointer'}}
                  >
                    <div>{item.rendered}</div>
                    {isHideXIcon ? (
                      <></>
                    ) : (
                      <div
                        onClick={() => {
                          if (
                            !isDisabled &&
                            ![...disabledKeys].includes(item.key)
                          ) {
                            removeItem(item.key)
                          }
                        }}
                      >
                        <XIcon />
                      </div>
                    )}
                  </StyledSelectedItem>
                )
              })}
            {!isDisabled && (
              <input
                type='text'
                ref={inputRef}
                value={search}
                onChange={onInputChange}
              />
            )}
          </StyledSelectedItemWrapper>
          <div className='dropdown-icon'>{icon}</div>
        </StyledDropdown>
      </div>

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
            isEmpty={collection.length === 0}
            visualizeRef={visualizeULList}
            triggerRef={wrapperRef}
            onBlur={onBlur}
            onFocus={onFocus}
            handleKeyDown={handleKeyDown}
          >
            <ListBox
              focusKey={focusKey}
              isLoading={isLoading}
              collection={collection}
              rootChildren={children}
              listBoxRef={listBoxRef}
              currentKeys={currentKeys}
              disabledKeys={disabledKeys}
              sectionCollection={sectionCollection}
              onHover={onHover}
              onSelect={onSelect}
              onLoadMore={onLoadMore}
            />
          </Popover>
        </div>
      )}
      <RowCalculator
        ref={visualizeList}
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

export default MultipleDropdown as typeof MultipleDropdown & {
  Item: typeof DropdownItem
  Header: typeof DropdownHeader
  Section: typeof DropdownSection
}
