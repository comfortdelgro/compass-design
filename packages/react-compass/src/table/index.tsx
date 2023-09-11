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
import Table from '../table-v2'
import TableV2Checkbox from '../table-v2/table-v2-checkbox'
import TableV2CheckboxCell from '../table-v2/table-v2-checkbox-cell'
import TableV2Toolbar from '../table-v2/table-v2-toolbar'

import TableV2Footer from '../table-v2/table-v2-footer'
import ProgressPercentage from '../table-v2/table-v2-progress'
export type {OptionType as TableOptions} from '../table-v2'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from '../table-v2/editable/editable-cell'
export type {
  OptionType,
  ReactTableProps as TableProps,
} from '../table-v2/table-v2'
export type {TableV2CheckboxProps as TableCheckboxProps} from '../table-v2/table-v2-checkbox'
export type {TableV2CheckboxCellProps as TableCheckboxCellProps} from '../table-v2/table-v2-checkbox-cell'
export type {TableV2FooterProps as TableFooterProps} from '../table-v2/table-v2-footer'
export type {TableV2ToolbarProps as TableToolbarProps} from '../table-v2/table-v2-toolbar'

Table.Toolbar = TableV2Toolbar
Table.Footer = TableV2Footer
Table.Checkbox = TableV2Checkbox
Table.CheckboxCell = TableV2CheckboxCell
Table.ProgressPercentage = ProgressPercentage
Table.ProgressPercentage.displayName = 'ProgressPercentage'
Table.Toolbar.displayName = 'Table.Toolbar'
Table.Footer.displayName = 'Table.Footer'

Table.displayName = 'Table'

export type TableColumnDef<T> = ColumnDef<T>
export type TableAccessorColumnDef<T> = AccessorColumnDef<T>
export type TableDisplayColumnDef<T> = DisplayColumnDef<T>
export type TableSortingState = SortingState
export type TableGroupColumnDef<T> = GroupColumnDef<T>
export type TableRow<T> = Row<T>
export type TableCell<TData, TValue> = Cell<TData, TValue>
export type TableHeaderContext<TData, TValue> = HeaderContext<TData, TValue>
export type TableCellContext<TData, TValue> = CellContext<TData, TValue>
export type TableType<T> = TanstackTable<T>
export default Table
