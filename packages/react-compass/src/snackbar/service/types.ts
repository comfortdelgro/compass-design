import {ReactNode} from 'react'

export interface SnackbarItemType {
  id?: number
  text?: ReactNode
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode
  detail?: ReactNode
  detailDescription?: ReactNode
  autoClose?: false | number
  type?: 'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'
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
