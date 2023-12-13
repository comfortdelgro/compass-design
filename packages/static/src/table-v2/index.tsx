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
  Table as TanstackTable,
} from '@tanstack/react-table'
import TableCheckbox from '../table/table-checkbox'
import TableToolbar from '../table/table-toolbar'

import Table from '../table/table'
import TableCheckboxCell from '../table/table-checkbox-cell'
import TableFooter from '../table/table-footer'
import ProgressPercentage from '../table/table-progress'
export type {OptionType, TableProps as ReactTableProps} from '../table'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from '../table/editable/editable-cell'
export type {TableCheckboxProps as ReactTableCheckboxProps} from '../table/table-checkbox'
export type {TableFooterProps as ReactTableFooterProps} from '../table/table-footer'
export type {TableToolbarProps as ReactTableToolbarProps} from '../table/table-toolbar'

Table.Toolbar = TableToolbar
Table.Footer = TableFooter
Table.Checkbox = TableCheckbox
Table.CheckboxCell = TableCheckboxCell
Table.ProgressPercentage = ProgressPercentage
Table.ProgressPercentage.displayName = 'ProgressPercentage'
Table.Toolbar.displayName = 'Table.Toolbar'
Table.Footer.displayName = 'Table.Footer'

Table.displayName = 'Table'

export type TableV2ColumnDef<T> = ColumnDef<T>
export type TableV2AccessorColumnDef<T> = AccessorColumnDef<T>
export type TableV2DisplayColumnDef<T> = DisplayColumnDef<T>
export type TableV2SortingState = SortingState
export type TableV2GroupColumnDef<T> = GroupColumnDef<T>
export type TableV2Row<T> = Row<T>
export type TableV2Cell<TData, TValue> = Cell<TData, TValue>
export type TableV2HeaderContext<TData, TValue> = HeaderContext<TData, TValue>
export type TableV2CellContext<TData, TValue> = CellContext<TData, TValue>
export type TableV2Table<T> = TanstackTable<T>
export default Table
