import React from 'react'
import Portal from '../../portal'
import CssInjection from '../../utils/objectToCss/CssInjection'
import styles from '../styles/toast.module.css'
import {Anchor} from './toast-context'
import ToastItem from './toast-item'
import {ToastItemType} from './types'

interface Props {
  toasts: ToastItemType[]
  toastItemClassName?: string
  anchorOrigin: Anchor
  css?: unknown
}

export type ToastsContainerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastsContainer = (props: ToastsContainerProps) => {
  const {
    // StyledComponentProps
    css = {},
    //Component props
    toasts,
    toastItemClassName,
    anchorOrigin,
    // HTMLDiv Props
    className,
    ...delegated
  } = props

  // classes
  const toastContainerClasses = [
    styles.toastContainer,
    toasts.length > 0
      ? false
      : `${styles.toastContainerHidden} cdg-toast-container-hidden`,
    styles[styles.toastContainerVertical + anchorOrigin.vertical],
    styles[styles.toastContainerHorizontal + anchorOrigin.horizontal],
    anchorOrigin.vertical === 'top' ? styles.toastContainerVerticalTop : false,
    anchorOrigin.vertical === 'bottom'
      ? styles.toastContainerVerticalBottom
      : false,
    anchorOrigin.vertical === 'center'
      ? styles.toastContainerVerticalCenter
      : false,
    anchorOrigin.horizontal === 'left'
      ? styles.toastContainerHorizontalLeft
      : false,
    anchorOrigin.horizontal === 'right'
      ? styles.toastContainerHorizontalRight
      : false,
    anchorOrigin.horizontal === 'center'
      ? styles.toastContainerHorizontalCenter
      : false,
    anchorOrigin.vertical === 'center' && anchorOrigin.horizontal === 'center'
      ? styles.toastContainerCenterCenter
      : false,
    className,
    'cdg-toast-container',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Portal open={toasts.length > 0}>
      <CssInjection css={css}>
        <div className={toastContainerClasses} {...delegated}>
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              {...toast}
              vertical={anchorOrigin.vertical}
              horizontal={anchorOrigin.horizontal}
              toastItemClassName={`${toastItemClassName || ''}`}
            />
          ))}
        </div>
      </CssInjection>
    </Portal>
  )
}

export default ToastsContainer
