// ToastContainer.tsx

import React from 'react'
import Toast from './toast'
import {ToastItem} from './toast-service'

interface ToastContainerProps {
  toasts: ToastItem[]
  onRemoveToast: (id: string) => void
}

const ToastContainer = (props: ToastContainerProps) => {
  const {toasts, onRemoveToast} = props

  return (
    <div className='toast-container'>
      {toasts.map((toast) => (
        <Toast
          isOpen
          key={toast.id}
          handleClose={() => onRemoveToast(toast.id)}
          autoClose={500}
        >
          <Toast.Message>{toast.message}</Toast.Message>
        </Toast>
      ))}
    </div>
  )
}

export default ToastContainer
