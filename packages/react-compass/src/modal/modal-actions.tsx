import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type ModalActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props
    const modalActionRef = useDOMRef<HTMLDivElement>(ref)
    const rootClasses = classNames(
      styles.actionsContainer,
      className,
      'cdg-modal-actions',
    )

    return (
      <CssInjection css={css}>
        <div {...htmlProps} ref={modalActionRef} className={rootClasses}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ModalActions
