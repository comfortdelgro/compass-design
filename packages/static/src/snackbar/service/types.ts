import {ReactNode} from 'react'

export interface SnackbarItemType {
  id?: number
  text?: ReactNode
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode
  autoClose?: false | number
  type?: 'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'
  onClick?: (e: React.MouseEvent, id: number | undefined) => void
  css?: unknown
}

export interface SnackbarState {
  snackbars: SnackbarItemType[]
}

export type SnackbarActions =
  | {
      type: 'ADD_SNACKBAR'
      payload: SnackbarItemType
    }
  | {
      type: 'DELETE_SNACKBAR'
      payload: number
    }
  | {
      type: 'CLEAR_SNACKBAR'
    }
