import {ReactNode} from 'react'

export interface ToastItemType {
  id?: number
  message?: ReactNode
  title?: ReactNode
  actions?: ReactNode
  icon?: ReactNode
  label?: ReactNode
  hasCloseIcon?: boolean
  autoClose?: false | number
  color?: 'informative' | 'neutral' | 'negative' | 'positive'
  itemClassName?: string
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
  | {
      type: 'CLEAR_TOAST'
    }
