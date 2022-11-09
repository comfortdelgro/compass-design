import {AriaTableProps, useTable} from '@react-aria/table'
import {useTableState} from '@react-stately/table'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TableCell from './table-cell'
import TableCheckboxCell from './table-checkbox-cell'
import TableColumnHeader from './table-column-header'
import TableHeaderRow from './table-header-row'
import TableRow from './table-row'
import TableRowGroup from './table-row-group'
import {StyledTable} from './table.styles'

interface Props<T> extends AriaTableProps<T>, StyledComponentProps {
  selectionMode?: 'none' | 'single' | 'multiple'
  children: React.ReactNode
}

export type TableProps<T = object> = Props<T>

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    children,
    // AriaTableProps
    selectionMode = 'none',
    ...ariaSafeProps
  } = props

  const ariaProps = {
    children: children as React.ReactElement,
    selectionMode,
    ...ariaSafeProps,
  }

  const tableRef = useDOMRef<HTMLTableElement>(ref)
  const state = useTableState({
    ...ariaProps,
    showSelectionCheckboxes: selectionMode === 'multiple',
  })
  const {gridProps} = useTable(ariaProps, state, tableRef)
  const {collection} = state

  return (
    <StyledTable css={css} ref={tableRef} {...gridProps}>
      <TableRowGroup as='thead'>
        {collection.headerRows.map((row) => (
          <TableHeaderRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((column) =>
              (column.props as {isSelectionCell: boolean}).isSelectionCell ? (
                <></>
              ) : (
                <TableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                />
              ),
            )}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup as='tbody'>
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              (cell.props as {isSelectionCell: boolean}).isSelectionCell ? (
                <TableCheckboxCell key={cell.key} cell={cell} state={state} />
              ) : (
                <TableCell key={cell.key} cell={cell} state={state} />
              ),
            )}
          </TableRow>
        ))}
      </TableRowGroup>
    </StyledTable>
  )
})

export default Table
