import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-row.module.css'

interface Props {
  children: React.ReactNode
  isSelected: boolean
  isExpanded: boolean
  css?: unknown
  className?: string
}

const TableV2Row = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, isSelected, isExpanded, css = {}, className}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)
    const rowClasses = [
      styles.cdgTableRow,
      isSelected && styles.isSelected,
      isExpanded && styles.isExpanded,
      className,
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <CssInjection childrenRef={tableRowRef} css={css}>
        <tr role='row' className={rowClasses} ref={tableRowRef}>
          {children}
        </tr>
      </CssInjection>
    )
  },
)

export default TableV2Row
