import {Column, Table} from '@tanstack/react-table'
import React, {forwardRef, useState} from 'react'
import {Typography} from '..'
import Button from '../button'
import Popover from '../popover'
import TextField from '../textfield'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-column-header-filter.module.css'

interface Props<TData, TValue> {
  css?: CSS
  table: Table<TData>
  column: Column<TData, TValue>
}

export type HeaderColumnFilterProps<TData = unknown, TValue = unknown> = Props<
  TData,
  TValue
> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>

const HeaderColumnFilter = forwardRef<
  HTMLInputElement,
  HeaderColumnFilterProps
>(({column, table, css = {}, className}, ref) => {
  const [isFiltering, setIsFiltering] = useState(false)
  const filterRef = useDOMRef(ref)
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)
  const columnFilterValue = column.getFilterValue()

  const rootClasses = [
    styles.cdgTableHeaderFilter,
    className,
    'cdg-table-column-header-filter',
  ]
    .filter(Boolean)
    .join(' ')

  const handleToggleFiltering = (e) => {
    e.stopPropagation()
    setIsFiltering(!isFiltering)
  }

  const handleNumberChange = (index: number, value: string) => {
    column.setFilterValue((old: [number, number]) => {
      const newValues = [...(old || [])] as [number, number]
      newValues[index] = Number(value)
      return newValues
    })
  }

  const renderNumberFilter = () => (
    <div className={styles.numberContainer}>
      <TextField
        type='number'
        ref={ref}
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(value) => handleNumberChange(0, value as string)}
        placeholder='Min'
        autoFocus
      />
      <Typography.Label css={{width: 'auto', marginInline: '$2'}}>
        &#8212;
      </Typography.Label>
      <TextField
        type='number'
        ref={ref}
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(value) => handleNumberChange(1, value as string)}
        placeholder='Max'
      />
    </div>
  )

  const renderTextFilter = () => (
    <TextField
      ref={ref}
      value={(columnFilterValue ?? '') as string}
      onChange={(value) => column.setFilterValue(value)}
      placeholder='Search...'
      autoFocus
    />
  )

  return (
    <CssInjection css={css} childrenRef={filterRef}>
      <Popover
        isOpen={isFiltering}
        anchor={
          <Button
            variant='ghost'
            type='button'
            isSquare
            size='sm'
            onClick={handleToggleFiltering}
          >
            <svg width='16' height='16' viewBox='0 0 16 16' fill='currentColor'>
              <path
                d='M1.33337 3.58335C1.33337 3.07632 1.75897 2.66669 2.28575 2.66669H13.7143C14.2411 2.66669 14.6667 3.07632 14.6667 3.58335C14.6667 4.09038 14.2411 4.50002 13.7143 4.50002H2.28575C1.75897 4.50002 1.33337 4.09038 1.33337 3.58335ZM3.23814 8.16669C3.23814 7.65966 3.66373 7.25002 4.19052 7.25002H11.8096C12.3364 7.25002 12.7619 7.65966 12.7619 8.16669C12.7619 8.67372 12.3364 9.08335 11.8096 9.08335H4.19052C3.66373 9.08335 3.23814 8.67372 3.23814 8.16669ZM9.9048 12.75C9.9048 13.2571 9.47921 13.6667 8.95242 13.6667H7.04766C6.52087 13.6667 6.09528 13.2571 6.09528 12.75C6.09528 12.243 6.52087 11.8334 7.04766 11.8334H8.95242C9.47921 11.8334 9.9048 12.243 9.9048 12.75Z'
                fill='currentColor'
              />
            </svg>
          </Button>
        }
        direction='bottom-end'
      >
        <div className={rootClasses} onClick={(e) => e.stopPropagation()}>
          {typeof firstValue === 'number'
            ? renderNumberFilter()
            : renderTextFilter()}
        </div>
      </Popover>
    </CssInjection>
  )
})

export default HeaderColumnFilter
