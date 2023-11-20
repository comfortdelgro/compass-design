import React from 'react'
import CssInjection from '../objectToCss/CssInjection'
import {useDOMRef} from '../use-dom-ref'
import styles from './components.module.css'

interface FlexboxProps {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type FlexboxComponentProps = FlexboxProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof FlexboxProps>

const Flexbox = React.forwardRef<HTMLDivElement, FlexboxComponentProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props
    const flexboxRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={flexboxRef}>
        <div
          className={`cdg-flexbox ${className} ${styles.flexbox}`}
          ref={flexboxRef}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default Flexbox
