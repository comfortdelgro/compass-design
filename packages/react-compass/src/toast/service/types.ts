import {ReactNode} from 'react'

export interface ToastItemType {
  id?: number
  content: ReactNode
  hasCloseIcon?: boolean
  autoClose?: false | number
}

export interface ToastState {
  toasts: ToastItemType[]
}

export type ToastActions =
  | {
      type: 'ADD_TOAST'
      payload: ToastItemType
    }
  | {
      type: 'DELETE_TOAST'
      payload: number
    }
