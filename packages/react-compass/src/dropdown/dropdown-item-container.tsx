import React, {Key} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import DropdownItem from './dropdown-item'
import DropdownItemLegacy from './dropdown-item-legacy'
import {DropdownItemVariantProps} from './dropdown.styles'

interface Props extends StyledComponentProps {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  value: Key
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  flagName?: string
  children: React.ReactNode
}

export type DropdownItemProps = Props &
  DropdownItemVariantProps &
  Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>

const DropdownItemContainer = React.forwardRef<
  HTMLLIElement,
  DropdownItemProps
>((props, ref) => {
  if (props?.value) {
    return <DropdownItem {...props} ref={ref} />
  } else {
    return <DropdownItemLegacy {...props} ref={ref} />
  }
})

export default DropdownItemContainer
