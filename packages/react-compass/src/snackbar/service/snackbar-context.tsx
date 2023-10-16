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

export interface Anchor {
  vertical: 'top' | 'bottom' | 'center'
  horizontal: 'left' | 'center' | 'right'
}

interface SnackbarContextProviderProps {
  children: ReactNode
  anchorOrigin?: Anchor
  containerCSS?: CSS
}

export interface SnackbarContextValue {
  show: (item: SnackbarItemType) => void
  remove: (id: number) => void
  clearAll: () => void
}

const ANCHOR_DEFAULT: Anchor = {horizontal: 'right', vertical: 'top'}

export const SnackbarContextProvider = ({
  children,
  anchorOrigin,
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
        anchorOrigin={anchorOrigin ?? ANCHOR_DEFAULT}
        css={containerCSS}
        className='cdg-snackbar-container'
      />
      {children}
    </SnackbarContext.Provider>
  )
}
