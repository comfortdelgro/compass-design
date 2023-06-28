import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import {isEmpty} from 'lodash'
import React, {useCallback, useEffect, useMemo, useRef} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {DropdownContext} from './dropdown-new-context'
import DropdownNewItem from './dropdown-new-item'
import DropdownNewList from './dropdown-new-list'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownWrapper,
  StyledFlag,
  StyledIcon,
  StyledPopover,
  StyledSelect,
} from './dropdown-new.styles'

interface Props extends StyledComponentProps {
  isMultiple?: boolean
  defaultOpen?: boolean
  selectedKey?: React.Key
  defaultSelectedKey?: React.Key
  shouldDeselect?: boolean
  allowsCustomValue?: boolean
  type?: 'select' | 'combobox' | 'flag'
  prefix?: React.ReactNode
  icon?: React.ReactNode
  label?: React.ReactNode
  isLoading?: boolean
  autoFocus?: boolean
  isErrored?: boolean
  helperText?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  placeholder?: string
  errorMessage?: string
  numberOfRows?: number
  disabledKeys?: React.Key[]
  children?: React.ReactNode
  description?: React.ReactNode
  onBlur?: () => void
  onFocus?: () => void
  onLoadMore?: () => void
  onOpenChange?: (isOpen: boolean) => void
  onSelectionChange?: (key: React.Key) => void
}

export const Icon = () => (
  <StyledIcon width='16' height='16' viewBox='0 0 16 16'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='currentColor'
    />
  </StyledIcon>
)

export type DropdownProps = Props &
  DropdownVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  // ====================================== Define ======================================
  const {
    id = `cdg-element-${Math.random().toString(36).substring(2)}`,
    css,
    children,
    type = 'select',
    icon = <Icon />,
    placeholder,
    isMultiple = false,
    isErrored = false,
    isRequired = false,
    isReadOnly = false,
    isLoading = false,
    helperText,
    selectedKey,
    errorMessage,
    numberOfRows,
    disabledKeys = [],
    defaultSelectedKey,
    defaultOpen = false,
    isDisabled = false,
    shouldDeselect = false,
    allowsCustomValue = false,
    prefix = null,
    ...delegated
  } = props

  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const [currentKey, setCurrentKey] = React.useState<React.Key | undefined>(
    selectedKey || defaultSelectedKey,
  )
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])

  const buttonSelectRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // ====================================== FLOATING ======================================
  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])

  // ====================================== Logic ======================================

  const handleKeyDown = useCallback(() => {
    // Todo
  }, [])

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, handleKeyDown])

  const handleClickIcon = useCallback(() => {
    setOpen((v) => !v)
    inputRef.current?.focus()
  }, [])

  const handleInputFocus = useCallback(() => {
    setOpen(true)
  }, [])

  const headerElement = useMemo(() => {
    switch (type) {
      case 'select':
        return (
          <StyledSelect
            ref={refs.setReference}
            isEmpty={isEmpty(currentKey)}
            className='cdg-dropdown-input'
            {...getReferenceProps}
          >
            <button
              id={id}
              type='button'
              ref={buttonSelectRef}
              disabled={isDisabled}
              onClick={handleClickIcon}
            >
              {prefix}
              <span>{placeholder}</span>
              {icon}
            </button>
          </StyledSelect>
        )
      case 'combobox':
        return (
          <StyledComboBox
            isEmpty={isEmpty(currentKey)}
            ref={refs.setReference}
            className='cdg-dropdown-input'
            {...getReferenceProps}
          >
            <input
              id={id}
              ref={inputRef}
              disabled={isDisabled}
              placeholder={placeholder}
              //   onChange={onSearch}
              //   onBlur={onBlur}
              onClick={handleClickIcon}
            />
            <button
              type='button'
              tabIndex={-1}
              disabled={isDisabled}
              onClick={handleClickIcon}
            >
              {icon}
            </button>
          </StyledComboBox>
        )
      case 'flag':
        return (
          <StyledFlag
            ref={refs.setReference}
            isEmpty={isEmpty(currentKey)}
            className='cdg-dropdown-input'
            {...getReferenceProps}
          >
            {/* {choosenFlag && (
              <StyledFlagIcon>
                <Flag iso={choosenFlag['alpha-2']} />
              </StyledFlagIcon>
            )} */}
            <input
              id={id}
              ref={inputRef}
              disabled={isDisabled}
              placeholder={placeholder}
              //   onChange={onSearch}
              //   onBlur={onBlur}
              //   onFocus={onFocus}
              onClick={handleClickIcon}
            />
            <button
              //   ref={buttonRef}
              tabIndex={-1}
              //   disabled={isDisabled}
              onClick={handleClickIcon}
              type='button'
            >
              {icon}
            </button>
          </StyledFlag>
        )
      default:
        return (
          <StyledSelect ref={refs.setReference} {...getReferenceProps}>
            <button ref={buttonSelectRef} onClick={handleClickIcon}>
              Test
            </button>
          </StyledSelect>
        )
    }
  }, [open, type, id, handleClickIcon, handleInputFocus])

  const triggetWidth = useMemo(() => {
    switch (type) {
      case 'select':
        return buttonSelectRef?.current?.clientWidth ?? '100%'
      case 'combobox':
      case 'flag':
        return inputRef?.current?.clientWidth ?? '100%'
      default:
        return '100%'
    }
  }, [type, open])

  const handleDropdownItemClick = (key: string) => {
    setSelectedKeys([key])
    setOpen(false)
    // setSelectedKeys((oldSelectedKeys) => {
    //   const currentIndex = oldSelectedKeys.findIndex((item) => item === key)
    //   if (currentIndex === -1) {
    //     oldSelectedKeys.push(key)
    //   } else {
    //     oldSelectedKeys.splice(currentIndex, 1)
    //   }
    //   return oldSelectedKeys
    // })
  }

  return (
    <StyledDropdownWrapper className={`${open ? 'cdg-dropdown-opening' : ''}`}>
      <DropdownContext.Provider
        value={{
          selectedKeys,
          setSelectedKeys,
          onItemClick: handleDropdownItemClick,
        }}
      >
        {headerElement}
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
                width: triggetWidth,
              }}
            >
              <DropdownNewList>{children}</DropdownNewList>
            </StyledPopover>
          </div>
        )}
      </DropdownContext.Provider>
    </StyledDropdownWrapper>
  )
})

export default Select as typeof Select & {
  //   ComboBox: typeof DropdownComboBox
  //   Flag: typeof DropdownFlag
  //   Select: typeof DropdownSelect
  Item: typeof DropdownNewItem
  //   Section: typeof DropdownSection
  //   Header: typeof DropdownHeader
}
