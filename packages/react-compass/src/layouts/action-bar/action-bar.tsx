import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
}

const ActionBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {children, css, className, ...htmlProps} = props

  const actionBarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={actionBarRef}>
      <div
        ref={actionBarRef}
        className={`cdg-action-bar ${className ? className : ''} ${
          styles.actionBar
        }`}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default ActionBar
