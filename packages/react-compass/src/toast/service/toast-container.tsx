import React from 'react'
import Portal from '../../portal'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import styles from '../styles/toast.module.css'
import {Anchor} from './toast-context'
import ToastItem from './toast-item'
import {ToastItemType} from './types'

interface Props {
  toasts: ToastItemType[]
  toastItemClassName?: string
  anchorOrigin: Anchor
  css?: CSS
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
  const toastContainerClasses = classNames(
    styles.toastContainer,
    toasts.length <= 0 &&
      `${styles.toastContainerHidden} cdg-toast-container-hidden`,
    styles[styles.toastContainerVertical + anchorOrigin.vertical],
    styles[styles.toastContainerHorizontal + anchorOrigin.horizontal],
    anchorOrigin.vertical === 'top' ? styles.toastContainerVerticalTop : '',
    anchorOrigin.vertical === 'bottom' && styles.toastContainerVerticalBottom,
    anchorOrigin.vertical === 'center' && styles.toastContainerVerticalCenter,
    anchorOrigin.horizontal === 'left' && styles.toastContainerHorizontalLeft,
    anchorOrigin.horizontal === 'right' && styles.toastContainerHorizontalRight,
    anchorOrigin.horizontal === 'center' &&
      styles.toastContainerHorizontalCenter,
    anchorOrigin.vertical === 'center' &&
      anchorOrigin.horizontal === 'center' &&
      styles.toastContainerCenterCenter,
    className,
    'cdg-toast-container',
  )

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
              toastItemClassName={toastItemClassName}
            />
          ))}
        </div>
      </CssInjection>
    </Portal>
  )
}

export default ToastsContainer
