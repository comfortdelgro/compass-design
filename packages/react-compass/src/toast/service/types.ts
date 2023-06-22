export interface ToastItemType {
  message: string
  type: string
  id: number
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
