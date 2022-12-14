import {useTableRow} from '@react-aria/table'
import {TableState} from '@react-stately/table'
import type {GridNode} from '@react-types/grid'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableRow} from './table-row.styles'

interface Props<T = unknown> {
  item: GridNode<T>
  state: TableState<T>
  children: React.ReactNode
}

const TableRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({item, state, children}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)
    const {rowProps} = useTableRow({node: item}, state, tableRowRef)
    const isSelected = state.selectionManager.isSelected(item.key)

    return (
      <StyledTableRow
        css={{
          backgroundColor: isSelected ? '$cdgBlue10' : 'transparent',
          borderLeftColor: isSelected ? '$cdgBlue' : 'transparent',
        }}
        ref={tableRowRef}
        {...rowProps}
      >
        {children}
      </StyledTableRow>
    )
  },
)

export default TableRow
