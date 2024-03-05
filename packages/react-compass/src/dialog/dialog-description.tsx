import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type DialogDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>((props, ref) => {
  const {children, css = {}, className, ...htmlProps} = props
  const dialogDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)
  const classNames = [styles.description, className].filter(Boolean).join(' ')
  return (
    <CssInjection css={css}>
      <div ref={dialogDescriptionRef} className={classNames} {...htmlProps}>
        {children}
      </div>
    </CssInjection>
  )
})

export default DialogDescription
