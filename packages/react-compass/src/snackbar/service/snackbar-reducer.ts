import {SnackbarActions, SnackbarState} from './types'

export const snackbarReducer = (
  state: SnackbarState,
  action: SnackbarActions,
) => {
  switch (action.type) {
    case 'ADD_SNACKBAR':
      return {
        ...state,
        snackbars: [action.payload, ...state.snackbars],
      }
    case 'DELETE_SNACKBAR':
      return {
        ...state,
        snackbars: state.snackbars.filter(
          (snackbar) => snackbar.id !== action.payload,
        ),
      }
    case 'CLEAR_SNACKBAR':
      return {
        ...state,
        snackbars: [],
      }
    default:
      return state
  }
}
