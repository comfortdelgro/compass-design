import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
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
    const classNames = [className, styles.iconContainer]
      .filter(Boolean)
      .join(' ')
    return (
      <CssInjection css={css}>
        <div className={classNames} ref={dialogIconRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default DialogIcon
