import {useFocusRing} from '@react-aria/focus'
import {useTableCell} from '@react-aria/table'
import {mergeProps} from '@react-aria/utils'
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
    const {focusProps} = useFocusRing()

    return (
      <StyledTableCell
        ref={tableRowRef}
        {...mergeProps(gridCellProps, focusProps)}
      >
        {cell.rendered}
      </StyledTableCell>
    )
  },
)

export default TableCell
