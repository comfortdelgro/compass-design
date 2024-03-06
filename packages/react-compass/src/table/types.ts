import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
} from '@tanstack/react-table'

export interface Options<TData> {
  enableSorting?: boolean
  enableMultiSort?: boolean
  manualSorting?: boolean
  manualFiltering?: boolean
  columnResizeMode?: 'onChange' | 'onEnd'
  manualPagination?: boolean
  initialSortBy?: SortingState
  debugTable?: boolean
  resetSelectionWhenDataChanged?: boolean
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean)
  getRowId?: (originalRow: TData, index?: number, parent?: Row<TData>) => any
}

export type OptionType<TData> = Options<TData>

export interface Props<T> {
  data: unknown[]
  columns: Array<ColumnDef<T>>
  options: OptionType<T>
  onManualSorting?: (sortingField: SortingState) => void
  onManualFilter?: (filter: ColumnFiltersState) => void
  onChangeRowSelection?: (selectionRows: T[]) => void
  children: React.ReactNode
  onUpdateData?: (newData: object) => void
  renderRowSubComponent?: (row: T) => React.JSX.Element
  isLoading?: boolean
  loadingIndicator?: React.ReactNode
  emptyComponent?: React.ReactNode
  className?: string
  css?: unknown
}
