import React from 'react'
import CssInjection from '../objectToCss/CssInjection'
import {useDOMRef} from '../use-dom-ref'
import styles from './components.module.css'

interface RowProps {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type RowComponentProps = RowProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof RowProps>

const Row = React.forwardRef<HTMLDivElement, RowComponentProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props
    const rowRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={rowRef}>
        <div
          className={`cdg-row ${className} ${styles.row}`}
          ref={rowRef}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default Row
