import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from '../styles/dropdown.module.css'
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box'
import Popover from './popover'
import {getDefaultValue, ListKeyboardDelegate, pickChilds} from './utils'

interface Props {
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  placeholder?: string
  numberOfRows?: number
  type?: 'heading' | 'color' | 'alignment'
  disabledKeys?: React.Key[]
  children?: React.ReactNode
  description?: React.ReactNode
  onBlur?: () => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
  selectedKey?: React.Key
  defaultSelectedKey?: React.Key
  shouldDeselect?: boolean
  onSelectionChange?: (key: React.Key) => void
  css?: CSS
}

export type DropdownProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const {
    css = {},
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    children,
    selectedKey,
    placeholder,
    type = 'heading',
    disabledKeys = [],
    defaultSelectedKey,
    isDisabled = false,
    shouldDeselect = false,
    className = '',
    ...htmlProps
  } = props

  // ====================================== STATE ======================================
  const [open, setOpen] = React.useState<boolean>(false)
  const [currentKey, setCurrentKey] = React.useState<React.Key | undefined>(
    defaultSelectedKey,
  )
  const [focusKey, setFocusKey] = React.useState<React.Key | undefined>(
    defaultSelectedKey,
  )

  // ====================================== REF ======================================
  const listBoxRef = React.useRef<HTMLUListElement>(null)
  // Select ref
  const selectRef = useDOMRef<HTMLElement>(ref)

  // ====================================== FLOATING ======================================
  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])

  // ====================================== CONST ======================================
  const collection = React.useMemo(
    () => pickChilds<DropdownItemProps>(children, DropdownItem),
    [children],
  )

  const selectedItem = collection.find((item) => {
    return item.key == currentKey
  })

  const delegate = React.useMemo(
    () => new ListKeyboardDelegate(collection, disabledKeys),
    [collection, disabledKeys],
  )

  // ====================================== EFFECT ======================================
  // map default value
  React.useEffect(() => {
    const newValue = getDefaultValue(selectedKey, defaultSelectedKey)
    setCurrentKey(newValue)
    setFocusKey(newValue)
  }, [defaultSelectedKey, selectedKey])

  React.useEffect(() => {
    props.onOpenChange?.(open)
    if (open) {
      selectRef.current?.focus()
    } else {
      selectRef.current?.blur()
    }
  }, [open, props, selectRef])

  React.useEffect(() => {
    if (currentKey !== undefined) {
      setFocusKey(currentKey)
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
    if (currentKey === key && shouldDeselect) {
      setCurrentKey(undefined)
      props.onSelectionChange?.('')
    } else {
      setCurrentKey(key)
      props.onSelectionChange?.(key)
    }
    setOpen(false)
  }

  const handleClickIcon = () => {
    setOpen((v) => !v)
  }

  const handleBlur = () => {
    setFocusKey(currentKey)
  }

  const handleFocus = () => {
    setFocusKey(currentKey)
  }

  const dropdownClasses = React.useMemo(() => {
    return [
      styles.rteDropdown,
      !selectedItem && styles.isEmpty,
      isDisabled && styles.isDisabled,
      className,
    ]
      .filter(Boolean)
      .join(' ')
  }, [className, isDisabled, selectedItem])

  // ====================================== RENDER ======================================
  return (
    <CssInjection css={css} childrenRef={selectRef}>
      <div
        {...htmlProps}
        {...getReferenceProps}
        ref={refs.setReference}
        className={dropdownClasses}
      >
        <button
          id={id}
          type='button'
          ref={selectRef as React.RefObject<HTMLButtonElement>}
          disabled={isDisabled}
          onClick={handleClickIcon}
        >
          <span>
            {selectedItem
              ? selectedItem.props.renderAs
                ? selectedItem.props.renderAs
                : selectedItem.props.children
              : placeholder}
          </span>
          <svg width='16' height='16' viewBox='0 0 16 16'>
            <path
              d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
              fill='currentColor'
            />
          </svg>
        </button>
        {collection && open && (
          <FloatingPortal>
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
                type={type}
                isEmpty={collection.length === 0}
                triggerRef={selectRef as React.RefObject<HTMLDivElement>}
                onBlur={handleBlur}
                onFocus={handleFocus}
                handleKeyDown={handleKeyDown}
              >
                <ListBox
                  type={type}
                  focusKey={focusKey}
                  currentKey={currentKey}
                  collection={collection}
                  listBoxRef={listBoxRef}
                  disabledKeys={disabledKeys}
                  onSelect={onSelect}
                />
              </Popover>
            </div>
          </FloatingPortal>
        )}
      </div>
    </CssInjection>
  )
}) as typeof Select & {
  Item: typeof DropdownItem
}

export default Select
