import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import ReactTableCell from './react-table-cell'
import ReactTableColumnHeader from './react-table-column-header'
import ReactTableFooter from './react-table-footer'
import ReactTableHeaderRow from './react-table-header-row'
import ReactTableRow from './react-table-row'
import ReactTableRowGroup from './react-table-row-group'
import {
  default as ReactTableToolbar,
  default as TableToolbar,
} from './react-table-toolbar'
import {StyledReactTable, StyledReactTableWrapper} from './react-table.styles'

export type ReactTableProps = any

const ReactTable = React.forwardRef<HTMLTableElement, ReactTableProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
      // AriaTableProps
      selectionMode = 'none',
      columns = [],
      data = [],
      ...ariaSafeProps
    } = props

    const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
      typeof TableToolbar
    >(children, TableToolbar)

    const {child: footer, rest: childrenWithoutToolbarAndFooter} = pickChild<
      typeof ReactTableFooter
    >(childrenWithoutToolbar, ReactTableFooter)

    const ariaProps = {
      children: childrenWithoutToolbarAndFooter,
      selectionMode,
      ...ariaSafeProps,
    }

    const tableRef = useDOMRef<HTMLTableElement>(ref)

    // React-table
    const rerender = React.useReducer(() => ({}), {})[1]

    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
      data,
      columns,
      state: {
        sorting,
      },
      columnResizeMode: 'onChange',
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      debugTable: true,
    })
    return (
      <StyledReactTableWrapper css={css}>
        {toolbar && <>{toolbar}</>}
        <StyledReactTable>
          <table
            ref={tableRef}
            {...{
              style: {
                width: table.getCenterTotalSize(),
              },
            }}
          >
            <ReactTableRowGroup as='thead'>
              {table.getHeaderGroups().map((headerGroup) => (
                <ReactTableHeaderRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    debugger
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
            <ReactTableRowGroup as='tbody'>
              {table.getRowModel().rows.map((row) => {
                return (
                  <ReactTableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return <ReactTableCell key={cell.id} cell={cell} />
                    })}
                  </ReactTableRow>
                )
              })}
            </ReactTableRowGroup>
          </table>
        </StyledReactTable>
        {footer && <>{footer}</>}
      </StyledReactTableWrapper>
    )
  },
)

type ReactComposableTable = typeof ReactTable & {
  Toolbar: typeof ReactTableToolbar
  Footer: typeof ReactTableFooter
}
;(ReactTable as ReactComposableTable).Toolbar = ReactTableToolbar
;(ReactTable as ReactComposableTable).Footer = ReactTableFooter

export default ReactTable as ReactComposableTable
