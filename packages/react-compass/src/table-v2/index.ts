import {ColumnDef} from '@tanstack/react-table'
import ReactTable from './react-table'
import ReactTableCheckbox from './react-table-checkbox'
import ReactTableCheckboxCell from './react-table-checkbox-cell'
import ReactTableFooter from './react-table-footer'
import ReactTableToolbar from './react-table-toolbar'

export type {OptionType, ReactTableProps} from './react-table'
export type {ReactTableCheckboxProps} from './react-table-checkbox'
export type {ReactTableCheckboxCellProps} from './react-table-checkbox-cell'
export type {ReactTableFooterProps} from './react-table-footer'
export type {ReactTableToolbarProps} from './react-table-toolbar'

ReactTable.Toolbar = ReactTableToolbar
ReactTable.Footer = ReactTableFooter
ReactTable.Checkbox = ReactTableCheckbox
ReactTable.CheckboxCell = ReactTableCheckboxCell

ReactTable.Toolbar.displayName = 'Card.Body'
ReactTable.Footer.displayName = 'Card.Image'

ReactTable.displayName = 'ReactTable'

export type ColumnConfig<T> = ColumnDef<T>
export default ReactTable
