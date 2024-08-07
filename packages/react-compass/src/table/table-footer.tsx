import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-footer.module.css'

interface Props {
  css?: CSS
}

export type TableFooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TableFooter = React.forwardRef<HTMLDivElement, TableFooterProps>(
  (props, ref) => {
    const {css = {}, className, children} = props
    const TableFooterRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = classNames(
      styles.cdgTableFooter,
      className,
      'cdg-table-footer',
    )

    return (
      <CssInjection css={css} childrenRef={TableFooterRef}>
        <div className={rootClasses}>{children}</div>
      </CssInjection>
    )
  },
)

export default TableFooter
