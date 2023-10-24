import {
  ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  GroupingState,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

import React, {useEffect, useState} from 'react'
import Progress from '../progress'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'

import CssInjection from '../utils/objectToCss/CssInjection'
import ExpandableRow from './expandable/expandable-row'
import LoadingComponent from './loading/loading-component'
import styles from './styles/table.module.css'
import TableCell from './table-cell'
import TableCheckbox from './table-checkbox'
import TableColumnHeader from './table-column-header'
import TableFooter from './table-footer'
import TableHeaderRow from './table-header-row'
import {NoDataComponent} from './table-nodata'
import ProgressPercentage from './table-progress'
import TableRow from './table-row'
import TableToolbar from './table-toolbar'

export interface Options<TData> {
  enableSorting?: boolean
  enableMultiSort?: boolean
  manualSorting?: boolean
  columnResizeMode?: 'onChange' | 'onEnd'
  initialSortBy?: SortingState
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean)
}

export type OptionType<TData> = Options<TData>

export interface Props<T> {
  data: T[]
  columns: Array<ColumnDef<T>>
  options: OptionType<T>
  onManualSorting?: (sortingField: SortingState) => void
  onChangeRowSelection?: (selectionRows: T[]) => void
  children: React.ReactNode
  onUpdateData?: (newData: object) => void
  renderRowSubComponent?: (row: T) => React.JSX.Element
  isLoading?: boolean
  loadingIndicator?: React.ReactNode
  className?: string
  css?: unknown
}

export type ReactTableProps<T = never> = Props<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const ReactTable = React.forwardRef<HTMLTableElement, ReactTableProps>(
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
      renderRowSubComponent,
      isLoading,
      loadingIndicator = <Progress.Circular variant='indeterminate' />,
      children,
      // HTMLDiv Props
      ...delegated
    } = props

    const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
      typeof TableToolbar
    >(children, TableToolbar)

    const {child: footer} = pickChild<typeof TableFooter>(
      childrenWithoutToolbar,
      TableFooter,
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

    const tableRows = table.getRowModel().rows ?? []

    return (
      <CssInjection css={css} childrenRef={tableRef}>
        <div {...delegated}>
          {toolbar && <>{toolbar}</>}
          <div className={styles.cdgTable}>
            <table ref={tableRef} role='table'>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableHeaderRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableColumnHeader
                          key={header.id}
                          headerProps={header}
                          tableOption={table}
                        />
                      )
                    })}
                  </TableHeaderRow>
                ))}
              </thead>
              {
                <tbody>
                  {tableRows.length ? (
                    tableRows.map((row) => {
                      return (
                        <>
                          <TableRow
                            key={row.id}
                            isSelected={row.getIsSelected()}
                            isExpanded={row.getIsExpanded()}
                          >
                            {row.getVisibleCells().map((cell) => {
                              return (
                                <TableCell
                                  key={cell.id}
                                  cell={cell}
                                  row={row}
                                />
                              )
                            })}
                          </TableRow>
                          <ExpandableRow
                            colSpan={table.getAllLeafColumns()?.length}
                            isExpanded={
                              row.getIsExpanded() &&
                              renderRowSubComponent !== undefined
                            }
                          >
                            {renderRowSubComponent?.(row.original)}
                          </ExpandableRow>
                        </>
                      )
                    })
                  ) : isLoading ? (
                    <LoadingComponent
                      colSpan={table.getAllLeafColumns()?.length}
                      loadingIndicator={loadingIndicator}
                    />
                  ) : (
                    <NoDataComponent
                      colSpan={table.getAllLeafColumns()?.length}
                    ></NoDataComponent>
                  )}
                </tbody>
              }
            </table>
          </div>
          {footer && <>{footer}</>}
        </div>
      </CssInjection>
    )
  },
)

export default ReactTable as typeof ReactTable & {
  Toolbar: typeof TableToolbar
  Footer: typeof TableFooter
  Checkbox: typeof TableCheckbox
  ProgressPercentage: typeof ProgressPercentage
}
