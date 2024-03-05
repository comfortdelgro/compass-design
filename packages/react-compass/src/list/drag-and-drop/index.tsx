/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './index.module.css'
import DragAndDropListItem from './item'
import {pickChilds} from './utils'
import List from './utils/List'

export interface Props {
  css?: unknown
  children: React.ReactNode
  onReorderByKeys?: (keys: React.Key[]) => void
}

export type DragAndDropListProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DragAndDropList = React.forwardRef<HTMLDivElement, DragAndDropListProps>(
  (props, ref) => {
    const {css = {}, className, children, onReorderByKeys, ...htmlProps} = props
    const dndRef = useDOMRef<HTMLDivElement>(ref)

    const collection = React.useMemo(
      () => pickChilds(children, DragAndDropListItem),
      [children],
    )

    const items = React.useMemo(
      () => collection.map((item) => item.key!),
      [collection],
    )

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          ref={dndRef}
          className={`${styles.dnd} cdg-list-dnd ${className}`}
          {...htmlProps}
        >
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
        </div>
      </CssInjection>
    )
  },
)

export default DragAndDropList as typeof DragAndDropList & {
  Item: typeof DragAndDropListItem
}
