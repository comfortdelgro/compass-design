import {Cell, flexRender} from '@tanstack/react-table'
import React, {useEffect, useRef, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridCell} from './data-grid-cell.styles'

export interface Props extends StyledComponentProps {
  cell: Cell<any, unknown>
}

export type DataGridCellProps = Props

const DataGridCell = React.forwardRef<HTMLTableCellElement, DataGridCellProps>(
  ({cell}, ref) => {
    const tableCellRef = useDOMRef<HTMLTableCellElement>(ref)
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(cell.getContext())
    const inputRef = useRef<HTMLInputElement>(null)
    const handleDoubleClick = () => {
      setEditing(true)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // setValue(event.target.value)
    }

    const handleBlur = () => {
      setEditing(false)
      // cell.updateValue(value)
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
          <input
            ref={inputRef}
            type='text'
            // value={value}
            onChange={handleChange}
          />
        ) : (
          flexRender(cell.column.columnDef.cell, cell.getContext())
        )}
      </StyledDataGridCell>
    )
  },
)

export default DataGridCell
