import {useContext} from 'react'
import {ToastContext} from '../service/toast-context'

export const useToast = () => useContext(ToastContext)
