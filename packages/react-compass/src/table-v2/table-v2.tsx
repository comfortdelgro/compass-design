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
// import DataGridColumnHeader from '../data-grid/data-grid-column-header'
// import DataGridFooter from '../data-grid/data-grid-footer'
// import DataGridHeaderRow from '../data-grid/data-grid-header-row'
import {NoDataComponent} from './table-v2-nodata'
// import DataGridRow from '../data-grid/data-grid-row'
// import DataGridRowGroup from '../data-grid/data-grid-row-group'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {ExpandableRow} from './expandable/ExpandableRow'
import TableV2Cell from './table-v2-cell'
import TableV2Checkbox from './table-v2-checkbox'
import TableV2CheckboxCell from './table-v2-checkbox-cell'
import TableV2ColumnHeader from './table-v2-column-header'
import TableV2Footer from './table-v2-footer'
import TableV2HeaderRow from './table-v2-header-row'
import ProgressPercentage from './table-v2-progress'
import TableV2Row from './table-v2-row'
import TableV2RowGroup from './table-v2-row-group'
import TableV2Toolbar from './table-v2-toolbar'
import {StyledTableV2, StyledTableV2Wrapper} from './table-v2.styles'

export interface Options<TData> {
  enableSorting?: boolean
  enableMultiSort?: boolean
  manualSorting?: boolean
  columnResizeMode?: 'onChange' | 'onEnd'
  initialSortBy?: SortingState
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean)
}

export type OptionType<TData> = Options<TData>

// can expand all?
// conditionally expandable row
// is custom row defined?
export interface Props<T> extends StyledComponentProps {
  data: T[]
  columns: Array<ColumnDef<T>>
  options: OptionType<T>
  onManualSorting?: (sortingField: SortingState) => void
  onChangeRowSelection?: (selectionRows: T[]) => void
  children: React.ReactNode
  onUpdateData?: (newData: object) => void
  renderRowSubComponent?: (row: T) => React.JSX.Element
}

export type ReactTableProps<T = any> = Props<T> &
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
      onUpdateData,
      renderRowSubComponent,
      children,
      // HTMLDiv Props
      ...delegated
    } = props

    const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
      typeof TableV2Toolbar
    >(children, TableV2Toolbar)

    const {child: footer} = pickChild<typeof TableV2Footer>(
      childrenWithoutToolbar,
      TableV2Footer,
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
      <StyledTableV2Wrapper css={css} {...delegated}>
        {toolbar && <>{toolbar}</>}
        <StyledTableV2>
          <table ref={tableRef} role='table'>
            <TableV2RowGroup as='thead'>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableV2HeaderRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableV2ColumnHeader
                        key={header.id}
                        headerProps={header}
                        tableOption={table}
                      />
                    )
                  })}
                </TableV2HeaderRow>
              ))}
            </TableV2RowGroup>
            {
              <TableV2RowGroup as='tbody'>
                {tableRows.length ? (
                  tableRows.map((row) => {
                    return (
                      <>
                        <TableV2Row
                          key={row.id}
                          isSelected={row.getIsSelected()}
                          isExpanded={row.getIsExpanded()}
                        >
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <TableV2Cell
                                key={cell.id}
                                cell={cell}
                                row={row}
                              />
                            )
                          })}
                        </TableV2Row>
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
                ) : (
                  <NoDataComponent
                    colSpan={table.getAllLeafColumns()?.length}
                  ></NoDataComponent>
                )}
              </TableV2RowGroup>
            }
          </table>
        </StyledTableV2>
        {footer && <>{footer}</>}
      </StyledTableV2Wrapper>
    )
  },
)

export default ReactTable as typeof ReactTable & {
  Toolbar: typeof TableV2Toolbar
  Footer: typeof TableV2Footer
  Checkbox: typeof TableV2Checkbox
  CheckboxCell: typeof TableV2CheckboxCell
  ProgressPercentage: typeof ProgressPercentage
}
