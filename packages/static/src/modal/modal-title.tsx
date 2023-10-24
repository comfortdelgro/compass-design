import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  h5?: boolean
  css?: unknown
}

export type ModalTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  (props, ref) => {
    const {children, css = {}, h5 = false, className, ...htmlProps} = props
    const modalTitleRef = useDOMRef<HTMLHeadingElement>(ref)

    const classNames = [
      className,
      'cdg-modal-title',
      styles.title,
      h5 && styles.titleH5,
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <CssInjection css={css}>
        <div className={classNames} ref={modalTitleRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ModalTitle
