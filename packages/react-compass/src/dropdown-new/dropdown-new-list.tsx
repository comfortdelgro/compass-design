import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledDropdownList} from './dropdown-new.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownItemListProps = Props

const DropdownNewList: React.FC<DropdownItemListProps> = (
  props: DropdownItemListProps,
) => {
  return <StyledDropdownList>{props.children}</StyledDropdownList>
}

export default DropdownNewList