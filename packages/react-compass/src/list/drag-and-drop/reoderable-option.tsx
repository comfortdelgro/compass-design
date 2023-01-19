import {useDraggableItem} from '@react-aria/dnd'
import {useFocusRing} from '@react-aria/focus'
import {useOption} from '@react-aria/listbox'
import {mergeProps} from '@react-aria/utils'
import {
  DraggableCollectionState,
  DroppableCollectionState,
} from '@react-stately/dnd'
import {ListState} from '@react-stately/list'
import type {Node} from '@react-types/shared'
import React from 'react'
import DropIndicator from './drop-indicator'

interface Props {
  item: Node<object>
  state: ListState<object>
  dragState: DraggableCollectionState
  dropState: DroppableCollectionState
}

const ReorderableOption: React.FC<Props> = ({
  item,
  state,
  dragState,
  dropState,
}) => {
  const ref = React.useRef(null)
  const {optionProps} = useOption({key: item.key}, state, ref)
  const {isFocusVisible, focusProps} = useFocusRing()

  const {dragProps} = useDraggableItem({key: item.key}, dragState)

  return (
    <>
      <DropIndicator
        target={{type: 'item', key: item.key, dropPosition: 'before'}}
        dropState={dropState}
      />
      <li
        {...mergeProps(optionProps, dragProps, focusProps)}
        ref={ref}
        className={`${isFocusVisible ? 'focus-visible' : ''}`}
      >
        {item.rendered}
      </li>
      {state.collection.getKeyAfter(item.key) == null && (
        <DropIndicator
          target={{type: 'item', key: item.key, dropPosition: 'after'}}
          dropState={dropState}
        />
      )}
    </>
  )
}

export default ReorderableOption
