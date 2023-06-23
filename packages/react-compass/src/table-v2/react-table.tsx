import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import React, {useEffect, useState} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import ReactTableCell from './react-table-cell'
import ReactTableCheckbox from './react-table-checkbox'
import ReactTableCheckboxCell from './react-table-checkbox-cell'
import ReactTableColumnHeader from './react-table-column-header'
import ReactTableFooter from './react-table-footer'
import ReactTableHeaderRow from './react-table-header-row'
import {NoDataComponent} from './react-table-nodata'
import ReactTableRow from './react-table-row'
import ReactTableRowGroup from './react-table-row-group'
import {
  default as ReactTableToolbar,
  default as TableToolbar,
} from './react-table-toolbar'
import {StyledReactTable, StyledReactTableWrapper} from './react-table.styles'

export interface Options<TData> {
  enableSorting?: boolean
  enableMultiSort?: boolean
  manualSorting?: boolean
  columnResizeMode?: 'onChange' | 'onEnd'
  initialSortBy?: SortingState
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean)
}

export type OptionType<TData> = Options<TData>
export interface Props<T> extends StyledComponentProps {
  data: T[]
  columns: Array<ColumnDef<T>>
  options: OptionType<T>
  onManualSorting?: (sortingField: SortingState) => void
  onChangeRowSelection?: (selectionRows: T[]) => void
  children: React.ReactNode
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
      // HTMLDiv Props
      ...delegated
    } = props

    const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
      typeof TableToolbar
    >(children, TableToolbar)

    const {child: footer} = pickChild<typeof ReactTableFooter>(
      childrenWithoutToolbar,
      ReactTableFooter,
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
        <StyledReactTable>
          <table ref={tableRef}>
            <ReactTableRowGroup as='thead'>
              {table.getHeaderGroups().map((headerGroup) => (
                <ReactTableHeaderRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <ReactTableColumnHeader
                        key={header.id}
                        headerProps={header}
                      />
                    )
                  })}
                </ReactTableHeaderRow>
              ))}
            </ReactTableRowGroup>
            {
              <ReactTableRowGroup as='tbody'>
                {tableRows.length ? (
                  tableRows.map((row) => {
                    return (
                      <ReactTableRow
                        key={row.id}
                        isSelected={row.getIsSelected()}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return <ReactTableCell key={cell.id} cell={cell} />
                        })}
                      </ReactTableRow>
                    )
                  })
                ) : (
                  <NoDataComponent
                    colSpan={table.getAllLeafColumns()?.length}
                  ></NoDataComponent>
                )}
              </ReactTableRowGroup>
            }
          </table>
        </StyledReactTable>
        {footer && <>{footer}</>}
      </StyledReactTableWrapper>
    )
  },
)

export default ReactTable as typeof ReactTable & {
  Toolbar: typeof ReactTableToolbar
  Footer: typeof ReactTableFooter
  Checkbox: typeof ReactTableCheckbox
  CheckboxCell: typeof ReactTableCheckboxCell
}
