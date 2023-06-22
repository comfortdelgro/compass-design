import {
  ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  GroupingState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import React, {useEffect, useState} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DataGridCell from './data-grid-cell'
import DataGridCheckbox from './data-grid-checkbox'
import DataGridCheckboxCell from './data-grid-checkbox-cell'
import DataGridColumnHeader from './data-grid-column-header'
import DataGridFooter from './data-grid-footer'
import DataGridHeaderRow from './data-grid-header-row'
import {NoDataComponent} from './data-grid-nodata'
import ProgressPercentage from './data-grid-progress'
import DataGridRow from './data-grid-row'
import DataGridRowGroup from './data-grid-row-group'
import {
  default as DataGridToolbar,
  default as TableToolbar,
} from './data-grid-toolbar'
import {StyledDataGrid, StyledDataGridWrapper} from './data-grid.styles'

export interface Options {
  enableSorting?: boolean
  enableMultiSort?: boolean
  manualSorting?: boolean
  columnResizeMode?: 'onChange' | 'onEnd'
  initialSortBy?: SortingState
}

export type OptionType = Options
export interface Props<T> extends StyledComponentProps {
  data: T[]
  columns: Array<ColumnDef<T>>
  options: OptionType
  onManualSorting?: (sortingField: SortingState) => void
  onChangeRowSelection?: (selectionRows: T[]) => void
  onUpdateData?: (newData: object) => void
  children: React.ReactNode
}

export type DataGridProps<T = any> = Props<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const DataGrid = React.forwardRef<HTMLTableElement, DataGridProps>(
  (props, ref) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [rowSelection, setRowSelection] = useState({})
    const [grouping, setGrouping] = React.useState<GroupingState>([])

    const {
      // StyledComponentProps
      css = {},
      data,
      columns,
      options,
      onManualSorting,
      onChangeRowSelection,
      onUpdateData,
      children,
      // HTMLDiv Props
      ...delegated
    } = props

    const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
      typeof TableToolbar
    >(children, TableToolbar)

    const {child: footer} = pickChild<typeof DataGridFooter>(
      childrenWithoutToolbar,
      DataGridFooter,
    )

    const tableRef = useDOMRef<HTMLTableElement>(ref)

    const table = useReactTable({
      state: {
        grouping,
        rowSelection,
        sorting: options.initialSortBy ? options.initialSortBy : sorting,
      },
      onGroupingChange: setGrouping,
      getExpandedRowModel: getExpandedRowModel(),
      getGroupedRowModel: getGroupedRowModel(),
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onRowSelectionChange: setRowSelection,
      debugTable: true,
      data: data,
      columns: columns,
      isMultiSortEvent: () => true,
      //enable sorting
      ...options,
    })

    useEffect(() => {
      const selectedRowModel = table.getSelectedRowModel().rows
      const selectedRowOriginals = selectedRowModel.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return item.original
      })
      onChangeRowSelection?.(selectedRowOriginals)
    }, [rowSelection])

    useEffect(() => {
      onManualSorting?.(sorting)
    }, [sorting])

    return (
      <StyledDataGridWrapper css={css}>
        {toolbar && <>{toolbar}</>}
        <StyledDataGrid {...delegated}>
          <table ref={tableRef}>
            <DataGridRowGroup as='thead'>
              {table.getHeaderGroups().map((headerGroup) => (
                <DataGridHeaderRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <DataGridColumnHeader
                        key={header.id}
                        headerProps={header}
                        tableOption={table}
                      />
                    )
                  })}
                </DataGridHeaderRow>
              ))}
            </DataGridRowGroup>
            {
              <DataGridRowGroup as='tbody'>
                {table.getRowModel().rows.length === 0 ||
                table.getRowModel().rows === undefined ? (
                  <NoDataComponent
                    colSpan={table.getAllLeafColumns()?.length}
                  ></NoDataComponent>
                ) : (
                  table.getRowModel().rows.map((row) => {
                    return (
                      <DataGridRow
                        key={row.id}
                        isSelected={row.getIsSelected()}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <DataGridCell
                              key={cell.id}
                              cell={cell}
                              row={row}
                              // eslint-disable-next-line @typescript-eslint/no-empty-function
                              onChangeCell={onUpdateData || (() => {})}
                            />
                          )
                        })}
                      </DataGridRow>
                    )
                  })
                )}
              </DataGridRowGroup>
            }
          </table>
        </StyledDataGrid>
        {footer && <>{footer}</>}
      </StyledDataGridWrapper>
    )
  },
)

export default DataGrid as typeof DataGrid & {
  Toolbar: typeof DataGridToolbar
  Footer: typeof DataGridFooter
  Checkbox: typeof DataGridCheckbox
  CheckboxCell: typeof DataGridCheckboxCell
  ProgressPercentage: typeof ProgressPercentage
}
