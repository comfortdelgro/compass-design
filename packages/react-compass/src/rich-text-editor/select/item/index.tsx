import React from 'react'
import {CSS} from '../../../utils/objectToCss'
export interface Props {
  key: React.Key
  renderAs?: React.ReactNode
  children: React.ReactNode
  'aria-label'?: string
  css?: CSS
  className?: string
}

export type DropdownItemProps = Props

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownItem
