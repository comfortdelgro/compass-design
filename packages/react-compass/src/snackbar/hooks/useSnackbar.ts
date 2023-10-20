import {useContext} from 'react'
import {SnackbarContext} from '../service/snackbar-context'

export const useSnackbar = () => useContext(SnackbarContext)
