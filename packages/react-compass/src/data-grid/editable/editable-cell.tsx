import {Cell, ColumnMeta, RowData} from '@tanstack/react-table'
import React, {SetStateAction, useEffect} from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledEditableCell} from './editable-cell.styles'

interface CellProps {
  getValue: () => any
  cell: Cell<any, unknown>
  row: number
  column: string
}

export interface CellMetaProps<TData extends RowData, TValue>
  extends ColumnMeta<TData, TValue> {
  editable?: boolean
  template?: React.ReactNode
  updateData?: (index: number, id: string, value: any) => void
}

export type EditableCellProps = CellProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof CellProps>

export const EditableCell = React.forwardRef<
  HTMLTableCellElement,
  EditableCellProps
>(({getValue, cell, row, column}: EditableCellProps) => {
  const initialValue = getValue()
  const inputRef = useDOMRef<HTMLInputElement>(null)
  const [editing, setEditing] = React.useState(false)
  const [value, setValue] = React.useState(initialValue)
  const tableMeta = cell.column.columnDef.meta as CellMetaProps<any, unknown>
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setEditing(false)
      tableMeta?.updateData?.(row, column, value)
    }
  }

  const handleBlur = () => {
    setEditing(false)
    tableMeta?.updateData?.(row, column, value)
  }

  const handleDoubleClick = () => {
    const newValue = getValue()
    setValue(newValue as SetStateAction<string>)
    setEditing(true)
  }

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
    }
  }, [editing])

  return (
    <StyledEditableCell onClick={handleDoubleClick}>
      {editing ? (
        <input
          aria-label='cell-input'
          ref={inputRef}
          type='text'
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
      ) : (
        <p>{value}</p>
      )}
    </StyledEditableCell>
  )
})
