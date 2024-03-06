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
  Table as TanstackTable,
} from '@tanstack/react-table'

import TableCheckbox from '../table/table-checkbox'
import TableCheckboxCell from '../table/table-checkbox-cell'
import TableFooter from '../table/table-footer'
import ProgressPercentage from '../table/table-progress'
import TableToolbar from '../table/table-toolbar'
import _TableV2 from './table-v2'
export type {
  OptionType,
  ReactTableCheckboxProps,
  ReactTableFooterProps,
  TableProps as ReactTableProps,
  ReactTableToolbarProps,
} from '../table'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from '../table/editable/editable-cell'

const TableV2 = _TableV2  as typeof TableV2 & {
  Toolbar: typeof TableToolbar
  Footer: typeof TableFooter
  Checkbox: typeof TableCheckbox
  CheckboxCell: typeof TableCheckboxCell
  ProgressPercentage: typeof ProgressPercentage
}

TableV2.Toolbar = TableToolbar
TableV2.Footer = TableFooter
TableV2.Checkbox = TableCheckbox
TableV2.CheckboxCell = TableCheckboxCell
TableV2.ProgressPercentage = ProgressPercentage
TableV2.ProgressPercentage.displayName = 'ProgressPercentage'
TableV2.Toolbar.displayName = 'TableV2.Toolbar'
TableV2.Footer.displayName = 'TableV2.Footer'

TableV2.displayName = 'TableV2'

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

export default TableV2
