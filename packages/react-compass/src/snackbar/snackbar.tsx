import React from 'react'
import ReactDOM from 'react-dom'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import { SnackbarDetailContainer, SnackbarRightSection, SnackbarVariantProps, StyledSnackbar } from './snackbar.styles'
import SnackbarSuffixIcon from './snackbar-suffix-icon'
import SnackbarPrefixIcon from './snackbar-prefix-icon'
import SnackbarText from './snackbar-text'
import SnackbarDetail from './snackbar-detail'
import SnackbarDetailDescription from './snackbar-detail-description'
// import ToastActions from './toast-actions'
// import ToastCloseIcon from './toast-closeIcon'
// import ToastIcon from './toast-icon'
// import ToastLabel from './toast-label'
// import ToastMessage from './toast-message'
// import ToastTitle from './toast-title'
// import {
//   StyledToast,
//   StyledToastHeader,
//   StyledToastHeaderLeft,
//   StyledToastHeaderRight,
//   SnackbarVariantProps,
// } from './toast.styles'

interface Anchor {
  vertical: 'top' | 'bottom' | 'center'
  horizontal: 'left' | 'center' | 'right'
}
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  portalTo?: HTMLElement
  isOpen?: boolean
  handleClose?: () => void
  autoClose?: false | number
  anchorOrigin?: Anchor
}

export type ToastProps = Props &
  SnackbarVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Snackbar = React.forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
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
    anchorOrigin = {horizontal: 'center', vertical: 'center'},
    // HTMLDiv Props
    ...delegated
  } = props

  const toastRef = useDOMRef<HTMLDivElement>(ref)
  const variantProps = {color} as SnackbarVariantProps

  const {child: SnackbarSuffixIconElement} = pickChild<typeof SnackbarSuffixIcon>(
    children,
    SnackbarSuffixIcon,
  )

  const {child: SnackbarPrefixIconElement} = pickChild<typeof SnackbarPrefixIcon>(
    children,
    SnackbarPrefixIcon,
  )

  const {child: SnackbarTextElement} = pickChild<typeof SnackbarText>(
    children,
    SnackbarText,
  )

  const {child: SnackbarDetailElement} = pickChild<typeof SnackbarDetail>(
    children,
    SnackbarDetail,
  )

  const {child: SnackbarDetailDescriptionElement} = pickChild<typeof SnackbarDetailDescription>(
    children,
    SnackbarDetailDescription,
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
  }, [isOpen])

  return (
    <>
      {isOpen &&
        renderContent(
          <StyledSnackbar
            {...variantProps}
            css={css}
            ref={toastRef}
            {...delegated}
            vertical={anchorOrigin.vertical}
            horizontal={anchorOrigin.horizontal}
            centerCenter={
              anchorOrigin.vertical === 'center' &&
              anchorOrigin.horizontal === 'center'
            }
          >
            {SnackbarPrefixIconElement}
            {SnackbarTextElement}
            <SnackbarRightSection>
              <SnackbarDetailContainer>
                {SnackbarDetailDescriptionElement}
                {SnackbarDetailElement}
              </SnackbarDetailContainer>
                {SnackbarSuffixIconElement  &&
                  React.cloneElement(
                    SnackbarSuffixIconElement as unknown as JSX.Element,
                    {
                      onClose: () => handleClose?.(),
                    },
                )}
            </SnackbarRightSection>
          </StyledSnackbar>,
        )}
    </>
  )
})

export default Snackbar as typeof Snackbar & {
    Text: typeof SnackbarText,
    Detail: typeof SnackbarDetail,
    DetailDescription: typeof SnackbarDetailDescription,
    PrefixIcon: typeof SnackbarPrefixIcon,
    SuffixIcon: typeof SnackbarSuffixIcon,
}
