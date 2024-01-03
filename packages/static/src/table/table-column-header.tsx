import {flexRender, Header, Table} from '@tanstack/react-table'
import React, {useMemo} from 'react'
import {useIsDarkTheme} from '../theme'
import {EKeyboardKey} from '../utils/keyboard.enum'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-column-header.module.css'
import HeaderColumnFilter from './table-column-header-filter'
import TableV2Resizer from './table-resizer'

interface Props<TData, TValue> {
  headerProps: Header<TData, TValue>
  tableOption: Table<TData>
  css?: unknown
  className?: string
}
export type TableV2ColumnHeaderProps<TData = unknown, TValue = unknown> = Props<
  TData,
  TValue
> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>

const TableV2ColumnHeader = React.forwardRef<
  HTMLTableCellElement,
  TableV2ColumnHeaderProps
>(({headerProps, tableOption, css = {}, onKeyDown}, ref) => {
  const enableResizing = headerProps?.column?.columnDef?.enableResizing
  const isFilterableColumn =
    headerProps.column.columnDef.enableColumnFilter === true &&
    headerProps.column.getCanFilter()
  const isSortableColumn = headerProps.column.getCanSort()
  const isGroupedColumn =
    headerProps.column.columnDef.enableGrouping === true &&
    headerProps.column.getIsGrouped()
  const tableColumnHeaderRef = useDOMRef<HTMLTableCellElement>(ref)
  const sortDirection = headerProps.column.getIsSorted()
  const directions = {
    asc: <ArrowUpIcon />,
    desc: <ArrowDownIcon />,
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    const key = e.key as EKeyboardKey
    const handler = headerProps.column.getToggleSortingHandler()
    const targetElement = e.target as HTMLElement

    switch (key) {
      case EKeyboardKey.Enter:
        handler?.(e)
        break
      case EKeyboardKey.Spacebar:
        if (targetElement.tagName.toLowerCase() !== 'input') {
          e.preventDefault()
        }
        handler?.(e)
        break
      default:
        break
    }

    onKeyDown?.(e)
  }

  const ariaSort = useMemo<
    React.HTMLAttributes<HTMLDivElement>['aria-sort']
  >(() => {
    if (sortDirection === false) {
      return 'none'
    } else if (sortDirection === 'asc') {
      return 'ascending'
    } else {
      return 'descending'
    }
  }, [sortDirection])

  const headerContentClass = [headerProps.column.getCanSort() && styles.canSort]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={tableColumnHeaderRef}>
      <th
        ref={tableColumnHeaderRef}
        className={styles.cdgTableColumnHeader}
        key={headerProps.id}
        colSpan={headerProps.colSpan}
        onClick={headerProps.column.getToggleSortingHandler()}
        onKeyDown={handleOnKeyDown}
        role='columnheader'
        aria-sort={ariaSort}
        tabIndex={isSortableColumn || isFilterableColumn ? 0 : -1}
        style={{
          width: headerProps.getSize(),
        }}
      >
        {headerProps.isPlaceholder ? null : (
          <div className={headerContentClass}>
            {
              <div
                onClick={
                  headerProps.column.columnDef.enableGrouping === true
                    ? headerProps.column.getToggleGroupingHandler()
                    : undefined
                }
              >
                {isGroupedColumn ? (
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
            {isFilterableColumn ? (
              <HeaderColumnFilter
                column={headerProps.column}
                table={tableOption}
              />
            ) : null}
          </div>
        )}
        {enableResizing && (
          <TableV2Resizer resizeHandler={headerProps.getResizeHandler()} />
        )}
      </th>
    </CssInjection>
  )
})
const ArrowDownIcon = () => {
  const isDarkTheme = useIsDarkTheme()
  return (
    <span aria-hidden='true' className={styles.cdgTableSortingIndicator}>
      <svg width='24' height='26' viewBox='0 0 24 26' fill='none'>
        <path
          d='M12.8476 4.34166C12.379 3.88611 11.6181 3.88611 11.1495 4.34166L6.35152 9.00651C6.00666 9.34179 5.90546 9.84108 6.09288 10.2784C6.2803 10.7157 6.71512 11 7.20242 11H16.7984C17.282 11 17.7205 10.7157 17.908 10.2784C18.0954 9.84108 17.9904 9.34179 17.6493 9.00651L12.8513 4.34166H12.8476Z'
          fill={isDarkTheme ? '#363B4C' : '#EDEBE9'}
        />
        <path
          d='M11.1524 21.3277C11.621 21.7834 12.3819 21.7834 12.8505 21.3277L17.6485 16.661C17.9933 16.3256 18.0945 15.8261 17.9071 15.3886C17.7197 14.9511 17.2849 14.6667 16.7976 14.6667L7.20159 14.6704C6.71804 14.6704 6.27947 14.9548 6.09205 15.3923C5.90463 15.8298 6.00958 16.3292 6.35069 16.6647L11.1487 21.3313L11.1524 21.3277Z'
          fill={isDarkTheme ? '#A6AABF' : '#3B3A39'}
        />
      </svg>
    </span>
  )
}
const ArrowUpIcon = () => (
  <span aria-hidden='true' className={styles.cdgTableSortingIndicator}>
    <svg width='24' height='26' viewBox='0 0 24 26' fill='none'>
      <path
        d='M12.8476 4.34166C12.379 3.88611 11.6181 3.88611 11.1495 4.34166L6.35152 9.00651C6.00666 9.34179 5.90546 9.84108 6.09288 10.2784C6.2803 10.7157 6.71512 11 7.20242 11H16.7984C17.282 11 17.7205 10.7157 17.908 10.2784C18.0954 9.84108 17.9904 9.34179 17.6493 9.00651L12.8513 4.34166H12.8476Z'
        fill={'#3B3A39'}
      />
      <path
        d='M11.1524 21.3277C11.621 21.7834 12.3819 21.7834 12.8505 21.3277L17.6485 16.661C17.9933 16.3256 18.0945 15.8261 17.9071 15.3886C17.7197 14.9511 17.2849 14.6667 16.7976 14.6667L7.20159 14.6704C6.71804 14.6704 6.27947 14.9548 6.09205 15.3923C5.90463 15.8298 6.00958 16.3292 6.35069 16.6647L11.1487 21.3313L11.1524 21.3277Z'
        fill={'#EDEBE9'}
      />
    </svg>
  </span>
)
export default TableV2ColumnHeader
