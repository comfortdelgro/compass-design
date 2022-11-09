import {useTableColumnHeader} from '@react-aria/table'
import {TableState} from '@react-stately/table'
import type {GridNode} from '@react-types/grid'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableColumnHeader} from './table-column-header.styles'

interface Props<T = unknown> {
  column: GridNode<T>
  state: TableState<T>
}

const TableColumnHeader = React.forwardRef<HTMLTableCellElement, Props>(
  ({column, state}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)
    const {columnHeaderProps} = useTableColumnHeader(
      {node: column},
      state,
      tableRowRef,
    )

    return (
      <StyledTableColumnHeader ref={ref} {...columnHeaderProps}>
        {column.rendered}
      </StyledTableColumnHeader>
    )
  },
)

export default TableColumnHeader
