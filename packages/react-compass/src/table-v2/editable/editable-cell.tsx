import {Column, Row, Table, TableMeta} from '@tanstack/react-table'
import React, {SetStateAction, useEffect} from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledEditableCell} from './editable-cell.styles'

interface CellProps<TData> {
  getValue: () => any
  row: Row<TData>
  column: Column<TData>
  table: Table<TData>
}

export type EditableCellProps<TData = any> = CellProps<TData> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof CellProps<TData>>

export const EditableCell = React.forwardRef<
  HTMLTableCellElement,
  EditableCellProps
>(({getValue, row, column, table}: EditableCellProps) => {
  const initialValue = getValue()
  const inputRef = useDOMRef<HTMLInputElement>(null)
  const [editing, setEditing] = React.useState(false)
  const [value, setValue] = React.useState(initialValue)
  const tableMeta = table.options.meta as TableMeta<any> & {
    updateData: (index: number, id: string, value: any) => void
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setEditing(false)
      tableMeta?.updateData(row.index, column.id, value)
    }
  }

  const handleBlur = () => {
    setEditing(false)
    tableMeta?.updateData(row.index, column.id, value)
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
