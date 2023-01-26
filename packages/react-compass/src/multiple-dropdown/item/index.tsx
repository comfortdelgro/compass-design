import {Item} from '@react-stately/collections'
import React from 'react'

interface Props {
  leftIcon?: React.ReactNode
  children: string
  key: string
}

export type MultipleDropdownItemProps = Props

const MultipleDropdownItem: React.FC<MultipleDropdownItemProps> = ({
  children,
  key,
}) => <Item key={key}>{children}</Item>

export default MultipleDropdownItem
