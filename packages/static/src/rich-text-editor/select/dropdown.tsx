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
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from '../styles/dropdown.module.css'
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box'
import Popover from './popover'
import {getDefaultValue, Icon, ListKeyboardDelegate, pickChilds} from './utils'

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
  css?: unknown
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
          <Icon />
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
})

export default Select as typeof Select & {
  Item: typeof DropdownItem
}
