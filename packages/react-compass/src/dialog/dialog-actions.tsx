import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  isMobile?: boolean
  css?: CSS
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

    const rootClasses = classNames(
      styles.actionsContainer,
      isMobile && styles.actionsContainerResponsive,
      className,
      'cdg-dialog-action',
    )

    return (
      <CssInjection css={css}>
        <div {...htmlProps} className={rootClasses} ref={dialogActionRef}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default DialogActions
