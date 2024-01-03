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
  Table,
} from '@tanstack/react-table'
import TableV2Checkbox from './table-v2-checkbox'
import TableV2CheckboxCell from './table-v2-checkbox-cell'
import TableV2Toolbar from './table-v2-toolbar'

import ReactTable from './table-v2'
import TableV2Footer from './table-v2-footer'
import ProgressPercentage from './table-v2-progress'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from './editable/editable-cell'
export type {OptionType, ReactTableProps} from './table-v2'
export type {TableV2CheckboxProps as ReactTableCheckboxProps} from './table-v2-checkbox'
export type {TableV2CheckboxCellProps as ReactTableCheckboxCellProps} from './table-v2-checkbox-cell'
export type {TableV2FooterProps as ReactTableFooterProps} from './table-v2-footer'
export type {TableV2ToolbarProps as ReactTableToolbarProps} from './table-v2-toolbar'

ReactTable.Toolbar = TableV2Toolbar
ReactTable.Footer = TableV2Footer
ReactTable.Checkbox = TableV2Checkbox
ReactTable.CheckboxCell = TableV2CheckboxCell
ReactTable.ProgressPercentage = ProgressPercentage
ReactTable.ProgressPercentage.displayName = 'ProgressPercentage'
ReactTable.Toolbar.displayName = 'ReactTable.Toolbar'
ReactTable.Footer.displayName = 'ReactTable.Footer'

ReactTable.displayName = 'ReactTable'

export type TableV2ColumnDef<T> = ColumnDef<T>
export type TableV2AccessorColumnDef<T> = AccessorColumnDef<T>
export type TableV2DisplayColumnDef<T> = DisplayColumnDef<T>
export type TableV2SortingState = SortingState
export type TableColumnFiltersState = ColumnFiltersState
export type TableV2GroupColumnDef<T> = GroupColumnDef<T>
export type TableV2Row<T> = Row<T>
export type TableV2Cell<TData, TValue> = Cell<TData, TValue>
export type TableV2HeaderContext<TData, TValue> = HeaderContext<TData, TValue>
export type TableV2CellContext<TData, TValue> = CellContext<TData, TValue>
export type TableV2Table<T> = Table<T>
export default ReactTable
