import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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

    const rootClasses = classNames(styles.title, className, 'cdg-modal-title')

    return (
      <CssInjection css={css}>
        <div className={rootClasses} ref={modalTitleRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ModalTitle
