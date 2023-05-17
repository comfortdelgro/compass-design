import {Cell, flexRender} from '@tanstack/react-table'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridCell} from './data-grid-cell.styles'

export interface Props extends StyledComponentProps {
  cell: Cell<any, unknown>
}

export type DataGridCellProps = Props

const DataGridCell = React.forwardRef<HTMLTableCellElement, DataGridCellProps>(
  ({cell}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)

    return (
      <StyledDataGridCell
        ref={tableRowRef}
        {...{
          key: cell.id,
          style: {
            width: cell.column.getSize(),
          },
        }}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </StyledDataGridCell>
    )
  },
)

export default DataGridCell
