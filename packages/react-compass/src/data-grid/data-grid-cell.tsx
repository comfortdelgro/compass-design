import {Cell, flexRender} from '@tanstack/react-table'
import React, {SetStateAction, useEffect, useRef, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridCell} from './data-grid-cell.styles'

export interface Props extends StyledComponentProps {
  cell: Cell<any, unknown>
  onChangeCell?: (newData: object) => void
}

export type DataGridCellProps = Props

const DataGridCell = React.forwardRef<HTMLTableCellElement, DataGridCellProps>(
  ({cell, onChangeCell}, ref) => {
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
        ) : (
          flexRender(cell.column.columnDef.cell, cell.getContext())
        )}
      </StyledDataGridCell>
    )
  },
)

export default DataGridCell
