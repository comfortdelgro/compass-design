import React, {useContext, useEffect, useMemo, useRef} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {DropdownContext} from './dropdown-new-context'
import {StyledOption} from './dropdown-new.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  value: string | number
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  children: React.ReactNode
}

export type DropdownItemProps = Props

const DropdownNewItem: React.FC<DropdownItemProps> = (
  props: DropdownItemProps,
) => {
  const {children, value} = props
  const {
    selectedKeys,
    disabledKeys = [],
    searchValue,
    open,
    selectedKey,
    setSelectedKeys,
    defaultSelectedKey,
    onItemClick,
  } = useContext(DropdownContext)

  const ref = useRef<HTMLLIElement>(null)

  const isSeleted = useMemo(
    () =>
      selectedKeys.findIndex((item) => item.value === value.toString()) !== -1,
    [selectedKeys, value],
  )

  const isDisabled = useMemo(
    () =>
      disabledKeys.findIndex(
        (disabledKey) => disabledKey.toString() === value.toString(),
      ) !== -1,
    [disabledKeys, value],
  )

  const canDisplayed = useMemo(
    () =>
      !searchValue ||
      textContent(children as React.ReactElement)
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()),
    [searchValue, children],
  )

  useEffect(() => {
    if (selectedKey && selectedKey.toString() === value.toString()) {
      setSelectedKeys([{value: value.toString(), displayValue: children}])
      if (ref.current) {
        ref.current.scrollIntoView({inline: 'end'})
      }
    }
  }, [selectedKey, value])

  useEffect(() => {
    if (
      defaultSelectedKey &&
      defaultSelectedKey.toString() === value.toString()
    ) {
      setSelectedKeys([{value: value.toString(), displayValue: children}])
      if (ref.current) {
        ref.current.scrollIntoView({inline: 'end'})
      }
    }
  }, [defaultSelectedKey, value])

  useEffect(() => {
    if (open && isSeleted && ref.current) {
      ref.current.scrollIntoView({inline: 'end'})
    }
  }, [open, isSeleted])

  const handleItemClick = () => {
    if (isDisabled) {
      return
    }
    onItemClick({value: value.toString(), displayValue: children})
  }

  return canDisplayed ? (
    <StyledOption
      isSelected={isSeleted}
      isDisabled={isDisabled}
      onClick={handleItemClick}
      ref={ref}
    >
      {children}
    </StyledOption>
  ) : null
}

export default DropdownNewItem
