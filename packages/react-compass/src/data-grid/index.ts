import {ColumnDef, SortingState} from '@tanstack/react-table'
import DataGrid from './data-grid'
import DataGridCheckbox from './data-grid-checkbox'
import DataGridCheckboxCell from './data-grid-checkbox-cell'
import DataGridFooter from './data-grid-footer'
import ProgressPercentage from './data-grid-progress'
import DataGridToolbar from './data-grid-toolbar'
export type {DataGridProps, OptionType} from './data-grid'
export type {DataGridCheckboxProps} from './data-grid-checkbox'
export type {DataGridCheckboxCellProps} from './data-grid-checkbox-cell'
export type {DataGridFooterProps} from './data-grid-footer'
export type {ProgressPercentageProps} from './data-grid-progress'
export type {DataGridToolbarProps} from './data-grid-toolbar'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from './editable/editable-cell'

DataGrid.Toolbar = DataGridToolbar
DataGrid.Footer = DataGridFooter
DataGrid.Checkbox = DataGridCheckbox
DataGrid.CheckboxCell = DataGridCheckboxCell
DataGrid.ProgressPercentage = ProgressPercentage
DataGrid.Toolbar.displayName = 'ToolBar'
DataGrid.Footer.displayName = 'Footer'
DataGrid.ProgressPercentage.displayName = 'ProgressPercentage'
// DataGrid.EditableCellContextProvider = 'EditableCellContextProvider'
// DataGrid.useEditableCellContext = 'useEditableCellContext'

DataGrid.displayName = 'DataGrid'

export type ColumnConfig<T> = ColumnDef<T>
export type StateSorting = SortingState
export default DataGrid
