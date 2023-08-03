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

    const onPointerDown = (e: PointerEvent) => {
      e.stopPropagation()
    }

    const onPointerUp = (e: PointerEvent) => {
      e.stopPropagation()
    }

    return (
      <StyledTableSelectAllCell ref={tableRowRef} {...columnHeaderProps}>
        {state.selectionManager.selectionMode === 'single' ? (
          <VisuallyHidden>
            {
              // TODO: to delegate table's label later
            }
          </VisuallyHidden>
        ) : (
          <Checkbox
            {...checkboxProps}
            isIndeterminate
            cssCheckBoxInput={{
              width: '15px',
              height: '15px',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            onPointerDown={(e) => onPointerDown(e as unknown as PointerEvent)}
            onPointerUp={(e) => onPointerUp(e as unknown as PointerEvent)}
          />
        )}
      </StyledTableSelectAllCell>
    )
  },
)

export default TableSelectAllCell
