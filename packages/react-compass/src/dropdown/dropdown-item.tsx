import React, {Key, useContext, useEffect, useMemo} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownContext} from './dropdown-context'
import {
  DropdownItemVariantProps,
  StyledColor,
  StyledContent,
  StyledItemIcon,
  StyledOption,
} from './dropdown.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  value?: Key
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  flagName?: string
  children: React.ReactNode
}

export type DropdownItemProps = Props &
  DropdownItemVariantProps &
  Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>

const DropdownItem = React.forwardRef<HTMLLIElement, DropdownItemProps>(
  (props, ref) => {
    const {
      children,
      value = '',
      flagName,
      type,
      rightIcon,
      leftIcon,
      rightColor,
      css = {},
      ...other
    } = props

    const {textValue, ...delegated} = other

    const {
      selectedItem,
      disabledKeys = [],
      searchValue,
      focusKey,
      selectedKey,
      setSelectedItem,
      setDropdownItemKeys,
      onItemClick,
    } = useContext(DropdownContext)

    const dropdownItemRef = useDOMRef<HTMLLIElement>(ref)

    const isSelected = useMemo(
      () => selectedItem?.value.toString() === value.toString(),
      [selectedItem, value],
    )

    const isFocused = useMemo(
      () => focusKey?.toString() === value.toString(),
      [focusKey, value],
    )

    const isDisabled = useMemo(
      () =>
        disabledKeys.findIndex(
          (disabledKey) => disabledKey.toString() === value.toString(),
        ) !== -1,
      [disabledKeys, value],
    )

    const canDisplayed = useMemo(() => {
      return (
        !searchValue ||
        textContent(children as React.ReactElement)
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      )
    }, [searchValue, children])

    useEffect(() => {
      if (!isDisabled) {
        setDropdownItemKeys?.((keys) => {
          const index = keys.findIndex(
            (keyItem) => keyItem.value.toString() === value.toString(),
          )
          if (index === -1) {
            keys.push({value, visibility: true})
          } else {
            keys[index] = {
              value,
              visibility: canDisplayed,
            }
          }

          return keys
        })
      }
    }, [value, isDisabled, canDisplayed])

    useEffect(() => {
      if (selectedKey && selectedKey.toString() === value.toString()) {
        setSelectedItem({
          value: value.toString(),
          displayValue: textValue || children,
        })
      }
    }, [selectedKey, value])

    useEffect(() => {
      if (isFocused || (isSelected && isFocused)) {
        setTimeout(() => {
          if (dropdownItemRef.current) {
            dropdownItemRef.current.scrollIntoView({block: 'nearest'})
          }
        }, 0)
      }
    }, [isFocused, isSelected])

    const handleItemClick = () => {
      if (isDisabled) {
        return
      }
      onItemClick({
        value: value.toString(),
        displayValue: textValue || children,
        flagName: flagName ?? '',
      })
    }

    return canDisplayed ? (
      <StyledOption
        css={css}
        isFocused={isFocused}
        isSelected={isSelected && !isFocused}
        isDisabled={isDisabled}
        onClick={handleItemClick}
        ref={dropdownItemRef}
        role='option'
        aria-selected={isSelected}
        {...delegated}
      >
        {leftIcon && <StyledItemIcon>{leftIcon}</StyledItemIcon>}
        <StyledContent>{children}</StyledContent>
        {type === 'icon' && rightIcon && (
          <StyledItemIcon>{rightIcon}</StyledItemIcon>
        )}
        {type === 'color' && rightColor && (
          <StyledColor css={{$$bg: rightColor}} />
        )}
      </StyledOption>
    ) : null
  },
)

export default DropdownItem
