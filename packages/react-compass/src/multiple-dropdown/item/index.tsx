import React from 'react'
import {DropdownItemBase} from '../../dropdown/item'

export type DropdownItemProps = DropdownItemBase
=======
interface Props<T> {
  children: React.ReactNode | string
  key: React.Key
  title?: React.ReactNode
  textValue?: string
  'aria-label'?: string
  childItems?: Iterable<T>
  hasChildItems?: boolean
}

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownItem
