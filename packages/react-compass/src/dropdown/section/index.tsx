import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {DropdownItemProps} from '../item'

export type ItemElement = React.ReactElement<DropdownItemProps>
export type ItemRenderer = () => ItemElement

export interface DropdownSectionBase extends StyledComponentProps {
  title?: React.ReactNode
  'aria-label'?: string
  children: ItemElement | ItemElement[] | ItemRenderer
}

export type DropdownSectionProps = DropdownSectionBase

const DropdownSection: React.FC<DropdownSectionProps> = (props) => {
  return <>{props.children}</>
}

export default DropdownSection
