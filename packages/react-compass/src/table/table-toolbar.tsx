import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-toolbar.module.css'

interface Props {
  css?: CSS
}

export type TableToolbarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TableToolbar = React.forwardRef<HTMLDivElement, TableToolbarProps>(
  (props, ref) => {
    const {css = {}, className, children} = props
    const tableToolbarRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = [
      styles.cdgTableToolbar,
      className,
      'cdg-table-toolbar',
    ].join(' ')

    return (
      <CssInjection css={css} childrenRef={tableToolbarRef}>
        <div ref={tableToolbarRef} className={rootClasses}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default TableToolbar
