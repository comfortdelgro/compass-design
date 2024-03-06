import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
  css?: unknown
}

export type ModalCloseIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalCloseIcon = React.forwardRef<HTMLDivElement, ModalCloseIconProps>(
  (props, ref) => {
    const {children, css = {}, onClose, className, ...htmlProps} = props

    const modalCloseIconRef = useDOMRef<HTMLDivElement>(ref)

    const classNames = ['cdg-modal-close-icon', className, styles.closeIcon]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css}>
        <div
          ref={modalCloseIconRef}
          onClick={() => onClose?.()}
          tabIndex={0}
          className={classNames}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ModalCloseIcon
