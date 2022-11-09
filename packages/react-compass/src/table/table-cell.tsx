import {useTableCell} from '@react-aria/table'
import {TableState} from '@react-stately/table'
import type {GridNode} from '@react-types/grid'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableCell} from './table-cell.styles'

interface Props<T = unknown> {
  cell: GridNode<T>
  state: TableState<T>
}

const TableCell = React.forwardRef<HTMLTableCellElement, Props>(
  ({cell, state}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)
    const {gridCellProps} = useTableCell({node: cell}, state, tableRowRef)

    return (
      <StyledTableCell ref={ref} {...gridCellProps}>
        {cell.rendered}
      </StyledTableCell>
    )
  },
)

export default TableCell
