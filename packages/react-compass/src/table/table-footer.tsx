import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-footer.module.css'
interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type TableFooterProps = Props

const TableFooter = React.forwardRef<HTMLDivElement, TableFooterProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
    } = props

    const TableFooterRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={TableFooterRef}>
        <div className={styles.cdgTableFooter}>{children}</div>
      </CssInjection>
    )
  },
)

export default TableFooter
