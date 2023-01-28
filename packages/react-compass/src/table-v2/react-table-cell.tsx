import {flexRender} from '@tanstack/react-table'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableCell} from './react-table-cell.styles'

const ReactTableCell = React.forwardRef<HTMLTableCellElement, any>(
  ({cell}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)

    return (
      <StyledReactTableCell
        ref={tableRowRef}
        {...{
          key: cell.id,
          style: {
            width: cell.column.getSize(),
          },
        }}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </StyledReactTableCell>
    )
  },
)

export default ReactTableCell
