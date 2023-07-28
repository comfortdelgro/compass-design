import {
  ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

import React, {useEffect, useState} from 'react'
import DataGridCell from '../data-grid/data-grid-cell'
import DataGridCheckbox from '../data-grid/data-grid-checkbox'
import DataGridCheckboxCell from '../data-grid/data-grid-checkbox-cell'
import DataGridColumnHeader from '../data-grid/data-grid-column-header'
import DataGridFooter from '../data-grid/data-grid-footer'
import DataGridHeaderRow from '../data-grid/data-grid-header-row'
import {NoDataComponent} from '../data-grid/data-grid-nodata'
import DataGridRow from '../data-grid/data-grid-row'
import DataGridRowGroup from '../data-grid/data-grid-row-group'
import {
  default as DataGridToolbar,
  default as TableToolbar,
} from '../data-grid/data-grid-toolbar'
import {StyledDataGrid} from '../data-grid/data-grid.styles'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {ExpandableRow} from './expandable/ExpandableRow'
import {StyledReactTableWrapper} from './react-table.styles'

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
  renderRowSubComponent?: (row: T) => React.JSX.Element
}

export type ReactTableProps<T = any> = Props<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const ReactTable = React.forwardRef<HTMLTableElement, ReactTableProps>(
  (props, ref) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [rowSelection, setRowSelection] = useState({})

    const {
      // StyledComponentProps
      css = {},
      data,
      columns,
      options,
      onManualSorting,
      onChangeRowSelection,
      children,
      renderRowSubComponent,
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
        rowSelection,
        sorting: options.initialSortBy ? options.initialSortBy : sorting,
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
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
      <StyledReactTableWrapper css={css} {...delegated}>
        {toolbar && <>{toolbar}</>}
        <StyledDataGrid>
          <table ref={tableRef} role='table'>
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
                {tableRows.length ? (
                  tableRows.map((row) => {
                    return (
                      <>
                        <DataGridRow
                          key={row.id}
                          isSelected={row.getIsSelected()}
                          isExpanded={row.getIsExpanded()}
                        >
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <DataGridCell
                                key={cell.id}
                                cell={cell}
                                row={row}
                              />
                            )
                          })}
                        </DataGridRow>
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
              </DataGridRowGroup>
            }
          </table>
        </StyledDataGrid>
        {footer && <>{footer}</>}
      </StyledReactTableWrapper>
    )
  },
)

export default ReactTable as typeof ReactTable & {
  Toolbar: typeof DataGridToolbar
  Footer: typeof DataGridFooter
  Checkbox: typeof DataGridCheckbox
  CheckboxCell: typeof DataGridCheckboxCell
}
