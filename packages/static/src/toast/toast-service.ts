import {useReducer} from 'react'

export interface ToastItem {
  id: string
  message: string
  type: string
}

type ToastAction =
  | {type: 'ADD_TOAST'; toast: ToastItem}
  | {type: 'REMOVE_TOAST'; id: string}

export enum ToastType {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

type ToastState = ToastItem[]

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, action.toast]
    case 'REMOVE_TOAST':
      return state.filter((toast) => toast.id !== action.id)
    default:
      return state
  }
}

const useToastService = () => {
  const [toasts, dispatch] = useReducer(toastReducer, [])

  const showToast = (message: string, type: ToastType = ToastType.DEFAULT) => {
    const id = Math.random().toString()
    const toast: ToastItem = {id, message, type}
    dispatch({type: 'ADD_TOAST', toast})
  }

  const removeToast = (id: string) => {
    dispatch({type: 'REMOVE_TOAST', id})
  }

  return {toasts, showToast, removeToast}
}

export default useToastService
