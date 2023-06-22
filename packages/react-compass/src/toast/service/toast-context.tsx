import React, {createContext, ReactNode, useReducer} from 'react'
import ToastsContainer from './toast-container'
import {toastReducer} from './toast-reducer'

export const ToastContext = createContext<ToastContextValue>({
  success: () => {
    //
  },
  warning: () => {
    //
  },
  info: () => {
    //
  },
  error: () => {
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
  success: (message: string) => void
  warning: (message: string) => void
  info: (message: string) => void
  error: (message: string) => void
  remove: (id: number) => void
}

export const ToastContextProvider = ({children}: ToastContextProviderProps) => {
  const [state, dispatch] = useReducer(toastReducer, initialState)
  // rest of the code
  const addToast = (type: string, message: string) => {
    const id = Math.floor(Math.random() * 10000000)
    dispatch({type: 'ADD_TOAST', payload: {id, message, type}})
  }

  const success = (message: string) => {
    addToast('success', message)
  }

  const warning = (message: string) => {
    addToast('warning', message)
  }

  const info = (message: string) => {
    addToast('info', message)
  }

  const error = (message: string) => {
    addToast('error', message)
  }

  const remove = (id: number) => {
    dispatch({type: 'DELETE_TOAST', payload: id})
  }

  const value: ToastContextValue = {success, warning, info, error, remove}

  return (
    <ToastContext.Provider value={value}>
      <ToastsContainer toasts={state.toasts} />
      {children}
    </ToastContext.Provider>
  )
}
