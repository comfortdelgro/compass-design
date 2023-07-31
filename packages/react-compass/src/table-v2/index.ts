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
  Table,
} from '@tanstack/react-table'
import DataGridCheckbox from '../data-grid/data-grid-checkbox'
import DataGridCheckboxCell from '../data-grid/data-grid-checkbox-cell'
import DataGridFooter from '../data-grid/data-grid-footer'
import DataGridToolbar from '../data-grid/data-grid-toolbar'
import ReactTable from './table-v2'

export type {
  DataGridCheckboxCellProps as ReactTableCheckboxCellProps,
  DataGridCheckboxProps as ReactTableCheckboxProps,
  DataGridFooterProps as ReactTableFooterProps,
  DataGridToolbarProps as ReactTableToolbarProps,
} from '../data-grid'
export type {OptionType, ReactTableProps} from './table-v2'

ReactTable.Toolbar = DataGridToolbar
ReactTable.Footer = DataGridFooter
ReactTable.Checkbox = DataGridCheckbox
ReactTable.CheckboxCell = DataGridCheckboxCell

ReactTable.Toolbar.displayName = 'Card.Body'
ReactTable.Footer.displayName = 'Card.Image'

ReactTable.displayName = 'ReactTable'

export type TableV2ColumnDef<T> = ColumnDef<T>
export type TableV2AccessorColumnDef<T> = AccessorColumnDef<T>
export type TableV2DisplayColumnDef<T> = DisplayColumnDef<T>
export type TableV2SortingState = SortingState
export type TableV2GroupColumnDef<T> = GroupColumnDef<T>
export type TableV2Row<T> = Row<T>
export type TableV2Cell<TData, TValue> = Cell<TData, TValue>
export type TableV2HeaderContext<TData, TValue> = HeaderContext<TData, TValue>
export type TableV2CellContext<TData, TValue> = CellContext<TData, TValue>
export type TableV2Table<T> = Table<T>
export default ReactTable
