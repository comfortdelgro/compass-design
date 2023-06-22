import React from 'react'
import ToastItem, {ToastItemProps} from './toast-item'

interface ToastsContainerProps {
  toasts: ToastItemProps[]
}

const ToastsContainer = ({toasts}: ToastsContainerProps) => {
  return (
    <div className='cdg-toasts-container'>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </div>
  )
}

export default ToastsContainer
