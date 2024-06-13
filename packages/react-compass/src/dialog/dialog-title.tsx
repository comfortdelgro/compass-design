import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type DialogTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props
    const dialogTitleRef = useDOMRef<HTMLHeadingElement>(ref)
    const rootClasses = classNames(styles.title, className, 'cdg-dialog-title')
    return (
      <CssInjection css={css}>
        <div {...htmlProps} className={rootClasses} ref={dialogTitleRef}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default DialogTitle
