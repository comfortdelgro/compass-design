import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-toolbar.module.css'
interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type TableToolbarProps = Props

const TableToolbar = React.forwardRef<HTMLDivElement, TableToolbarProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      className,
      // ComponentProps
      children,
    } = props

    const toolbarClass = [styles.cdgTableToolbar, className].join(' ')
    const tableToolbarRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={tableToolbarRef}>
        <div ref={tableToolbarRef} className={toolbarClass}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default TableToolbar
