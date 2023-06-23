import {ToastActions, ToastState} from './types'

export const toastReducer = (state: ToastState, action: ToastActions) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.payload, ...state.toasts],
      }
    case 'DELETE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      }
    case 'CLEAR_TOAST':
      return {
        ...state,
        toasts: [],
      }
    default:
      return state
  }
}
