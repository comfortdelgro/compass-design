'use client'

import React, {useCallback, useMemo} from 'react'
import Dropdown from '../dropdown'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
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

const Ellipsis: React.FC<React.HTMLProps<HTMLDivElement>> = ({...props}) => {
  const svgIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='4'
      viewBox='0 0 18 4'
      fill='none'
    >
      <path
        d='M2.04298 3.098C1.68832 3.098 1.39432 2.99067 1.16098 2.776C0.936984 2.552 0.824984 2.27667 0.824984 1.95C0.824984 1.62333 0.936984 1.35267 1.16098 1.138C1.39432 0.914 1.68832 0.802 2.04298 0.802C2.38832 0.802 2.67298 0.914 2.89698 1.138C3.12098 1.35267 3.23298 1.62333 3.23298 1.95C3.23298 2.27667 3.12098 2.552 2.89698 2.776C2.67298 2.99067 2.38832 3.098 2.04298 3.098ZM9.01564 3.098C8.66097 3.098 8.36697 2.99067 8.13364 2.776C7.90964 2.552 7.79764 2.27667 7.79764 1.95C7.79764 1.62333 7.90964 1.35267 8.13364 1.138C8.36697 0.914 8.66097 0.802 9.01564 0.802C9.36097 0.802 9.64564 0.914 9.86964 1.138C10.0936 1.35267 10.2056 1.62333 10.2056 1.95C10.2056 2.27667 10.0936 2.552 9.86964 2.776C9.64564 2.99067 9.36097 3.098 9.01564 3.098ZM15.9883 3.098C15.6336 3.098 15.3396 2.99067 15.1063 2.776C14.8823 2.552 14.7703 2.27667 14.7703 1.95C14.7703 1.62333 14.8823 1.35267 15.1063 1.138C15.3396 0.914 15.6336 0.802 15.9883 0.802C16.3336 0.802 16.6183 0.914 16.8423 1.138C17.0663 1.35267 17.1783 1.62333 17.1783 1.95C17.1783 2.27667 17.0663 2.552 16.8423 2.776C16.6183 2.99067 16.3336 3.098 15.9883 3.098Z'
        fill='#333333'
      />
    </svg>
  )

  return (
    <div
      className={`cdg-pagination-item ${styles.paginationItem} ${styles.ellipsis}`}
      {...props}
    >
      {svgIcon}
    </div>
  )
}

const ItemCounting: React.FC<{
  count: number
  page: number
  rowsPerPage: number
}> = ({ count, page, rowsPerPage }) => {
  const layout = useMemo(() => {
    const start = (page - 1) * rowsPerPage + 1;
    const end = Math.min(page * rowsPerPage, count);
    return `${start} - ${end} of ${count}`;
  }, [count, page, rowsPerPage]);

  return <div className={styles.paginationItemCounting}>{layout}</div>
}

const RowsCounting: React.FC<{
  rowsPerPage: number
  rowsOptions: number[]
  onRowsPerPageChange: (newValue: number) => void | undefined
}> = ({rowsPerPage, onRowsPerPageChange, rowsOptions, ...props}) => {
  const dropdown = (
    <Dropdown.Select
      style={{width: '138px', gap: '4px'}}
      defaultValue={rowsPerPage.toString()}
      onValueChange={(k) =>
        onRowsPerPageChange && onRowsPerPageChange(Number(k))
      }
      onBlur={() => console.log('blur')}
      onFocus={() => console.log('focus')}
    >
      {rowsOptions.map((option, index) => (
        <Dropdown.Item key={index} value={option.toString()}>
          {`${option} rows`}
        </Dropdown.Item>
      ))}
    </Dropdown.Select>
  )

  const layout = useMemo(() => {
    return (
      <>
        <span>Rows per page:</span> {dropdown}
      </>
    )
  }, [rowsPerPage])

  return <div className={styles.paginationRowsCounting}>{layout}</div>
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      page = 1,
      total = 1,
      initialPage = 1,
      onChange,
      count,
      rowsPerPage = 10,
      onRowsPerPageChange,
      rowsOptions = [5, 10, 15, 20, 25],
      // html props
      ...delegated
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

        return (
          <div
            className={`cdg-pagination-item ${styles.paginationItem} ${
              item === active ? `${styles.paginationItemActive}` : ''
            }`}
            key={index}
            onClick={() => item !== active && setPage(item)}
            aria-label={`page ${item}`}
            aria-current={item === active}
          >
            {item}
          </div>
        )
      },
      [total, active],
    )

    return (
      <CssInjection css={css} childrenRef={paginationRef}>
        <div
          className={`cdg-pagination ${styles.pagination}`}
          ref={paginationRef}
          role='navigation'
          aria-label='pagination'
          {...delegated}
        >
          {rowsPerPage && (
            <RowsCounting
              rowsOptions={rowsOptions}
              rowsPerPage={5}
              onRowsPerPageChange={
                onRowsPerPageChange
                  ? onRowsPerPageChange
                  : (rows: number) => {
                      console.log(rows)
                    }
              }
            />
          )}
          {count && <ItemCounting count={count} page={page} rowsPerPage={rowsPerPage}/>}
          <div
            className={`cdg-pagination-item ${styles.paginationItem} ${
              active === 1 ? `${styles.paginationItemDisabled}` : ''
            }`}
            onClick={previous}
            aria-label='previous page'
          >
            <svg
              viewBox='0 0 320 512'
              className={`cdg-pagination-item-svg ${styles.paginationItemSvg}`}
            >
              <path
                fill={active === 1 ? '#D2D0CE' : '#201F1E'}
                d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
              ></path>
            </svg>
          </div>
          {items.map(renderItem)}
          <div
            className={`cdg-pagination-item ${styles.paginationItem} ${
              active === total ? `${styles.paginationItemDisabled}` : ''
            }`}
            onClick={next}
            aria-label='next page'
          >
            <svg
              viewBox='0 0 320 512'
              className={`cdg-pagination-item-svg ${styles.paginationItemSvg}`}
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

export default Pagination as typeof Pagination & {
  ItemsCounting: typeof ItemCounting
}
