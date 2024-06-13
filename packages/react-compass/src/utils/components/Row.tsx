import React from 'react'
import {CSS, CssInjection} from '../objectToCss'
import {classNames} from '../string'
import {useDOMRef} from '../use-dom-ref'
import styles from './components.module.css'

interface RowProps {
  children?: React.ReactNode
  css?: CSS
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
          {...htmlProps}
          ref={rowRef}
          className={classNames(styles.row, className, 'cdg-row')}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default Row
