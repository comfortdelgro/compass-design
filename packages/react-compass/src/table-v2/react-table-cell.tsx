import {Cell, flexRender} from '@tanstack/react-table'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableCell} from './react-table-cell.styles'

export interface Props extends StyledComponentProps {
  cell: Cell<any, unknown>
}

export type ReactTableCellProps = Props

const ReactTableCell = React.forwardRef<
  HTMLTableCellElement,
  ReactTableCellProps
>(({cell}, ref) => {
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
})

export default ReactTableCell
