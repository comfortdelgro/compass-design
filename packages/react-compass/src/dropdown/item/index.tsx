import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'

interface Props extends StyledComponentProps {
  type?: 'icon' | 'color'
  rightColor?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode | string
  key: React.Key
  textValue?: string
  'aria-label'?: string
}

export type DropdownItemProps = Props

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownItem
