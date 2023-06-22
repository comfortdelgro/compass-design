import {Column, Table} from '@tanstack/react-table'
import React, {forwardRef} from 'react'
import {StyledFilter} from './data-grid-column-header-filter.styles'

interface Props {
  column: Column<any, any>
  table: Table<any>
  setFiltering: any
}

const Filter = forwardRef<HTMLInputElement, Props>(({column, table}, ref) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return (
    <StyledFilter>
      {typeof firstValue === 'number' ? (
        <div className='flex space-x-2'>
          <input
            type='number'
            ref={ref}
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
            ref={ref}
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
          ref={ref}
          value={(columnFilterValue ?? '') as string}
          onChange={(e) => column.setFilterValue(e.target.value)}
          placeholder={`Search...`}
          className='w-36 border shadow rounded'
        />
      )}
    </StyledFilter>
  )
})

export default Filter
