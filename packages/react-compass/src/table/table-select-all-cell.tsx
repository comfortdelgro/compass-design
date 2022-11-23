import {
  useTableColumnHeader,
  useTableSelectAllCheckbox,
} from '@react-aria/table'
import {VisuallyHidden} from '@react-aria/visually-hidden'
import {TableState} from '@react-stately/table'
import type {GridNode} from '@react-types/grid'
import React from 'react'
import Checkbox from '../checkbox/checkbox'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableSelectAllCell} from './table-select-all-cell.styles'

interface Props<T = unknown> {
  column: GridNode<T>
  state: TableState<T>
}

const TableSelectAllCell = React.forwardRef<HTMLTableCellElement, Props>(
  ({column, state}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)
    const {columnHeaderProps} = useTableColumnHeader(
      {node: column},
      state,
      tableRowRef,
    )
    const {checkboxProps} = useTableSelectAllCheckbox(state)

    return (
      <StyledTableSelectAllCell ref={tableRowRef} {...columnHeaderProps}>
        {state.selectionManager.selectionMode === 'single' ? (
          <VisuallyHidden>
            {
              // TODO: to delegate table's label later
            }
          </VisuallyHidden>
        ) : (
          <Checkbox {...checkboxProps} isIndeterminate />
        )}
      </StyledTableSelectAllCell>
    )
  },
)

export default TableSelectAllCell
