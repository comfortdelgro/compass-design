import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-header-row.module.css'

interface Props {
  children: React.ReactNode
  css?: CSS
}

const TableHeaderRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, css = {}}, ref) => {
    const TableHeaderRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <CssInjection css={css} childrenRef={TableHeaderRowRef}>
        <tr role='row' className={styles.cdgTableHeaderRow}>
          {children}
        </tr>
      </CssInjection>
    )
  },
)

export default TableHeaderRow
