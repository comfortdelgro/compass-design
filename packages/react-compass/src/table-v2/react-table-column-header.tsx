import {Column, flexRender, Header, Table} from '@tanstack/react-table'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledReactTableColumnHeader,
  StyledReactTableSortingIndicator,
} from './react-table-column-header.styles'
import ReactTableResizer from './react-table-resizer'

interface Props {
  headerProps: Header<any, unknown>
}

const ReactTableColumnHeader = React.forwardRef<HTMLTableCellElement, Props>(
  ({headerProps}, ref) => {
    const enableResizing = headerProps?.column?.columnDef?.enableResizing
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)

    return (
      <StyledReactTableColumnHeader
        ref={tableRowRef}
        {...{
          key: headerProps.id,
          colSpan: headerProps.colSpan,
          style: {
            width: headerProps.getSize(),
          },
        }}
      >
        <div
          {...{
            onClick: headerProps.column.getToggleSortingHandler(),
          }}
          style={{
            cursor: headerProps.column.getCanSort() ? 'pointer' : 'unset',
            userSelect: headerProps.column.getCanSort() ? 'none' : 'unset',
          }}
        >
          {headerProps.isPlaceholder ? null : (
            <div
              style={
                headerProps.column.getCanSort()
                  ? {
                      display: 'flex',
                      minHeight: '30px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }
                  : {}
              }
            >
              {flexRender(
                headerProps.column.columnDef.header,
                headerProps.getContext(),
              )}
              {{
                asc: (
                  <StyledReactTableSortingIndicator
                    aria-hidden='true'
                    style={{
                      visibility: 'visible',
                    }}
                  >
                    <svg width='24' height='26' viewBox='0 0 24 26' fill='none'>
                      <path
                        d='M12.8476 4.34166C12.379 3.88611 11.6181 3.88611 11.1495 4.34166L6.35152 9.00651C6.00666 9.34179 5.90546 9.84108 6.09288 10.2784C6.2803 10.7157 6.71512 11 7.20242 11H16.7984C17.282 11 17.7205 10.7157 17.908 10.2784C18.0954 9.84108 17.9904 9.34179 17.6493 9.00651L12.8513 4.34166H12.8476Z'
                        fill={['#A19F9D', '#EDEBE9'][0]}
                      />
                      <path
                        d='M11.1524 21.3277C11.621 21.7834 12.3819 21.7834 12.8505 21.3277L17.6485 16.661C17.9933 16.3256 18.0945 15.8261 17.9071 15.3886C17.7197 14.9511 17.2849 14.6667 16.7976 14.6667L7.20159 14.6704C6.71804 14.6704 6.27947 14.9548 6.09205 15.3923C5.90463 15.8298 6.00958 16.3292 6.35069 16.6647L11.1487 21.3313L11.1524 21.3277Z'
                        fill={['#A19F9D', '#EDEBE9'][1]}
                      />
                    </svg>
                  </StyledReactTableSortingIndicator>
                ),
                desc: (
                  <StyledReactTableSortingIndicator
                    aria-hidden='true'
                    style={{
                      visibility: 'visible',
                    }}
                  >
                    <svg width='24' height='26' viewBox='0 0 24 26' fill='none'>
                      <path
                        d='M12.8476 4.34166C12.379 3.88611 11.6181 3.88611 11.1495 4.34166L6.35152 9.00651C6.00666 9.34179 5.90546 9.84108 6.09288 10.2784C6.2803 10.7157 6.71512 11 7.20242 11H16.7984C17.282 11 17.7205 10.7157 17.908 10.2784C18.0954 9.84108 17.9904 9.34179 17.6493 9.00651L12.8513 4.34166H12.8476Z'
                        fill={['#EDEBE9', '#A19F9D'][0]}
                      />
                      <path
                        d='M11.1524 21.3277C11.621 21.7834 12.3819 21.7834 12.8505 21.3277L17.6485 16.661C17.9933 16.3256 18.0945 15.8261 17.9071 15.3886C17.7197 14.9511 17.2849 14.6667 16.7976 14.6667L7.20159 14.6704C6.71804 14.6704 6.27947 14.9548 6.09205 15.3923C5.90463 15.8298 6.00958 16.3292 6.35069 16.6647L11.1487 21.3313L11.1524 21.3277Z'
                        fill={['#EDEBE9', '#A19F9D'][1]}
                      />
                    </svg>
                  </StyledReactTableSortingIndicator>
                ),
              }[headerProps.column.getIsSorted() as string] ?? null}
            </div>
          )}
          {enableResizing && <ReactTableResizer headerProps={headerProps} />}
        </div>
      </StyledReactTableColumnHeader>
    )
  },
)

function Filter({
  column,
  table,
}: {
  column: Column<any, any>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className='flex space-x-2'>
      <input
        type='number'
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className='w-24 border shadow rounded'
      />
      <input
        type='number'
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className='w-24 border shadow rounded'
      />
    </div>
  ) : (
    <input
      type='text'
      value={(columnFilterValue ?? '') as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className='w-36 border shadow rounded'
    />
  )
}

export default ReactTableColumnHeader
