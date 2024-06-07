import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type ModalTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props
    const modalTitleRef = useDOMRef<HTMLHeadingElement>(ref)

    const classNames = [
      className,
      'cdg-modal-title',
      styles.title,
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
