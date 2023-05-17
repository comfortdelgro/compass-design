import {ColumnDef, SortingState} from '@tanstack/react-table'
import DataGrid from './data-grid'
import DataGridCheckbox from './data-grid-checkbox'
import DataGridCheckboxCell from './data-grid-checkbox-cell'
import DataGridFooter from './data-grid-footer'
import DataGridToolbar from './data-grid-toolbar'

export type {DataGridProps, OptionType} from './data-grid'
export type {DataGridCheckboxProps} from './data-grid-checkbox'
export type {DataGridCheckboxCellProps} from './data-grid-checkbox-cell'
export type {DataGridFooterProps} from './data-grid-footer'
export type {DataGridToolbarProps} from './data-grid-toolbar'

DataGrid.Toolbar = DataGridToolbar
DataGrid.Footer = DataGridFooter
DataGrid.Checkbox = DataGridCheckbox
DataGrid.CheckboxCell = DataGridCheckboxCell

DataGrid.Toolbar.displayName = 'Card.Body'
DataGrid.Footer.displayName = 'Card.Image'

DataGrid.displayName = 'DataGrid'

export type ColumnConfig<T> = ColumnDef<T>
export type StateSorting = SortingState
export default DataGrid
