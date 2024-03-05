import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type DialogTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props
    const dialogTitleRef = useDOMRef<HTMLHeadingElement>(ref)
    const classNames = [styles.title, className].filter(Boolean).join(' ')
    return (
      <CssInjection css={css}>
        <div className={classNames} ref={dialogTitleRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default DialogTitle
