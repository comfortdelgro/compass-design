import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-toolbar.module.css'
interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type TableV2ToolbarProps = Props

const TableV2Toolbar = React.forwardRef<HTMLDivElement, TableV2ToolbarProps>(
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

export default TableV2Toolbar
