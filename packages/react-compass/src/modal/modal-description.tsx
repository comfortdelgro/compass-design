import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  h5?: boolean
  children?: React.ReactNode
  css?: unknown
}

export type ModalDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalDescription = React.forwardRef<
  HTMLDivElement,
  ModalDescriptionProps
>((props, ref) => {
  const {children, css = {}, h5 = false, className, ...htmlProps} = props
  const modalDescriptionRef = useDOMRef<HTMLDivElement>(ref)
  const classNames = [
    className,
    'cdg-modal-description',
    styles.description,
    h5 && styles.descriptionH5,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <CssInjection css={css}>
      <div className={classNames} ref={modalDescriptionRef} {...htmlProps}>
        {children}
      </div>
    </CssInjection>
  )
})

export default ModalDescription
