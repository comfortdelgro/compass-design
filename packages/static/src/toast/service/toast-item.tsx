import {useMemo, useRef} from 'react'
import {useToast} from '../hooks/useToast'
import styles from '../styles/toast.module.css'
import Toast from '../toast'
import {ToastItemType} from './types'

export type ToastItemProps = ToastItemType & {
  toastItemClassName?: string
  horizontal: 'left' | 'right' | 'center'
  vertical: 'bottom' | 'top' | 'center'
}
const ANIMATION_TIME = 300
const CLOSE_TIME = 1000

const ToastItem = ({
  id,
  message,
  toastItemClassName,
  autoClose,
  hasCloseIcon,
  actions,
  icon,
  title,
  label,
  color,
  itemClassName,
  horizontal = 'right',
  vertical = 'top',
}: ToastItemProps) => {
  const toast = useToast() // call useToast

  const toastItemRef = useRef<HTMLDivElement>(null)

  const handleDismiss = () => {
    if (toastItemRef.current && id) {
      toastItemRef.current.classList.add(`${styles.toastItemFadeOut}`)
      setTimeout(() => {
        toast.remove(id)
      }, ANIMATION_TIME)
    }
  }

  // classes
  const toastItemClasses = useMemo(() => {
    return [
      horizontal === 'left' ? styles.toastItemHorizontalLeft : false,
      horizontal === 'right' ? styles.toastItemHorizontalRight : false,
      horizontal === 'center' ? styles.toastItemHorizontalCenter : false,
      vertical === 'bottom' && horizontal === 'center' ? styles.toastItemBottomCenter : false,
    ]
      .filter(Boolean)
      .join(' ')
  }, [horizontal, vertical])

  return (
    <div ref={toastItemRef} className={toastItemClasses}>
      <Toast
        isItemContainer
        isOpen
        handleClose={handleDismiss}
        className={`${toastItemClassName || ''} ${itemClassName || ''}`}
        autoClose={autoClose ?? CLOSE_TIME}
        color={color ?? 'neutral'}
      >
        {hasCloseIcon && (
          <Toast.CloseIcon>
            <svg
              viewBox='0 0 16 16'
              className={`cdg-toast-item-close-icon ${styles.toastItemCloseIcon}`}
            >
              <path
                d='M14.5877 12.6114C15.1345 13.1583 15.1345 14.0441 14.5877 14.591C14.3165 14.8644 13.9577 15 13.599 15C13.2403 15 12.8824 14.8633 12.6095 14.5899L7.99945 9.98227L3.38988 14.5888C3.11646 14.8644 2.75818 15 2.39989 15C2.04161 15 1.68376 14.8644 1.41012 14.5888C0.863292 14.042 0.863292 13.1561 1.41012 12.6092L6.02101 7.99836L1.41012 3.38966C0.863292 2.84283 0.863292 1.95696 1.41012 1.41012C1.95696 0.863292 2.84282 0.863292 3.38966 1.41012L7.99945 6.0232L12.6103 1.41231C13.1572 0.865479 14.043 0.865479 14.5899 1.41231C15.1367 1.95914 15.1367 2.84501 14.5899 3.39184L9.97899 8.00273L14.5877 12.6114Z'
                fill='currentColor'
              />
            </svg>
          </Toast.CloseIcon>
        )}

        {message && <Toast.Message>{message}</Toast.Message>}
        {icon && <Toast.Icon>{icon}</Toast.Icon>}
        {title && <Toast.Title>{title}</Toast.Title>}
        {label && <Toast.Label>{label}</Toast.Label>}
        {actions && <Toast.Actions>{actions}</Toast.Actions>}
      </Toast>
    </div>
  )
}

export default ToastItem
