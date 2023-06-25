import {Cell, flexRender, Row} from '@tanstack/react-table'
import React, {SetStateAction, useEffect, useRef, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridCell} from './data-grid-cell.styles'

export interface Props extends StyledComponentProps {
  cell: Cell<any, unknown>
  row: Row<any>
  onChangeCell?: (newData: object) => void
}

export type DataGridCellProps = Props

const DataGridCell = React.forwardRef<HTMLTableCellElement, DataGridCellProps>(
  ({cell, row, onChangeCell}, ref) => {
    const tableCellRef = useDOMRef<HTMLTableCellElement>(ref)
    const {
      getValue,
      row: {index},
      column: {id},
    } = cell
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const handleDoubleClick = () => {
      const newValue = getValue()
      setValue(newValue as SetStateAction<string>)
      setEditing(true)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    const handleBlur = () => {
      setEditing(false)
      if (onChangeCell) {
        onChangeCell({
          value: value,
          row: {index},
          column: {id},
        })
      }
      // cell.updateValue(value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setEditing(false)
        if (onChangeCell) {
          onChangeCell({
            value: value,
            row: {index},
            column: {id},
          })
        }
      }
    }

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          editing &&
          inputRef.current &&
          !inputRef.current.contains(event.target as Node)
        ) {
          handleBlur()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [editing])

    return (
      <StyledDataGridCell
        ref={tableCellRef}
        {...{
          key: cell.id,
          style: {
            width: cell.column.getSize(),
            background: cell.getIsGrouped()
              ? '#0aff0082'
              : cell.getIsAggregated()
              ? '#ffa50078'
              : cell.getIsPlaceholder()
              ? '#ff000042'
              : 'white',
          },
          onDoubleClick: handleDoubleClick,
          onBlur: handleBlur,
        }}
      >
        {editing ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <input
              style={{width: '100%', height: '100%', boxSizing: 'border-box'}}
              ref={inputRef}
              type='text'
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
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
            cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
            cell.getContext(),
          )
        ) : cell.getIsPlaceholder() ? null : (
          flexRender(cell.column.columnDef.cell, cell.getContext())
        )}
      </StyledDataGridCell>
    )
  },
)

export default DataGridCell