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

    const onPointerDown = (e: PointerEvent) => {
      e.stopPropagation()
    }

    const onPointerUp = (e: PointerEvent) => {
      e.stopPropagation()
    }

    return (
      <StyledTableCheckboxCell ref={tableRowRef} {...gridCellProps}>
        <Checkbox
          {...checkboxProps}
          onPointerDown={(e: PointerEvent) => onPointerDown(e)}
          onPointerUp={(e: PointerEvent) => onPointerUp(e)}
        />
      </StyledTableCheckboxCell>
    )
  },
)

export default TableCheckboxCell
