import {DropIndicatorProps, useDropIndicator} from '@react-aria/dnd'
import {DroppableCollectionState} from '@react-stately/dnd'
import React from 'react'

interface Props extends DropIndicatorProps {
  dropState: DroppableCollectionState
}

const DropIndicator: React.FC<Props> = (props) => {
  const ref = React.useRef(null)
  const {dropIndicatorProps, isHidden, isDropTarget} = useDropIndicator(
    props,
    props.dropState,
    ref,
  )
  if (isHidden) {
    return null
  }

  return (
    <li
      {...dropIndicatorProps}
      role='option'
      ref={ref}
      className={`${isDropTarget ? 'dnd-list-drop-target' : ''}`}
    />
  )
}

export default DropIndicator
