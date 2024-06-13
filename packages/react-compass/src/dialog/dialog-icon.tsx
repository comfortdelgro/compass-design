import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
}

export type DialogIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogIcon = React.forwardRef<HTMLDivElement, DialogIconProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props
    const dialogIconRef = useDOMRef<HTMLDivElement>(ref)
    const rootClasses = classNames(
      styles.iconContainer,
      className,
      'cdg-dialog-icon',
    )
    return (
      <CssInjection css={css}>
        <div {...htmlProps} className={rootClasses} ref={dialogIconRef}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default DialogIcon
