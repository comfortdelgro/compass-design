import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/table-resizer.module.css'
export interface Props {
  resizeHandler: (e: unknown) => void
  css?: unknown
}

export type TableV2ResizerProps = Props

const TableV2Resizer = React.forwardRef<
  HTMLTableCellElement,
  TableV2ResizerProps
>(({ resizeHandler, css = {} }, ref) => {
  const TableV2ResizerRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <CssInjection css={css} childrenRef={ref}>
      <div
        className={styles.cdgTableResizer}
        onMouseDown={resizeHandler}
        onTouchStart={resizeHandler}
        ref={TableV2ResizerRef}
      ></div>
    </CssInjection>
  )
})

export default TableV2Resizer
