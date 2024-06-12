import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
  css?: CSS
}

export type ModalCloseIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalCloseIcon = React.forwardRef<HTMLDivElement, ModalCloseIconProps>(
  (props, ref) => {
    const {children, css = {}, onClose, className, ...htmlProps} = props

    const modalCloseIconRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = classNames(
      styles.closeIcon,
      className,
      'cdg-modal-close-icon',
    )

    return (
      <CssInjection css={css}>
        <div
          ref={modalCloseIconRef}
          onClick={() => onClose?.()}
          tabIndex={0}
          className={rootClasses}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ModalCloseIcon
