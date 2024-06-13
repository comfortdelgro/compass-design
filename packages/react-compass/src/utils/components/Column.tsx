import React from 'react'
import {CSS, CssInjection} from '../objectToCss'
import {classNames} from '../string'
import {useDOMRef} from '../use-dom-ref'
import styles from './components.module.css'

interface ColumnProps {
  children?: React.ReactNode
  css?: CSS
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
          {...htmlProps}
          ref={columnRef}
          className={classNames(styles.column, className, 'cdg-column')}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default Column
