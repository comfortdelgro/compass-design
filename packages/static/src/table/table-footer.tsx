import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-footer.module.css'
interface Props {
  children?: React.ReactNode
  css?: unknown
}

export type TableV2FooterProps = Props

const TableV2Footer = React.forwardRef<HTMLDivElement, TableV2FooterProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
    } = props

    const tableV2FooterRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={tableV2FooterRef}>
        <div className={styles.cdgTableFooter}>{children}</div>
      </CssInjection>
    )
  },
)

export default TableV2Footer
