import React from 'react'

interface Props {
  key: React.Key
  children: React.ReactNode
}

export type DragAndDropListItemProps = Props

const DragAndDropListItem: React.FC<DragAndDropListItemProps> = (props) => {
  return <>{props.children}</>
}

export default DragAndDropListItem
