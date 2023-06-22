import {faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Icon from '../../icon'
import {useToast} from '../hooks/useToast'
import Toast from '../toast'
import {StyledToastItem} from './toast-item.styles'

export interface ToastItemProps {
  message: string
  type: string
  id: number
}

const ToastItem = ({message, type, id}: ToastItemProps) => {
  const toast = useToast() // call useToast

  const handleDismiss = () => {
    toast.remove(id)
  }

  return (
    <StyledToastItem>
      <Toast isOpen handleClose={handleDismiss}>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>{message}</Toast.Message>
      </Toast>
    </StyledToastItem>
  )
}

export default ToastItem
