import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'
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

export interface Options {
  enableSorting: boolean
  enableMultiSort: boolean
  columnResizeMode: 'onChange' | 'onEnd'
}

export type OptionType = Options
export interface Props<T> extends StyledComponentProps {
  data: T[]
  columns: Array<ColumnDef<T>>
  options: OptionType
  children: React.ReactNode
}

export type ReactTableProps<T = any> = Props<T>

const ReactTable = React.forwardRef<HTMLTableElement, ReactTableProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      data,
      columns,
      options,
      children,
      // HTMLDiv Props
      ...delegated
    } = props

    const [sorting, setSorting] = React.useState<SortingState>([])

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
        sorting,
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      debugTable: true,
      data: data,
      columns: columns,
      //enable sorting
      enableSorting: options.enableSorting,
      enableMultiSort: options.enableMultiSort,
      columnResizeMode: 'onChange',
    })

    return (
      <StyledReactTableWrapper css={css}>
        {toolbar && <>{toolbar}</>}
        <StyledReactTable {...delegated}>
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
                {table.getRowModel().rows.length === 0 ||
                table.getRowModel().rows === undefined ? (
                  <NoDataComponent
                    colSpan={table.getAllLeafColumns()?.length}
                  ></NoDataComponent>
                ) : (
                  table.getRowModel().rows.map((row) => {
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
