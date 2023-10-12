import {Cell, ColumnMeta, flexRender, RowData} from '@tanstack/react-table'
import React, {SetStateAction, useEffect} from 'react'
import {createSafeContext} from '../../utils/create-safe-context'
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
  revertData?: (rowIndex: number) => void
}

export type EditableCellProps = CellProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof CellProps>

export const [EditableCellContextProvider, useEditableCellContext] =
  createSafeContext<any>('EditableCell was not found in tree')

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
      finishTemplateEditing(value)
    } else if (event.key === 'Escape') {
      cancelTemplateEditing()
    }
  }

  const handleBlur = () => {
    cancelTemplateEditing()
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const newValue = getValue()
    setValue(newValue as SetStateAction<string>)
    setEditing(true)
  }

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
    }
  }, [editing])

  const finishTemplateEditing = (data: any) => {
    setEditing(false)
    tableMeta?.updateData?.(row, column, data)
  }
  const cancelTemplateEditing = () => {
    setEditing(false)
    tableMeta?.revertData?.(row)
  }

  return (
    <StyledEditableCell onClick={handleClick}>
      {editing ? (
        tableMeta.template ? (
          <EditableCellContextProvider
            value={{
              finishTemplateEditing,
              cancelTemplateEditing,
              initialValue,
              cell,
              row,
              column,
            }}
          >
            {tableMeta.template}
          </EditableCellContextProvider>
        ) : (
          <input
            aria-label='cell-input'
            ref={inputRef}
            type='text'
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            style={{textAlign: 'center', outlineColor: '#0142AF'}}
          />
        )
      ) : (
        <p>{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
      )}
    </StyledEditableCell>
  )
})
