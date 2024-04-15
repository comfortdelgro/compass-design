/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  ColumnFiltersState,
  ExpandedState,
  GroupingState,
  SortingState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import React, {useEffect, useState} from 'react'
import {CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import ExpandableRow from './components/table-expandable-row'
import styles from './styles/table.module.css'
import TableCell from './table-cell'
import TableColumnHeader from './table-column-header'
import EmptyDataComponent from './table-empty-data'
import TableFooter from './table-footer'
import TableHeaderRow from './table-header-row'
import TableLoading from './table-loading'
import TableRow from './table-row'
import TableToolbar from './table-toolbar'
import {Props} from './utils/types'

export type TableProps<T = unknown> = Props<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [grouping, setGrouping] = React.useState<GroupingState>([])
  const [expanded, setExpanded] = React.useState<ExpandedState>({})
  const {
    css = {},
    data,
    columns,
    options,
    children,
    isLoading,
    emptyComponent,
    loadingIndicator,
    onManualSorting,
    onManualFilter,
    onManualExpanded,
    onManualGrouping,
    onChangeRowSelection,
    renderRowSubComponent,
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
      grouping,
      rowSelection,
      columnFilters,
      sorting: options.initialSortBy ? options.initialSortBy : sorting,
      expanded: options.initialExpanded ? options.initialExpanded : expanded,
    },
    columns: columns as ColumnDef<unknown, any>[],
    isMultiSortEvent: () => true,
    onSortingChange: setSorting,
    onGroupingChange: setGrouping,
    onExpandedChange: setExpanded,
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
      return item.original
    })
    onChangeRowSelection?.(selectedRowOriginals)
  }, [rowSelection])

  useEffect(() => {
    if (options.resetSelectionWhenDataChanged) {
      table.toggleAllRowsSelected(false)
    }
  }, [options.resetSelectionWhenDataChanged, table, JSON.stringify(data)])

  useEffect(() => {
    onManualExpanded?.(expanded)
  }, [onManualExpanded, expanded])

  useEffect(() => {
    onManualSorting?.(sorting)
  }, [onManualSorting, sorting])

  useEffect(() => {
    onManualGrouping?.(grouping)
  }, [onManualGrouping, grouping])

  useEffect(() => {
    onManualFilter?.(columnFilters)
  }, [onManualFilter, columnFilters])

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
                  tableRows.map((row, index) => {
                    const expended =
                      row.getIsExpanded() && renderRowSubComponent !== undefined
                    return (
                      <React.Fragment>
                        <TableRow
                          key={row.id}
                          isSelected={row.getIsSelected()}
                          isExpanded={row.getIsExpanded()}
                          className={`cdg-table-row-${
                            (index + 1) % 2 === 0 ? 'even' : 'odd'
                          }`}
                        >
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <TableCell key={cell.id} cell={cell} row={row} />
                            )
                          })}
                        </TableRow>
                        {expended && (
                          <ExpandableRow
                            colSpan={table.getAllLeafColumns()?.length}
                            isExpanded={expended}
                          >
                            {renderRowSubComponent?.(row.original)}
                          </ExpandableRow>
                        )}
                      </React.Fragment>
                    )
                  })
                ) : isLoading ? (
                  <TableLoading
                    colSpan={table.getAllLeafColumns()?.length}
                    loadingIndicator={loadingIndicator}
                  />
                ) : (
                  <EmptyDataComponent
                    colSpan={table.getAllLeafColumns()?.length}
                    content={emptyComponent}
                  />
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
