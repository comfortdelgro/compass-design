import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type ModalActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props
    const modalActionRef = useDOMRef<HTMLDivElement>(ref)
    const classNames = [className, 'cdg-modal-actions', styles.actionsContainer]
      .filter(Boolean)
      .join(' ')
    return (
      <CssInjection css={css}>
        <div ref={modalActionRef} className={classNames} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ModalActions
