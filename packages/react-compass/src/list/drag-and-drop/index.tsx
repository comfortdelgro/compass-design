import {
  ListDropTargetDelegate,
  useDraggableCollection,
  useDroppableCollection,
} from '@react-aria/dnd'
import {useListBox} from '@react-aria/listbox'
import {ListKeyboardDelegate} from '@react-aria/selection'
import {mergeProps} from '@react-aria/utils'
import {Item} from '@react-stately/collections'
import {
  useDraggableCollectionState,
  useDroppableCollectionState,
} from '@react-stately/dnd'
import {ListProps, useListState} from '@react-stately/list'
import type {
  DroppableCollectionProps,
  DroppableCollectionReorderEvent,
} from '@react-types/shared'
import React, {Key} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {StyledDragAndDrop} from './index.styles'
import ReorderableOption from './reoderable-option'
import {moveAfter, moveBefore} from './utils'

export interface DragAndDropListProps<T = object>
  extends ListProps<T>,
    DroppableCollectionProps,
    StyledComponentProps {
  onReorderByKeys?: (keys: Key[]) => void
}

function DragAndDropList(props: DragAndDropListProps) {
  const ref = React.useRef(null)
  const state = useListState(props)
  const {listBoxProps} = useListBox(
    {
      ...props,
      shouldSelectOnPressUp: true,
    },
    state,
    ref,
  )

  const onReorder = (e: DroppableCollectionReorderEvent) => {
    props.onReorderByKeys?.(onReoderComplete(e))
    props.onReorder?.(e)
  }

  const onReoderComplete = (e: DroppableCollectionReorderEvent) => {
    if (e.target.dropPosition === 'before') {
      return moveBefore(state.collection, e.target.key, e.keys)
    } else if (e.target.dropPosition === 'after') {
      return moveAfter(state.collection, e.target.key, e.keys)
    }
    return []
  }

  const dropState = useDroppableCollectionState({
    ...props,
    onReorder,
    collection: state.collection,
    selectionManager: state.selectionManager,
  })

  const {collectionProps} = useDroppableCollection(
    {
      ...props,
      onReorder,
      keyboardDelegate: new ListKeyboardDelegate(
        state.collection,
        state.disabledKeys,
        ref,
      ),
      dropTargetDelegate: new ListDropTargetDelegate(state.collection, ref),
    },
    dropState,
    ref,
  )

  const dragState = useDraggableCollectionState({
    ...props,
    collection: state.collection,
    selectionManager: state.selectionManager,
    getItems: (keys) => {
      return [...keys].map((key) => {
        const item = state.collection.getItem(key)
        return {
          'text/plain':
            item.textValue !== '' ? item.textValue : (item.key as string),
        }
      })
    },
  })

  useDraggableCollection(props, dragState, ref)

  return (
    <StyledDragAndDrop {...mergeProps(listBoxProps, collectionProps)} ref={ref}>
      {[...state.collection].map((item) => (
        <ReorderableOption
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
          dropState={dropState}
        />
      ))}
    </StyledDragAndDrop>
  )
}

DragAndDropList.Item = Item

export default DragAndDropList as typeof DragAndDropList & {
  Item: typeof Item
}
