import {AriaTableProps, useTable} from '@react-aria/table'
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  TableStateProps,
  useTableState,
} from '@react-stately/table'
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TableCell from './table-cell'
import TableCheckboxCell from './table-checkbox-cell'
import TableColumnHeader from './table-column-header'
import TableFooter from './table-footer'
import TableHeaderRow from './table-header-row'
import TableRow from './table-row'
import TableRowGroup from './table-row-group'
import TableSelectAllCell from './table-select-all-cell'
import TableToolbar from './table-toolbar'
import {StyledTable, StyledTableWrapper} from './table.styles'

interface Props<T>
  extends AriaTableProps<T>,
    TableStateProps<T>,
    StyledComponentProps {
  selectionMode?: 'none' | 'single' | 'multiple'
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

  const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
    typeof TableToolbar
  >(children, TableToolbar)

  const {child: footer, rest: childrenWithoutToolbarAndFooter} = pickChild<
    typeof TableFooter
  >(childrenWithoutToolbar, TableFooter)

  const ariaProps = {
    children: childrenWithoutToolbarAndFooter,
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
    <StyledTableWrapper css={css}>
      {toolbar && <>{toolbar}</>}
      <StyledTable>
        <table ref={tableRef} {...gridProps}>
          <TableRowGroup as='thead'>
            {collection.headerRows.map((row) => (
              <TableHeaderRow key={row.key} item={row} state={state}>
                {[...row.childNodes].map((column) =>
                  (column.props as {isSelectionCell: boolean})
                    .isSelectionCell ? (
                    <TableSelectAllCell
                      key={column.key}
                      column={column}
                      state={state}
                    />
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
                    <TableCheckboxCell
                      key={cell.key}
                      cell={cell}
                      state={state}
                    />
                  ) : (
                    <TableCell key={cell.key} cell={cell} state={state} />
                  ),
                )}
              </TableRow>
            ))}
          </TableRowGroup>
        </table>
      </StyledTable>
      {footer && <>{footer}</>}
    </StyledTableWrapper>
  )
})

// Aliases
type ComposableTable = typeof Table & {
  Cell: typeof Cell
  Column: typeof Column
  Row: typeof Row
  Body: typeof TableBody
  Header: typeof TableHeader
  Toolbar: typeof TableToolbar
  Footer: typeof TableFooter
}
;(Table as ComposableTable).Cell = Cell
;(Table as ComposableTable).Column = Column
;(Table as ComposableTable).Row = Row
;(Table as ComposableTable).Body = TableBody
;(Table as ComposableTable).Header = TableHeader
;(Table as ComposableTable).Toolbar = TableToolbar
;(Table as ComposableTable).Footer = TableFooter

export default Table as ComposableTable
