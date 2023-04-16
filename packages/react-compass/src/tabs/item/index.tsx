import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'

export interface Props extends StyledComponentProps {
  key: React.Key
  title: string
  textValue?: string
  children: React.ReactNode
  'aria-label'?: string
}

export type TabItemProps = Props

const TabItem: React.FC<TabItemProps> = (props) => {
  return <>{props.children}</>
}

export default TabItem
