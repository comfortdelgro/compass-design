import React from 'react'
import CssInjection from '../objectToCss/CssInjection'
import {useDOMRef} from '../use-dom-ref'
import styles from './components.module.css'

interface ColumnProps {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type ColumnComponentProps = ColumnProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof ColumnProps>

const Column = React.forwardRef<HTMLDivElement, ColumnComponentProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props
    const columnRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={columnRef}>
        <div
          className={`cdg-column ${className} ${styles.column}`}
          ref={columnRef}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default Column
