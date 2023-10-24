import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-header-row.module.css'

interface Props {
  children: React.ReactNode
  css?: unknown
}

const TableV2HeaderRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, css = {}}, ref) => {
    const TableV2HeaderRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <CssInjection css={css} childrenRef={TableV2HeaderRowRef}>
        <tr role='row' className={styles.cdgTableHeaderRow}>
          {children}
        </tr>
      </CssInjection>
    )
  },
)

export default TableV2HeaderRow
