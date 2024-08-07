import React from 'react'
import ReactDOM from 'react-dom'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {classNames} from '../utils/string'
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
  withHeader?: boolean
  handleClose?: () => void
  autoClose?: false | number
  anchorOrigin?: Anchor
  css?: CSS
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
    withHeader = false,
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
  const {child: ToastActionsElement} = pickChild(children, ToastActions)

  const {child: ToastCloseIconElement} = pickChild(children, ToastCloseIcon)

  const {child: ToastIconElement} = pickChild(children, ToastIcon)

  const {child: ToastLabelElement} = pickChild(children, ToastLabel)

  const {child: ToastMessagelement} = pickChild(children, ToastMessage)

  const {child: ToastTitleElement} = pickChild(children, ToastTitle)

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
  const toastClasses = classNames(
    styles.toast,
    color && styles[color],
    withHeader && styles.toastWithHeader,
    isItemContainer && styles.isItemContainer,
    anchorOrigin.vertical === 'top' && styles.verticalTop,
    anchorOrigin.vertical === 'bottom' && styles.verticalBottom,
    anchorOrigin.vertical === 'center' && styles.verticalCenter,
    anchorOrigin.horizontal === 'left' && styles.horizontalLeft,
    anchorOrigin.horizontal === 'right' && styles.horizontalRight,
    anchorOrigin.horizontal === 'center' && styles.horizontalCenter,
    anchorOrigin.vertical === 'center' &&
      anchorOrigin.horizontal === 'center' &&
      styles.centerCenter,
    className,
    'cdg-toast',
  )

  const headerClasses = classNames(
    styles.toastHeader,
    withHeader && styles.headerWithHeader,
    'cdg-toast-header',
  )

  const bodyClasses = classNames(
    styles.body,
    withHeader && styles.bodyWithHeader,
    'cdg-toast-body',
  )

  return (
    <>
      {isOpen &&
        renderContent(
          <CssInjection css={css} childrenRef={toastRef}>
            <div {...delegated} ref={toastRef} className={toastClasses}>
              <div className={headerClasses}>
                <div
                  className={classNames(
                    styles.toastHeaderLeft,
                    'cdg-toast-header-left',
                  )}
                >
                  {ToastIconElement}
                  {ToastTitleElement}
                </div>
                <div
                  className={classNames(
                    styles.toastHeaderRight,
                    'cdg-toast-header-right',
                  )}
                >
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
              <div className={bodyClasses}>
                {ToastMessagelement}
                {ToastActionsElement}
              </div>
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
