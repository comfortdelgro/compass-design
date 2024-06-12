import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-row.module.css'

interface Props {
  css?: CSS
  isSelected: boolean
  isExpanded: boolean
}

export type TableRowProps = Props &
  Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const {css = {}, children, isSelected, isExpanded, className} = props
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    const rowClasses = classNames(
      styles.cdgTableRow,
      isSelected && styles.isSelected,
      isExpanded && styles.isExpanded,
      className,
      'cdg-table-row',
    )

    return (
      <CssInjection css={css} childrenRef={tableRowRef}>
        <tr role='row' className={rowClasses} ref={tableRowRef}>
          {children}
        </tr>
      </CssInjection>
    )
  },
)

export default TableRow
