import {Column, Table} from '@tanstack/react-table'
import React, {forwardRef, useState} from 'react'
import {Typography} from '..'
import Button from '../button'
import Popover from '../popover'
import TextField from '../textfield'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-column-header-filter.module.css'

interface Props<TData, TValue> {
  column: Column<TData, TValue>
  table: Table<TData>
  css?: unknown
  className?: string
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

  return (
    <CssInjection css={css} childrenRef={filterRef}>
      <Popover
        isOpen={isFiltering}
        anchor={
          <Button
            variant='ghost'
            onClick={(e) => {
              e.stopPropagation()
              setIsFiltering(!isFiltering)
            }}
          >
            <svg width='24' height='26' viewBox='0 0 28 23' fill='currentColor'>
              <path d='M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z'></path>
            </svg>
          </Button>
        }
        direction='bottom-end'
      >
        <div
          className={`${styles.cdgTableHeaderFilter} ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {typeof firstValue === 'number' ? (
            <div className={styles.numberContainer}>
              <TextField
                type='number'
                ref={ref}
                value={(columnFilterValue as [number, number])?.[0] ?? ''}
                onChange={(value) =>
                  column.setFilterValue((old: [number, number]) => [
                    value,
                    old?.[1],
                  ])
                }
                placeholder={`Min`}
                autoFocus
              />

              <Typography.Label css={{width: 'auto', marginInline: '$2'}}>
                &#8212;
              </Typography.Label>

              <TextField
                type='number'
                ref={ref}
                value={(columnFilterValue as [number, number])?.[1] ?? ''}
                onChange={(value) =>
                  column.setFilterValue((old: [number, number]) => [
                    old?.[0],
                    value,
                  ])
                }
                placeholder={`Max`}
              />
            </div>
          ) : (
            <TextField
              ref={ref}
              value={(columnFilterValue ?? '') as string}
              onChange={(value) => column.setFilterValue(value)}
              placeholder={`Search...`}
              autoFocus
            />
          )}
        </div>
      </Popover>
    </CssInjection>
  )
})

export default HeaderColumnFilter
