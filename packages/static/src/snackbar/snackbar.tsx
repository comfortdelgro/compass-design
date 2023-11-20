import React from 'react'
import ReactDOM from 'react-dom'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import SnackbarPrefixIcon from './snackbar-prefix-icon'
import SnackbarSuffixIcon from './snackbar-suffix-icon'
import SnackbarText from './snackbar-text'
import styles from './styles/snackbar.module.css'

interface Props {
  id?: number | string
  children?: React.ReactNode
  portalTo?: HTMLElement
  isOpen?: boolean
  handleClose?: () => void
  onClick?: (e: React.MouseEvent, id: number | string | undefined) => void
  autoClose?: false | number
  css?: unknown
  className?: string
  type?: 'success' | 'warning' | 'default' | 'error' | 'reminder' | 'ongoing'
}

export type SnackbarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (props, ref) => {
    const {
      children,
      // StyledComponentProps
      id,
      css = {},
      // VariantProps
      type = 'default',
      className,
      //Component props
      portalTo,
      isOpen = false,
      handleClose,
      autoClose = false,
      onClick,
      // HTMLDiv Props
      ...htmlProps
    } = props

    const snackbarRef = useDOMRef<HTMLDivElement>(ref)

    const {child: SnackbarSuffixIconElement} = pickChild<
      typeof SnackbarSuffixIcon
    >(children, SnackbarSuffixIcon)

    const {child: SnackbarPrefixIconElement} = pickChild<
      typeof SnackbarPrefixIcon
    >(children, SnackbarPrefixIcon)

    const {child: SnackbarTextElement} = pickChild<typeof SnackbarText>(
      children,
      SnackbarText,
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
    const handleClick = (e: React.MouseEvent) => {
      if (onClick) {
        onClick(e, id)
      }
    }

    const contentClasses = [
      'cdg-snackbar',
      styles.snackbar,
      type && styles[`${type}Type`],
      className,
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <>
        {isOpen &&
          renderContent(
            <CssInjection css={css} childrenRef={snackbarRef}>
              <div
                className={contentClasses}
                ref={snackbarRef}
                onClick={handleClick}
                {...htmlProps}
              >
                {SnackbarPrefixIconElement}
                {SnackbarTextElement}
                <div
                  className={`cdg-snackbar-right-section ${styles.snackbarRightSection}`}
                >
                  {SnackbarSuffixIconElement &&
                    React.cloneElement(
                      SnackbarSuffixIconElement as unknown as JSX.Element,
                      {
                        onClose: () => handleClose?.(),
                      },
                    )}
                </div>
              </div>
            </CssInjection>,
          )}
      </>
    )
  },
)

export default Snackbar as typeof Snackbar & {
  Text: typeof SnackbarText
  PrefixIcon: typeof SnackbarPrefixIcon
  SuffixIcon: typeof SnackbarSuffixIcon
}
