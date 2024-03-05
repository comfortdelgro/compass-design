import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
  columns?: 1 | 2 | 3
  style?: React.CSSProperties
}

const FormLayoutGroup = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {children, css = {}, className = '', style, ...htmlProps} = props

    const layoutGroupRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={layoutGroupRef}>
        <div
          ref={layoutGroupRef}
          className={`${className} ${styles.formLayoutGroup}`}
          style={style}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default FormLayoutGroup
