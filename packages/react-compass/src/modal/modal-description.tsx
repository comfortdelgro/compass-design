import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type ModalDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalDescription = React.forwardRef<
  HTMLDivElement,
  ModalDescriptionProps
>((props, ref) => {
  const {children, css = {}, className, ...htmlProps} = props
  const modalDescriptionRef = useDOMRef<HTMLDivElement>(ref)
  const classNames = [
    className,
    'cdg-modal-description',
    styles.description,
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
