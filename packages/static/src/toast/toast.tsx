import React, {useMemo} from 'react'
import ReactDOM from 'react-dom'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'
import ToastActions from './toast-actions'
import ToastCloseIcon from './toast-closeIcon'
import ToastIcon from './toast-icon'
import ToastLabel from './toast-label'
import ToastMessage from './toast-message'
import ToastTitle from './toast-title'

interface Anchor {
  vertical: 'top' | 'bottom' | 'center'
  horizontal: 'left' | 'center' | 'right'
}
interface Props {
  children?: React.ReactNode
  portalTo?: HTMLElement
  isOpen?: boolean
  isItemContainer?: boolean
  handleClose?: () => void
  autoClose?: false | number
  anchorOrigin?: Anchor
  css?: unknown
  color?: 'informative' | 'neutral' | 'negative' | 'positive'
}

export type ToastProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Toast = React.forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const {
    children,
    // StyledComponentProps
    css = {},
    // VariantProps
    color = 'neutral',
    //Component props
    portalTo,
    isOpen = false,
    handleClose,
    autoClose = false,
    isItemContainer = false,
    anchorOrigin = {horizontal: 'center', vertical: 'center'},
    className,
    // HTMLDiv Props
    ...delegated
  } = props

  const toastRef = useDOMRef<HTMLDivElement>(ref)

  // Pick child element from children props
  const {child: ToastActionsElement} = pickChild<typeof ToastActions>(
    children,
    ToastActions,
  )

  const {child: ToastCloseIconElement} = pickChild<typeof ToastCloseIcon>(
    children,
    ToastCloseIcon,
  )

  const {child: ToastIconElement} = pickChild<typeof ToastIcon>(
    children,
    ToastIcon,
  )

  const {child: ToastLabelElement} = pickChild<typeof ToastLabel>(
    children,
    ToastLabel,
  )

  const {child: ToastMessagelement} = pickChild<typeof ToastMessage>(
    children,
    ToastMessage,
  )

  const {child: ToastTitleElement} = pickChild<typeof ToastTitle>(
    children,
    ToastTitle,
  )

  const renderContent = React.useCallback(
    (children: React.ReactNode) => {
      return portalTo ? ReactDOM.createPortal(children, portalTo) : children
    },
    [portalTo],
  )

  // Auto close
  React.useEffect(() => {
    if (autoClose && typeof autoClose == 'number' && isOpen == true) {
      setTimeout(() => handleClose?.(), autoClose)
    }
  }, [autoClose, handleClose, isOpen])

  // classes
  const toastClasses = useMemo(() => {
    return [
      styles.toast,
      color && styles[color],
      isItemContainer && styles.isItemContainer,
      anchorOrigin.vertical === 'top' ? styles.verticalTop : false,
      anchorOrigin.vertical === 'bottom' ? styles.verticalBottom : false,
      anchorOrigin.vertical === 'center' ? styles.verticalCenter : false,
      anchorOrigin.horizontal === 'left' ? styles.horizontalLeft : false,
      anchorOrigin.horizontal === 'right' ? styles.horizontalRight : false,
      anchorOrigin.horizontal === 'center' ? styles.horizontalCenter : false,
      anchorOrigin.vertical === 'center' && anchorOrigin.horizontal === 'center'
        ? styles.centerCenter
        : false,
      className,
      'cdg-toast',
    ]
      .filter(Boolean)
      .join(' ')
  }, [
    anchorOrigin.horizontal,
    anchorOrigin.vertical,
    className,
    color,
    isItemContainer,
  ])

  return (
    <>
      {isOpen &&
        renderContent(
          <CssInjection css={css} childrenRef={toastRef}>
            <div ref={toastRef} className={toastClasses} {...delegated}>
              <div className={`${styles.toastHeader}`}>
                <div className={`${styles.toastHeaderLeft}`}>
                  {ToastIconElement}
                  {ToastTitleElement}
                </div>
                <div className={`${styles.toastHeaderRight}`}>
                  {ToastLabelElement}
                  {ToastCloseIconElement &&
                    React.cloneElement(
                      ToastCloseIconElement as unknown as JSX.Element,
                      {
                        onClose: () => handleClose?.(),
                      },
                    )}
                </div>
              </div>
              {ToastMessagelement}
              {ToastActionsElement}
            </div>
          </CssInjection>,
        )}
    </>
  )
})

export default Toast as typeof Toast & {
  Actions: typeof ToastActions
  CloseIcon: typeof ToastCloseIcon
  Icon: typeof ToastIcon
  Label: typeof ToastLabel
  Message: typeof ToastMessage
  Title: typeof ToastTitle
}
