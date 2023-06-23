import React, {createContext, ReactNode, useReducer} from 'react'
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
})

const initialState = {
  toasts: [],
}

interface ToastContextProviderProps {
  children: ReactNode
}

export interface ToastContextValue {
  show: (item: ToastItemType) => void
  remove: (id: number) => void
}

export const ToastContextProvider = ({children}: ToastContextProviderProps) => {
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

  const value: ToastContextValue = {show, remove}

  return (
    <ToastContext.Provider value={value}>
      <ToastsContainer toasts={state.toasts} />
      {children}
    </ToastContext.Provider>
  )
}
