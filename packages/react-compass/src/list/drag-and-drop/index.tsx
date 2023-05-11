import React, {useState} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {StyledDragAndDrop} from './index.styles'
import DragAndDropListItem from './item'
import DragAndDropListOutletItem from './item/outlet'
import {pickChilds} from './utils'

export interface DragAndDropListProps extends StyledComponentProps {
  children: React.ReactNode
  onReorderByKeys?: (keys: React.Key[]) => void
}

const DragAndDropList = ({children, onReorderByKeys}: DragAndDropListProps) => {
  const ref = React.useRef(null)
  const [startPosition, setStartPosition] = useState<number>(-1)
  const [dragOverPosition, setDragOverPosition] = useState<number>(-1)

  const collection = React.useMemo(
    () => pickChilds(children, DragAndDropListItem),
    [children],
  )

  const dragStart = (position: number) => {
    setStartPosition(position)
  }

  const dragEnter = (position: number) => {
    setDragOverPosition(position)
  }

  const drop = () => {
    const copyListItems = [...collection]
    const dragItemContent = copyListItems[startPosition]
    if (dragItemContent) {
      copyListItems.splice(startPosition, 1)
      copyListItems.splice(dragOverPosition, 0, dragItemContent)
      setStartPosition(-1)
      setDragOverPosition(-1)
      onReorderByKeys?.(copyListItems.map((item) => item.key ?? ''))
    }
  }

  return (
    <StyledDragAndDrop ref={ref}>
      {collection.map((child, index) => {
        return (
          <>
            {dragOverPosition === index && startPosition > index && (
              <li className='dnd-list-drop-target'></li>
            )}
            <DragAndDropListOutletItem
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
DragAndDropList.Item = DragAndDropListItem

export default DragAndDropList as typeof DragAndDropList & {
  Item: typeof DragAndDropListItem
}
