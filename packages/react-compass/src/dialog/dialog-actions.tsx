import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  isMobile?: boolean
  css?: unknown
}

export type DialogActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      isMobile = false,
      className,
      ...htmlProps
    } = props
    const dialogActionRef = useDOMRef<HTMLDivElement>(ref)

    const classNames = [
      styles.actionsContainer,
      isMobile && styles.actionsContainerResponsive,
      className,
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <CssInjection css={css}>
        <div className={classNames} ref={dialogActionRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default DialogActions
