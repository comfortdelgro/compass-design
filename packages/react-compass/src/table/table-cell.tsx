import {Cell, flexRender, Row} from '@tanstack/react-table'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {CellMetaProps, EditableCell} from './editable/editable-cell'

import styles from './styles/table-cell.module.css'

export interface Props<TData, TValue> {
  cell: Cell<TData, TValue>
  row: Row<TData>
  css?: unknown
  className?: string
  onChangeCell?: (newData: object) => void
}

export type TableV2CellProps<TData = unknown, TValue = unknown> = Props<
  TData,
  TValue
> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>

const TableV2Cell = React.forwardRef<HTMLTableCellElement, TableV2CellProps>(
  ({cell, row, className, css = {}}, ref) => {
    const TableV2CellRef = useDOMRef<HTMLTableCellElement>(ref)
    const {
      getValue,
      row: {index},
      column: {id},
    } = cell
    const tableMeta = cell.column.columnDef.meta as CellMetaProps<
      never,
      unknown
    >
    const isCellEditable = tableMeta?.editable

    const cellClasses = [
      styles.cdgTableCell,
      cell.getIsGrouped() && styles.isGrouped,
      cell.getIsAggregated() && styles.isAggregated,
      cell.getIsPlaceholder() && styles.isPlaceholder,
      className,
      'cdg-table-cell',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css}>
        <td
          className={cellClasses}
          ref={TableV2CellRef}
          key={cell.id}
          style={{
            width: cell.column.getSize(),
          }}
          role='cell'
        >
          {isCellEditable ? (
            <EditableCell
              cell={cell}
              getValue={getValue as never}
              row={index}
              column={id}
            />
          ) : cell.getIsGrouped() ? (
            // If it's a grouped cell, add an expander and row count
            <>
              <button
                {...{
                  onClick: row.getToggleExpandedHandler(),
                  style: {
                    cursor: row.getCanExpand() ? 'pointer' : 'normal',
                    display: 'flex',
                    alignItems: 'center',
                  },
                }}
              >
                {row.getIsExpanded() ? (
                  <svg
                    width='12'
                    height='24'
                    viewBox='0 0 32 32'
                    fill='currentColor'
                  >
                    <path d='M15.9989 24C15.3734 24 14.7477 23.7582 14.271 23.2746L2.04944 10.8936C1.09463 9.92634 1.09463 8.35938 2.04944 7.39211C3.00425 6.42485 4.55105 6.42485 5.50586 7.39211L15.9989 18.0262L26.4941 7.39405C27.449 6.42679 28.9957 6.42679 29.9506 7.39405C30.9054 8.36131 30.9054 9.92827 29.9506 10.8955L17.729 23.2765C17.2516 23.7601 16.6252 24 15.9989 24Z' />
                  </svg>
                ) : (
                  <svg
                    width='12'
                    height='24'
                    viewBox='0 0 32 32'
                    fill='currentColor'
                  >
                    <path d='M10.9997 30C10.4879 30 9.97594 29.7722 9.58594 29.3165C8.80469 28.4051 8.80469 26.9286 9.58594 26.0172L18.1747 16.0009L9.58594 5.98281C8.80469 5.07141 8.80469 3.59495 9.58594 2.68355C10.3672 1.77215 11.6328 1.77215 12.4141 2.68355L22.4141 14.3495C23.1953 15.2609 23.1953 16.7373 22.4141 17.6487L12.4141 29.3146C12.0234 29.774 11.5116 30 10.9997 30Z' />
                  </svg>
                )}{' '}
                {flexRender(cell.column.columnDef.cell, cell.getContext())} (
                {row.subRows.length})
              </button>
            </>
          ) : cell.getIsAggregated() ? (
            flexRender(
              cell.column.columnDef.aggregatedCell ??
                cell.column.columnDef.cell,
              cell.getContext(),
            )
          ) : cell.getIsPlaceholder() ? null : (
            flexRender(cell.column.columnDef.cell, cell.getContext())
          )}
        </td>
      </CssInjection>
    )
  },
)

export default TableV2Cell
