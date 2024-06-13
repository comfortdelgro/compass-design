import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {useDOMRef} from '../../utils/use-dom-ref'
import FormExplaination from './form-layout-explaination'
import FormGroup from './form-layout-group'
import FormRow from './form-layout-row'
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
        {...htmlProps}
        style={style}
        ref={formLayoutRef}
        className={classNames(styles.formLayout, className, 'cdg-layout-form')}
      >
        {children}
      </div>
    </CssInjection>
  )
}) as typeof FormLayout & {
  Row: typeof FormRow
  Group: typeof FormGroup
  Explaination: typeof FormExplaination
}

export default FormLayout
