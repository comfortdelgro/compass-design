import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledOption} from './dropdown-new.styles'

interface Props extends StyledComponentProps {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  key: React.Key
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  children: React.ReactNode
  'aria-label'?: string
}

export type DropdownItemProps = Props

const DropdownNewItem: React.FC<DropdownItemProps> = (
  props: DropdownItemProps,
) => {
  return <StyledOption>{props.children}</StyledOption>
}

export default DropdownNewItem
