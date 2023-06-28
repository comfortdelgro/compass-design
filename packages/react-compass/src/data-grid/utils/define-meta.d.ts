import '@tanstack/react-table'
import {RowData} from '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    editable?: boolean
    template?: React.ReactNode
    updateData?: (index: number, id: string, value: any) => void
  }
}
