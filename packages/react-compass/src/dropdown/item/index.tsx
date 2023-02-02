import {Item} from '@react-stately/collections'
import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'

interface Props<T> extends StyledComponentProps {
  type?: 'icon' | 'color'
  rightColor?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode | string
  key: string
  title?: React.ReactNode
  textValue?: string
  'aria-label'?: string
  childItems?: Iterable<T>
  hasChildItems?: boolean
}

export type DropdownItemProps<T = object> = Props<T>

const DropdownItem: React.FC<DropdownItemProps> = ({children, ...props}) => (
  <Item {...props}>{children}</Item>
)

export default DropdownItem
