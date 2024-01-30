import {createContext, ReactNode, useReducer} from 'react'
import ToastsContainer from './toast-container'
import {toastReducer} from './toast-reducer'
import {ToastItemType} from './types'

export const ToastContext = createContext<ToastContextValue>({
  show: () => {
    //
  },
  remove: () => {
    //
  },
  clearAll: () => {
    //
  },
})

const initialState = {
  toasts: [],
}

export interface Anchor {
  vertical: 'top' | 'bottom' | 'center'
  horizontal: 'left' | 'center' | 'right'
}

interface ToastContextProviderProps {
  children: ReactNode
  anchorOrigin?: Anchor
  toastItemClassName?: string
}

export interface ToastContextValue {
  show: (item: ToastItemType) => void
  remove: (id: number) => void
  clearAll: () => void
}

const ANCHOR_DEFAULT: Anchor = {horizontal: 'right', vertical: 'top'}

export const ToastContextProvider = ({
  children,
  anchorOrigin,
  toastItemClassName = '',
}: ToastContextProviderProps) => {
  const [state, dispatch] = useReducer(toastReducer, initialState)
  // rest of the code
  const addToast = (item: ToastItemType) => {
    const id = Date.now()
    dispatch({
      type: 'ADD_TOAST',
      payload: {...item, id, hasCloseIcon: item.hasCloseIcon ?? true},
    })
  }

  const show = (item: ToastItemType) => {
    addToast(item)
  }

  const remove = (id: number) => {
    dispatch({type: 'DELETE_TOAST', payload: id})
  }

  const clearAll = () => {
    dispatch({type: 'CLEAR_TOAST'})
  }

  const value: ToastContextValue = {show, remove, clearAll}

  return (
    <ToastContext.Provider value={value}>
      <ToastsContainer
        toasts={state.toasts}
        anchorOrigin={anchorOrigin ?? ANCHOR_DEFAULT}
        toastItemClassName={toastItemClassName}
      />
      {children}
    </ToastContext.Provider>
  )
}
