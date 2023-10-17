import React, {createContext, ReactNode, useReducer} from 'react'
import {CSS} from '../../utils/stitches.types'
import SnackbarsContainer from './snackbar-container'
import {snackbarReducer} from './snackbar-reducer'
import {SnackbarItemType} from './types'

export const SnackbarContext = createContext<SnackbarContextValue>({
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
  snackbars: [],
}

interface SnackbarContextProviderProps {
  children: ReactNode
  containerCSS?: CSS
}

export interface SnackbarContextValue {
  show: (item: SnackbarItemType) => void
  remove: (id: number) => void
  clearAll: () => void
}

export const SnackbarContextProvider = ({
  children,
  containerCSS = {},
}: SnackbarContextProviderProps) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialState)
  // rest of the code
  const addSnackbar = (item: SnackbarItemType) => {
    const id = Date.now()
    dispatch({
      type: 'ADD_SNACKBAR',
      payload: {...item, id},
    })
  }

  const show = (item: SnackbarItemType) => {
    addSnackbar(item)
  }

  const remove = (id: number) => {
    dispatch({type: 'DELETE_SNACKBAR', payload: id})
  }

  const clearAll = () => {
    dispatch({type: 'CLEAR_SNACKBAR'})
  }

  const value: SnackbarContextValue = {show, remove, clearAll}

  return (
    <SnackbarContext.Provider value={value}>
      <SnackbarsContainer
        snackbars={state.snackbars}
        css={containerCSS}
        className='cdg-snackbar-container'
      />
      {children}
    </SnackbarContext.Provider>
  )
}
