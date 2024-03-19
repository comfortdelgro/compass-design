import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/table-resizer.module.css'
export interface Props {
  resizeHandler: (e: unknown) => void
  css?: unknown
}

export type TableResizerProps = Props

const TableResizer = React.forwardRef<
  HTMLTableCellElement,
  TableResizerProps
>(({ resizeHandler, css = {} }, ref) => {
  const TableResizerRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <CssInjection css={css} childrenRef={ref}>
      <div
        className={styles.cdgTableResizer}
        onMouseDown={resizeHandler}
        onTouchStart={resizeHandler}
        ref={TableResizerRef}
      ></div>
    </CssInjection>
  )
})

export default TableResizer
