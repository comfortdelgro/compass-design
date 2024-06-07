import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
  style?: React.CSSProperties
}

const FormLayout = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {children, css, className, style, ...htmlProps} = props

  const formLayoutRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={formLayoutRef}>
      <div
        ref={formLayoutRef}
        className={`cdg-form-layout ${className ? className : ''} ${
          styles.formLayout
        }`}
        style={style}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default FormLayout
