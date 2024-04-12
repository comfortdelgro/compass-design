import {
  ColumnDef,
  ColumnFiltersState,
  ExpandedState,
  GroupingState,
  Row,
  SortingState,
} from '@tanstack/react-table'
import {CSS} from '../utils/objectToCss'

export interface Options<TData> {
  enableSorting?: boolean
  enableMultiSort?: boolean
  manualSorting?: boolean
  manualFiltering?: boolean
  columnResizeMode?: 'onChange' | 'onEnd'
  manualPagination?: boolean
  initialSortBy?: SortingState
  initialExpanded?: ExpandedState
  debugTable?: boolean
  resetSelectionWhenDataChanged?: boolean
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean)
  getRowId?: (originalRow: TData, index?: number, parent?: Row<TData>) => string
}

export type OptionType<TData> = Options<TData>

export interface Props<T> {
  data: unknown[]
  columns: Array<ColumnDef<T>>
  options: OptionType<T>
  onManualExpanded?: (expanded: ExpandedState) => void
  onManualSorting?: (sortingField: SortingState) => void
  onManualFilter?: (filter: ColumnFiltersState) => void
  onManualGrouping?: (filter: GroupingState) => void
  onChangeRowSelection?: (selectionRows: T[]) => void
  children: React.ReactNode
  onUpdateData?: (newData: object) => void
  renderRowSubComponent?: (row: T) => React.JSX.Element
  isLoading?: boolean
  loadingIndicator?: React.ReactNode
  emptyComponent?: React.ReactNode
  className?: string
  css?: CSS
}
export interface TableConfig {
  hasFilter: boolean
  hasSorted: boolean
  hasMultipleSorted: boolean
}
