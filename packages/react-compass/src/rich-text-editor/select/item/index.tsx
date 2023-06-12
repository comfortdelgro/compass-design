import React from 'react'
import {StyledComponentProps} from '../../../utils/stitches.types'
export interface Props extends StyledComponentProps {
  key: React.Key
  renderAs?: React.ReactNode
  children: React.ReactNode
  'aria-label'?: string
}

export type DropdownItemProps = Props

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownItem
