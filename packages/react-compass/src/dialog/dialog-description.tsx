import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type DialogDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>((props, ref) => {
  const {children, css = {}, className, ...htmlProps} = props
  const dialogDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)
  const rootClasses = classNames(
    styles.description,
    className,
    'cdg-dialog-description',
  )
  return (
    <CssInjection css={css}>
      <div {...htmlProps} ref={dialogDescriptionRef} className={rootClasses}>
        {children}
      </div>
    </CssInjection>
  )
})

export default DialogDescription
