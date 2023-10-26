import {useReducer} from 'react'

export interface SnackbarItem {
  id: string
  message: string
  type: string
}

type SnackbarAction =
  | {type: 'ADD_SNACKBAR'; snackbar: SnackbarItem}
  | {type: 'REMOVE_SNACKBAR'; id: string}

export enum SnackbarType {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  ONGOING = 'ONGOING',
  REMINDER = 'REMINDER',
}

type SnackbarState = SnackbarItem[]

const snackbarReducer = (
  state: SnackbarState,
  action: SnackbarAction,
): SnackbarState => {
  switch (action.type) {
    case 'ADD_SNACKBAR':
      return [...state, action.snackbar]
    case 'REMOVE_SNACKBAR':
      return state.filter((snackbar) => snackbar.id !== action.id)
    default:
      return state
  }
}

const useSnackbarService = () => {
  const [snackbars, dispatch] = useReducer(snackbarReducer, [])

  const showSnackbar = (
    message: string,
    type: SnackbarType = SnackbarType.DEFAULT,
  ) => {
    const id = Math.random().toString()
    const snackbar: SnackbarItem = {id, message, type}
    dispatch({type: 'ADD_SNACKBAR', snackbar})
  }

  const removeSnackbar = (id: string) => {
    dispatch({type: 'REMOVE_SNACKBAR', id})
  }

  return {snackbars, showSnackbar, removeSnackbar}
}

export default useSnackbarService
