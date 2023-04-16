import { Item } from '@react-stately/collections'
import React,{ Children,useState } from 'react'
import { StyledComponentProps } from '../../utils/stitches.types'
import DragAndDropListItem from './dnd-list-item'
import { StyledDragAndDrop } from './index.styles'

export interface DragAndDropListProps extends StyledComponentProps {
  children: React.ReactNode
}

const DragAndDropList = ({children}: DragAndDropListProps) => {
  const ref = React.useRef(null)
  const [startPosition, setStartPosition] = useState<number>(-1)
  const [dragOverPosition, setDragOverPosition] = useState<number>(-1)

  const [listItems, setListItems] = useState<React.ReactChild[]>(
    Children.toArray(children) as React.ReactChild[],
  )

  const dragStart = (position: number) => {
    setStartPosition(position)
  }

  const dragEnter = (position: number) => {
    setDragOverPosition(position)
  }

  const drop = () => {
    const copyListItems = [...listItems]
    const dragItemContent = copyListItems[startPosition] as React.ReactChild
    copyListItems.splice(startPosition, 1)
    copyListItems.splice(dragOverPosition, 0, dragItemContent)
    setStartPosition(-1)
    setDragOverPosition(-1)
    setListItems(copyListItems)
  }

  return (
    <StyledDragAndDrop ref={ref}>
      {listItems.map((child, index) => {
        return (
          <>
            {dragOverPosition === index && startPosition > index && (
              <li className='dnd-list-drop-target'></li>
            )}
            <DragAndDropListItem
              item={child}
              onDragStart={() => dragStart(index)}
              onDragEnter={() => dragEnter(index)}
              onDragEnd={drop}
            />
            {dragOverPosition === index && startPosition < index && (
              <li className='dnd-list-drop-target'></li>
            )}
          </>
        )
      })}
    </StyledDragAndDrop>
  )
}
DragAndDropList.Item = Item

export default DragAndDropList as typeof DragAndDropList & {
  Item: typeof Item
}
