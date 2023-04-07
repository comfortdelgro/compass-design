import React from 'react'
import {DropdownItemBase} from '../../dropdown/item'

export type DropdownItemProps = DropdownItemBase

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownItem
