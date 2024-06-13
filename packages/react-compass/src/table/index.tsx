/* eslint-disable react-refresh/only-export-components */
import {
  AccessorColumnDef,
  Cell,
  CellContext,
  ColumnDef,
  ColumnFiltersState,
  DisplayColumnDef,
  GroupColumnDef,
  HeaderContext,
  Row,
  SortingState,
  Table as TanstackTable,
} from '@tanstack/react-table'
import TableToolbar from './table-toolbar'

import Table from './table'
import TableCheckboxCell from './table-checkbox-cell'
import TableFooter from './table-footer'
import ProgressPercentage from './table-progress'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from './components/table-editable-cell'
export type {TableProps} from './table'
export type {TableFooterProps as ReactTableFooterProps} from './table-footer'
export type {TableToolbarProps as ReactTableToolbarProps} from './table-toolbar'
export type {OptionType} from './utils/types'

Table.Footer = TableFooter
Table.Toolbar = TableToolbar
Table.CheckboxCell = TableCheckboxCell
Table.ProgressPercentage = ProgressPercentage

Table.Footer.displayName = 'Table.Footer'
Table.Toolbar.displayName = 'Table.Toolbar'
Table.CheckboxCell.displayName = 'Table.CheckboxCell'
Table.ProgressPercentage.displayName = 'Table.ProgressPercentage'

Table.displayName = 'Table'

export type TableRow<T> = Row<T>
export type TableType<T> = TanstackTable<T>
export type TableColumnDef<T> = ColumnDef<T>
export type TableSortingState = SortingState
export type TableGroupColumnDef<T> = GroupColumnDef<T>
export type TableColumnFiltersState = ColumnFiltersState
export type TableDisplayColumnDef<T> = DisplayColumnDef<T>
export type TableCell<TData, TValue> = Cell<TData, TValue>
export type TableAccessorColumnDef<T> = AccessorColumnDef<T>
export type TableCellContext<TData, TValue> = CellContext<TData, TValue>
export type TableHeaderContext<TData, TValue> = HeaderContext<TData, TValue>

export default Table
