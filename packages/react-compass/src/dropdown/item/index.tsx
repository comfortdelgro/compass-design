import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
export interface DropdownItemBase extends StyledComponentProps {
  key: React.Key
  textValue?: string
  variant?: 'none' | 'checkbox' | 'tick'
  children: React.ReactNode
  'aria-label'?: string
}
interface Props extends DropdownItemBase {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export type DropdownItemProps = Props

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownItem
