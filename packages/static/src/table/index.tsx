/* eslint-disable react-refresh/only-export-components */
import {
  AccessorColumnDef,
  Cell,
  CellContext,
  ColumnDef,
  DisplayColumnDef,
  GroupColumnDef,
  HeaderContext,
  Row,
  SortingState,
  ColumnFiltersState,
  Table as TanstackTable,
} from '@tanstack/react-table'
import TableCheckbox from './table-checkbox'
import TableToolbar from './table-toolbar'

import _Table from './table'
import TableCheckboxCell from './table-checkbox-cell'
import TableFooter from './table-footer'
import ProgressPercentage from './table-progress'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from './editable/editable-cell'
export type {OptionType, TableProps} from './table'
export type {TableCheckboxProps as ReactTableCheckboxProps} from './table-checkbox'
export type {TableFooterProps as ReactTableFooterProps} from './table-footer'
export type {TableToolbarProps as ReactTableToolbarProps} from './table-toolbar'

const Table = _Table as typeof Table & {
  Toolbar: typeof TableToolbar
  Footer: typeof TableFooter
  Checkbox: typeof TableCheckbox
  CheckboxCell: typeof TableCheckboxCell
  ProgressPercentage: typeof ProgressPercentage
}

Table.Toolbar = TableToolbar
Table.Footer = TableFooter
Table.Checkbox = TableCheckbox
Table.CheckboxCell = TableCheckboxCell
Table.ProgressPercentage = ProgressPercentage
Table.ProgressPercentage.displayName = 'ProgressPercentage'
Table.Toolbar.displayName = 'Table.Toolbar'
Table.Footer.displayName = 'Table.Footer'

Table.displayName = 'Table'

export type TableColumnDef<T> = ColumnDef<T>
export type TableAccessorColumnDef<T> = AccessorColumnDef<T>
export type TableDisplayColumnDef<T> = DisplayColumnDef<T>
export type TableSortingState = SortingState
export type TableColumnFiltersState = ColumnFiltersState
export type TableGroupColumnDef<T> = GroupColumnDef<T>
export type TableRow<T> = Row<T>
export type TableCell<TData, TValue> = Cell<TData, TValue>
export type TableHeaderContext<TData, TValue> = HeaderContext<TData, TValue>
export type TableCellContext<TData, TValue> = CellContext<TData, TValue>
export type TableType<T> = TanstackTable<T>

export default Table
