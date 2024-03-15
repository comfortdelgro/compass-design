/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  ColumnFiltersState,
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
import Progress from '../progress'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'

import CssInjection from '../utils/objectToCss/CssInjection'
import ExpandableRow from './expandable/expandable-row'
import LoadingComponent from './loading/loading-component'
import styles from './styles/table.module.css'
import TableCell from './table-cell'
import TableColumnHeader from './table-column-header'
import TableFooter from './table-footer'
import TableHeaderRow from './table-header-row'
import {NoDataComponent} from './table-nodata'
import TableRow from './table-row'
import TableToolbar from './table-toolbar'
import {Props} from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableProps<T = any> = Props<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [grouping, setGrouping] = React.useState<GroupingState>([])
  const {
    // StyledComponentProps
    css = {},
    data,
    columns,
    options,
    onManualSorting,
    onManualFilter,
    onChangeRowSelection,
    renderRowSubComponent,
    isLoading,
    emptyComponent,
    loadingIndicator = <Progress.Circular variant='indeterminate' />,
    children,
    // HTMLDiv Props
    ...htmlProps
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
    data: data,
    state: {
      columnFilters,
      grouping,
      rowSelection,
      sorting: options.initialSortBy ? options.initialSortBy : sorting,
    },
    columns: columns as ColumnDef<any, unknown>[],
    isMultiSortEvent: () => true,
    onSortingChange: setSorting,
    onGroupingChange: setGrouping,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...options,
  })

  useEffect(() => {
    const selectedRowModel = table.getSelectedRowModel().rows
    const selectedRowOriginals = selectedRowModel.map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return item.original
    })
    onChangeRowSelection?.(selectedRowOriginals)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection])

  useEffect(() => {
    if (options.resetSelectionWhenDataChanged) {
      table.toggleAllRowsSelected(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.resetSelectionWhenDataChanged, table, JSON.stringify(data)])

  useEffect(() => {
    onManualSorting?.(sorting)
  }, [onManualSorting, sorting])

  useEffect(() => {
    onManualFilter?.(columnFilters)
  }, [columnFilters, onManualFilter])

  const tableRows = table.getRowModel().rows ?? []

  return (
    <CssInjection css={css} childrenRef={tableRef}>
      <div {...htmlProps}>
        {toolbar && <>{toolbar}</>}
        <div className={styles.cdgTableContainer}>
          <table ref={tableRef} role='table' className={styles.cdgTable}>
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
                              <TableCell key={cell.id} cell={cell} row={row} />
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
                    content={emptyComponent}
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
})

export default Table
