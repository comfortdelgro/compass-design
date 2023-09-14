import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledDragAndDrop} from './index.styles'
import DragAndDropListItem from './item'
import {pickChilds} from './utils'
import List from './utils/List'

export interface Props extends StyledComponentProps {
  children: React.ReactNode
  onReorderByKeys?: (keys: React.Key[]) => void
}

export type DragAndDropListProps = Props &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof Props>

const DragAndDropList = React.forwardRef<
  HTMLUListElement,
  DragAndDropListProps
>((props, ref) => {
  const {css = {}, children, onReorderByKeys, ...delegated} = props
  const dndRef = useDOMRef<HTMLUListElement>(ref)

  const collection = React.useMemo(
    () => pickChilds(children, DragAndDropListItem),
    [children],
  )

  const items = React.useMemo(
    () => collection.map((item) => item.key!),
    [collection],
  )

  return (
    <StyledDragAndDrop ref={dndRef} css={css} {...delegated}>
      <List
        values={items}
        collection={collection}
        onChange={({oldIndex, newIndex}) => {
          const array = items.slice()
          array.splice(
            newIndex < 0 ? array.length + newIndex : newIndex,
            0,
            array.splice(oldIndex, 1)[0]!,
          )
          onReorderByKeys?.(array)
        }}
      >
        {children}
      </List>
    </StyledDragAndDrop>
  )
})

export default DragAndDropList as typeof DragAndDropList & {
  Item: typeof DragAndDropListItem
}
