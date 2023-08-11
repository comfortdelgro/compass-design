import {Column, Table} from '@tanstack/react-table'
import React, {forwardRef, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {
  StyledFilter,
  StyledFilterInput,
} from './table-v2-column-header-filter.styles'

interface Props<TData, TValue> extends StyledComponentProps {
  column: Column<TData, TValue>
  table: Table<TData>
}

export type HeaderColumnFilterProps<TData = any, TValue = unknown> = Props<
  TData,
  TValue
> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>

const HeaderColumnFilter = forwardRef<
  HTMLInputElement,
  HeaderColumnFilterProps
>(({column, table}, ref) => {
  const [isFiltering, setIsFiltering] = useState(false)
  const handleClickOrTouchFilter = () => {
    setIsFiltering(!isFiltering)
  }

  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return (
    <StyledFilter>
      <svg
        onClick={handleClickOrTouchFilter}
        onTouchStart={handleClickOrTouchFilter}
        width='24'
        height='26'
        viewBox='0 0 28 23'
        fill='currentColor'
      >
        <path d='M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z'></path>
      </svg>
      <StyledFilterInput isFiltering={isFiltering}>
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
      </StyledFilterInput>
    </StyledFilter>
  )
})

export default HeaderColumnFilter
