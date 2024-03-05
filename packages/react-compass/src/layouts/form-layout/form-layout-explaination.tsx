import React, {CSSProperties} from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  title?: React.ReactNode
  css?: unknown
  className?: string
  description: string
  style?: CSSProperties
}

const FormLayoutExplaination = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {title, css = {}, className, description, style, ...htmlProps} = props

    const formExplainationRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={formExplainationRef}>
        <div
          ref={formExplainationRef}
          className={`${className} ${styles.formExplaination}`}
          {...htmlProps}
        >
          <div className='form-title'>{title}</div>
          <div className='form-explaination'>{description}</div>
        </div>
      </CssInjection>
    )
  },
)

export default FormLayoutExplaination
