import {useTableCell, useTableSelectionCheckbox} from '@react-aria/table'
import {TableState} from '@react-stately/table'
import type {GridNode} from '@react-types/grid'
import React from 'react'
import Checkbox from '../checkbox/checkbox'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableCheckboxCell} from './table-checkbox-cell.styles'

interface Props<T = unknown> {
  cell: GridNode<T>
  state: TableState<T>
}

const TableCheckboxCell = React.forwardRef<HTMLTableCellElement, Props>(
  ({cell, state}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)
    const {gridCellProps} = useTableCell({node: cell}, state, tableRowRef)
    const {checkboxProps} = useTableSelectionCheckbox(
      {key: cell.parentKey!},
      state,
    )

    return (
      <StyledTableCheckboxCell ref={tableRowRef} {...gridCellProps}>
        <Checkbox {...checkboxProps} />
      </StyledTableCheckboxCell>
    )
  },
)

export default TableCheckboxCell
