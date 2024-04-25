import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-resizer.module.css'

export interface Props {
  css?: CSS
  resizeHandler: (e: unknown) => void
}

export type TableResizerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TableResizer = React.forwardRef<HTMLTableCellElement, TableResizerProps>(
  (props, ref) => {
    const {css = {}, className, resizeHandler} = props
    const tableResizerRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = [styles.cdgTableResizer, className, 'cdg-table-resizer']
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={ref}>
        <div
          ref={tableResizerRef}
          className={rootClasses}
          onMouseDown={resizeHandler}
          onTouchStart={resizeHandler}
        />
      </CssInjection>
    )
  },
)

export default TableResizer
