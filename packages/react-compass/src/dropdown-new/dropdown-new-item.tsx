import React, {useContext, useEffect, useMemo, useRef} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {DropdownContext} from './dropdown-new-context'
import {
  StyledColor,
  StyledContent,
  StyledFlagItem,
  StyledItemIcon,
  StyledOption,
} from './dropdown-new.styles'
import {Flag} from './flags'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  value: string | number
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  flagName?: string
  children: React.ReactNode
}

export type DropdownItemProps = Props

const DropdownNewItem: React.FC<DropdownItemProps> = (
  props: DropdownItemProps,
) => {
  const {children, value, flagName, type, rightIcon, leftIcon, rightColor} =
    props
  const {
    selectedKeys,
    disabledKeys = [],
    searchValue,
    open,
    focusKey,
    selectedKey,
    setSelectedKeys,
    setDropdownItemKeys,
    onItemClick,
  } = useContext(DropdownContext)

  const ref = useRef<HTMLLIElement>(null)

  const isSeleted = useMemo(
    () =>
      selectedKeys.findIndex((item) => item.value === value.toString()) !== -1,
    [selectedKeys, value],
  )

  const isFocused = useMemo(
    () => focusKey === value.toString(),
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
        const index = keys.findIndex((keyItem) => keyItem.value === value)
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
    if (focusKey && focusKey.toString() === value.toString()) {
      if (ref.current) {
        ref.current.scrollIntoView({inline: 'end'})
      }
    }
  }, [focusKey, value])

  useEffect(() => {
    if (selectedKey && selectedKey.toString() === value.toString()) {
      setSelectedKeys([{value: value.toString(), displayValue: children}])
      if (ref.current) {
        ref.current.scrollIntoView({inline: 'end'})
      }
    }
  }, [selectedKey, value])

  useEffect(() => {
    if (open && isSeleted && ref.current) {
      ref.current.scrollIntoView({inline: 'end'})
    }
  }, [open, isSeleted])

  const handleItemClick = () => {
    if (isDisabled) {
      return
    }
    onItemClick({
      value: value.toString(),
      displayValue: children,
      flagName: flagName ?? '',
    })
  }

  return canDisplayed ? (
    <StyledOption
      isFocused={isFocused}
      isSelected={isSeleted}
      isDisabled={isDisabled}
      onClick={handleItemClick}
      ref={ref}
    >
      {flagName && (
        <StyledFlagItem>
          <Flag iso={flagName} />
        </StyledFlagItem>
      )}
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
}

export default DropdownNewItem
