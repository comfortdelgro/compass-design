import {Cell, ColumnMeta, flexRender, RowData} from '@tanstack/react-table'
import React, {SetStateAction, useEffect} from 'react'
import {createSafeContext} from '../../utils/create-safe-context'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from '../styles/table-editable-cell.module.css'

interface CellProps {
  getValue: () => unknown
  cell: Cell<unknown, unknown>
  row: number
  column: string
  css?: CSS
}

export interface CellMetaProps<TData extends RowData, TValue>
  extends ColumnMeta<TData, TValue> {
  editable?: boolean
  template?: React.ReactNode
  updateData?: (index: number, id: string, value: unknown) => void
  revertData?: (rowIndex: number) => void
}

export type EditableCellProps = CellProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof CellProps>

// eslint-disable-next-line react-refresh/only-export-components
export const [EditableCellContextProvider, useEditableCellContext] =
  createSafeContext<EditableCellContextType>(
    'EditableCell was not found in tree',
  )

export type EditableCellContextType = {
  finishTemplateEditing: (data: unknown) => void
  cancelTemplateEditing: () => void
  initialValue: unknown
  cell: Cell<unknown, unknown>
  row: number
  column: string
}

export const EditableCell = React.forwardRef<
  HTMLTableCellElement,
  EditableCellProps
>((props: EditableCellProps) => {
  const {css = {}, className, cell, row, column, getValue} = props
  const initialValue = getValue()
  const inputRef = useDOMRef<HTMLInputElement>(null)
  const [editing, setEditing] = React.useState(false)
  const [value, setValue] = React.useState(initialValue)
  const tableMeta = cell.column.columnDef.meta as CellMetaProps<
    unknown,
    unknown
  >

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as unknown)
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
    setValue(newValue as SetStateAction<unknown>)
    setEditing(true)
  }

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
    }
  }, [editing, inputRef])

  const finishTemplateEditing = (data: unknown) => {
    setEditing(false)
    tableMeta?.updateData?.(row, column, data)
  }
  const cancelTemplateEditing = () => {
    setEditing(false)
    tableMeta?.revertData?.(row)
  }

  const rootClasses = [
    styles.cdgTableEditableCell,
    className,
    'cdg-table-editable-cell',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <div onClick={handleClick} className={rootClasses}>
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
              value={value as string | number | readonly string[]}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              className={`${styles.editableCellInput} cdg-table-editable-cell-input`}
            />
          )
        ) : (
          <p
            className={`${styles.editableCellContent} cdg-table-editable-cell-content`}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </p>
        )}
      </div>
    </CssInjection>
  )
})
