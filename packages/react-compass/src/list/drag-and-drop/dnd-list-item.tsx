import React,{ DragEventHandler } from 'react'
import { StyledComponentProps } from '../../utils/stitches.types'

export interface DragAndDropListItemProps extends StyledComponentProps {
  onDragStart?: DragEventHandler<HTMLLIElement>
  onDragEnter?: DragEventHandler<HTMLLIElement>
  onDragEnd?: DragEventHandler<HTMLLIElement>
  item: React.ReactChild
}
const DragAndDropListItem = (props: DragAndDropListItemProps) => {
  const ref = React.useRef(null)
  const {item, onDragStart, onDragEnter, onDragEnd} = props

  return (
      <li
        onDragStart={onDragStart}
        onDragEnter={onDragEnter}
        onDragEnd={onDragEnd}
        draggable
        ref={ref}
      >
        {(item as React.ReactElement).props.children}
      </li>
  )
}

export default DragAndDropListItem
