import React from 'react'
import {IItemProps} from '../utils/types'

export interface DragAndDropListItemProps {
  children: React.ReactNode
  props: IItemProps
  index?: number
  isDragged: boolean
  isSelected: boolean
  isOutOfBounds: boolean
}

const DragAndDropListOutletItem = ({
  children,
  props,
  isDragged,
}: DragAndDropListItemProps) => {
  return (
    <li
      {...props}
      style={{
        ...props.style,
        cursor: isDragged ? 'grabbing' : 'grab',
      }}
    >
      {children}
    </li>
  )
}

export default DragAndDropListOutletItem
