import {Cell, flexRender} from '@tanstack/react-table'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableCell} from './react-table-cell.styles'

export interface Props<TData, TValue> extends StyledComponentProps {
  cell: Cell<TData, TValue>
}

export type ReactTableCellProps<TData = any, TValue = unknown> = Props<
  TData,
  TValue
> &
  Omit<React.HTMLAttributes<HTMLTableCellElement>, keyof Props<TData, TValue>>

const ReactTableCell = React.forwardRef<
  HTMLTableCellElement,
  ReactTableCellProps
>(({cell}, ref) => {
  const tableCellRef = useDOMRef<HTMLTableCellElement>(ref)

  return (
    <StyledReactTableCell
      ref={tableCellRef}
      key={cell.id}
      css={{
        width: cell.column.getSize(),
      }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </StyledReactTableCell>
  )
})

export default ReactTableCell
