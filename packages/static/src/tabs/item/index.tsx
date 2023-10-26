import React from 'react'

export interface Props {
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
