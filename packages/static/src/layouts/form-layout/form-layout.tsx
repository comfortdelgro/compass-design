import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import FormLayoutExplaination from './form-layout-explaination'
import FormLayoutGroup from './form-layout-group'
import FormLayoutRow from './form-layout-row'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: unknown
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

export default FormLayout as typeof FormLayout & {
  Row: typeof FormLayoutRow
  Group: typeof FormLayoutGroup
  Explaination: typeof FormLayoutExplaination
}
