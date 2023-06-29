import {flexRender, Header, Table} from '@tanstack/react-table'
import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import HeaderColumnFilter from './data-grid-column-header-filter'
import {
  StyledDataGridColumnHeader,
  StyledDataGridColumnHeaderContent,
  StyledDataGridSortingIndicator,
} from './data-grid-column-header.styles'
import DataGridResizer from './data-grid-resizer'

interface Props<TData, TValue> extends StyledComponentProps {
  headerProps: Header<TData, TValue>
  tableOption: Table<TData>
  css?: CSS
}
export type DataGridColumnHeaderProps<TData = any, TValue = unknown> = Props<
  TData,
  TValue
> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>

const DataGridColumnHeader = React.forwardRef<
  HTMLTableCellElement,
  DataGridColumnHeaderProps
>(({headerProps, tableOption, css = {}}, ref) => {
  const enableResizing = headerProps?.column?.columnDef?.enableResizing
  const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)
  const sortDirection = headerProps.column.getIsSorted()
  const directions = {
    asc: <ArrowUpIcon />,
    desc: <ArrowDownIcon />,
  }
  return (
    <StyledDataGridColumnHeader
      ref={tableRowRef}
      key={headerProps.id}
      colSpan={headerProps.colSpan}
      onClick={headerProps.column.getToggleSortingHandler()}
      css={{
        width: headerProps.getSize(),
        ...css,
      }}
    >
      {headerProps.isPlaceholder ? null : (
        <StyledDataGridColumnHeaderContent
          canSort={headerProps.column.getCanSort()}
        >
          {
            <div onClick={headerProps.column.getToggleGroupingHandler()}>
              {headerProps.column.getIsGrouped() ? (
                <span>({headerProps.column.getGroupedIndex()})</span>
              ) : (
                <></>
              )}
              {flexRender(
                headerProps.column.columnDef.header,
                headerProps.getContext(),
              )}
            </div>
          }
          {sortDirection && directions[sortDirection]}
          {headerProps.column.getCanFilter() ? (
            <HeaderColumnFilter
              column={headerProps.column}
              table={tableOption}
            />
          ) : null}
        </StyledDataGridColumnHeaderContent>
      )}
      {enableResizing && (
        <DataGridResizer resizeHandler={headerProps.getResizeHandler()} />
      )}
    </StyledDataGridColumnHeader>
  )
})
const ArrowDownIcon = () => (
  <StyledDataGridSortingIndicator aria-hidden='true'>
    <svg width='24' height='26' viewBox='0 0 24 26' fill='none'>
      <path
        d='M12.8476 4.34166C12.379 3.88611 11.6181 3.88611 11.1495 4.34166L6.35152 9.00651C6.00666 9.34179 5.90546 9.84108 6.09288 10.2784C6.2803 10.7157 6.71512 11 7.20242 11H16.7984C17.282 11 17.7205 10.7157 17.908 10.2784C18.0954 9.84108 17.9904 9.34179 17.6493 9.00651L12.8513 4.34166H12.8476Z'
        fill={'#EDEBE9'}
      />
      <path
        d='M11.1524 21.3277C11.621 21.7834 12.3819 21.7834 12.8505 21.3277L17.6485 16.661C17.9933 16.3256 18.0945 15.8261 17.9071 15.3886C17.7197 14.9511 17.2849 14.6667 16.7976 14.6667L7.20159 14.6704C6.71804 14.6704 6.27947 14.9548 6.09205 15.3923C5.90463 15.8298 6.00958 16.3292 6.35069 16.6647L11.1487 21.3313L11.1524 21.3277Z'
        fill={'#A19F9D'}
      />
    </svg>
  </StyledDataGridSortingIndicator>
)
const ArrowUpIcon = () => (
  <StyledDataGridSortingIndicator aria-hidden='true'>
    <svg width='24' height='26' viewBox='0 0 24 26' fill='none'>
      <path
        d='M12.8476 4.34166C12.379 3.88611 11.6181 3.88611 11.1495 4.34166L6.35152 9.00651C6.00666 9.34179 5.90546 9.84108 6.09288 10.2784C6.2803 10.7157 6.71512 11 7.20242 11H16.7984C17.282 11 17.7205 10.7157 17.908 10.2784C18.0954 9.84108 17.9904 9.34179 17.6493 9.00651L12.8513 4.34166H12.8476Z'
        fill={'#A19F9D'}
      />
      <path
        d='M11.1524 21.3277C11.621 21.7834 12.3819 21.7834 12.8505 21.3277L17.6485 16.661C17.9933 16.3256 18.0945 15.8261 17.9071 15.3886C17.7197 14.9511 17.2849 14.6667 16.7976 14.6667L7.20159 14.6704C6.71804 14.6704 6.27947 14.9548 6.09205 15.3923C5.90463 15.8298 6.00958 16.3292 6.35069 16.6647L11.1487 21.3313L11.1524 21.3277Z'
        fill={'#EDEBE9'}
      />
    </svg>
  </StyledDataGridSortingIndicator>
)
export default DataGridColumnHeader
