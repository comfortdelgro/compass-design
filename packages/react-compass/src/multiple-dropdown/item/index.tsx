import {Item} from '@react-stately/collections'
import React from 'react'

interface Props<T> {
  leftIcon?: React.ReactNode
  children: React.ReactNode | string
  key: string
  title?: React.ReactNode
  textValue?: string
  'aria-label'?: string
  childItems?: Iterable<T>
  hasChildItems?: boolean
}

export type MultipleDropdownItemProps<T = object> = Props<T>

const MultipleDropdownItem: React.FC<MultipleDropdownItemProps> = ({
  children,
  key,
}) => <Item key={key}>{children}</Item>

export default MultipleDropdownItem
