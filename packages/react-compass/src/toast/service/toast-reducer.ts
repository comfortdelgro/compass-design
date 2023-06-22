import {ToastActions, ToastState} from './types'

export const toastReducer = (state: ToastState, action: ToastActions) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      }
    case 'DELETE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      }
    default:
      return state
  }
}
