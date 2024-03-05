'use client'

import React, {useCallback} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import Ellipsis from './components/Ellipsis'
import ItemCounting from './components/ItemCounting'
import RowsCounting from './components/RowsCounting'
import {usePagination} from './pagination.hooks'
import styles from './styles/pagination.module.css'

interface Props {
  page?: number
  total?: number
  initialPage?: number
  onChange?: (page: number) => void
  count?: number
  rowsPerPage?: number
  rowsOptions?: number[]
  onRowsPerPageChange?: (rows: number) => void
  css?: unknown
}

export type PaginationProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      count,
      css = {},
      // ComponentProps
      page = 1,
      total = 1,
      initialPage = 1,
      rowsPerPage,
      rowsOptions = [5, 10, 15, 20, 25],
      onChange,
      onRowsPerPageChange,
      ...htmlProps
    } = props
    const paginationRef = useDOMRef<HTMLDivElement>(ref)
    const {items, active, setPage, next, previous} = usePagination({
      page,
      total,
      initialPage,
      onChange,
    })

    const renderItem = useCallback(
      (item: (typeof items)[number], index: number) => {
        if (item === 'dots') {
          const isBefore = index < items.indexOf(active)

          return (
            <Ellipsis
              key={index}
              aria-label={isBefore ? 'previous 5 items' : 'next 5 items'}
              onClick={() => {
                if (isBefore) {
                  setPage(active - 5 >= 1 ? active - 5 : 1)
                } else {
                  setPage(active + 5 <= total ? active + 5 : total)
                }
              }}
            />
          )
        }
        const itemStyle =
          item.toString().length > 3
            ? {
                padding: '0 4px',
              }
            : undefined

        return (
          <div
            className={[
              styles.paginationItem,
              item === active && styles.paginationItemActive,
              'cdg-pagination-item',
            ]
              .filter(Boolean)
              .join(' ')}
            key={index}
            style={itemStyle}
            onClick={() => item !== active && setPage(item)}
            aria-label={`page ${item}`}
            aria-current={item === active}
          >
            {item}
          </div>
        )
      },
      [active, items, setPage, total],
    )

    const previousPageClasses = [
      styles.paginationItem,
      active === 1 && styles.paginationItemDisabled,
      'cdg-pagination-item',
    ]
      .filter(Boolean)
      .join(' ')

    const nextPageClasses = [
      styles.paginationItem,
      active === total && styles.paginationItemDisabled,
      'cdg-pagination-item',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={paginationRef}>
        <div
          className={`${styles.pagination} cdg-pagination`}
          ref={paginationRef}
          role='navigation'
          aria-label='pagination'
          {...htmlProps}
        >
          {rowsPerPage && (
            <RowsCounting
              rowsOptions={rowsOptions}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={onRowsPerPageChange}
            />
          )}
          {count && (
            <ItemCounting
              count={count}
              page={page}
              rowsPerPage={rowsPerPage ?? 0}
            />
          )}
          <div
            onClick={previous}
            aria-label='previous page'
            className={previousPageClasses}
          >
            <svg
              viewBox='0 0 320 512'
              className={`${styles.paginationItemSvg} cdg-pagination-item-svg`}
            >
              <path
                fill={active === 1 ? '#D2D0CE' : '#201F1E'}
                d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
              ></path>
            </svg>
          </div>
          {items.map(renderItem)}
          <div
            onClick={next}
            aria-label='next page'
            className={nextPageClasses}
          >
            <svg
              viewBox='0 0 320 512'
              className={`${styles.paginationItemSvg} cdg-pagination-item-svg`}
            >
              <path
                fill={active === total ? '#D2D0CE' : '#201F1E'}
                d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'
              ></path>
            </svg>
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default Pagination
