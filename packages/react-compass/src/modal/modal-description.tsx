import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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

  const rootClasses = classNames(
    styles.description,
    className,
    'cdg-modal-description',
  )

  return (
    <CssInjection css={css}>
      <div className={rootClasses} ref={modalDescriptionRef} {...htmlProps}>
        {children}
      </div>
    </CssInjection>
  )
})

export default ModalDescription
