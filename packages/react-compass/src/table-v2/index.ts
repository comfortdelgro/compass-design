import {
  AccessorColumnDef,
  ColumnDef,
  DisplayColumnDef,
  GroupColumnDef,
  SortingState,
} from '@tanstack/react-table'
import DataGridCheckbox from '../data-grid/data-grid-checkbox'
import DataGridCheckboxCell from '../data-grid/data-grid-checkbox-cell'
import DataGridFooter from '../data-grid/data-grid-footer'
import DataGridToolbar from '../data-grid/data-grid-toolbar'
import ReactTable from './react-table'

export type {
  DataGridCheckboxCellProps as ReactTableCheckboxCellProps,
  DataGridCheckboxProps as ReactTableCheckboxProps,
  DataGridFooterProps as ReactTableFooterProps,
  DataGridToolbarProps as ReactTableToolbarProps,
} from '../data-grid'
export type {OptionType, ReactTableProps} from './react-table'

ReactTable.Toolbar = DataGridToolbar
ReactTable.Footer = DataGridFooter
ReactTable.Checkbox = DataGridCheckbox
ReactTable.CheckboxCell = DataGridCheckboxCell

ReactTable.Toolbar.displayName = 'Card.Body'
ReactTable.Footer.displayName = 'Card.Image'

ReactTable.displayName = 'ReactTable'

export type ColumnConfig<T> = ColumnDef<T>
export type AccessorColumnConfig<T> = AccessorColumnDef<T>
export type DisplayColumnConfig<T> = DisplayColumnDef<T>
export type GroupColumnConfig<T> = GroupColumnDef<T>
export type StateSorting = SortingState
export default ReactTable
