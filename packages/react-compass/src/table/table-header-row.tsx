import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-header-row.module.css'

interface Props {
  css?: CSS
}

export type TableHeaderRowProps = Props &
  Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>

const TableHeaderRow = React.forwardRef<
  HTMLTableRowElement,
  TableHeaderRowProps
>((props, ref) => {
  const {children, className, css = {}} = props
  const tableHeaderRowRef = useDOMRef<HTMLTableRowElement>(ref)

  const rootClasses = [
    styles.cdgTableHeaderRow,
    className,
    'cdg-table-header-row',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={tableHeaderRowRef}>
      <tr role='row' ref={tableHeaderRowRef} className={rootClasses}>
        {children}
      </tr>
    </CssInjection>
  )
})

export default TableHeaderRow
