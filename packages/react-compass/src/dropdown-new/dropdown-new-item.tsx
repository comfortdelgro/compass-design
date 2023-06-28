import React, {useContext, useMemo} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {DropdownContext} from './dropdown-new-context'
import {StyledOption} from './dropdown-new.styles'

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

  const {selectedKeys, onItemClick} = useContext(DropdownContext)

  const isSeleted = useMemo(
    () => selectedKeys.includes(value.toString()),
    [selectedKeys, value],
  )

  const handleItemClick = () => {
    onItemClick(value.toString())
  }

  return (
    <StyledOption isSelected={isSeleted} onClick={handleItemClick}>
      {children}
    </StyledOption>
  )
}

export default DropdownNewItem
