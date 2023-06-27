import React, {useContext} from 'react'
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

  const {onItemClick} = useContext(DropdownContext)

  const handleItemClick = () => {
    onItemClick(value.toString())
  }

  return <StyledOption onClick={handleItemClick}>{children}</StyledOption>
}

export default DropdownNewItem
