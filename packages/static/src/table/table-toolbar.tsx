import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableV2Toolbar} from './table-toolbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type TableV2ToolbarProps = Props

const TableV2Toolbar = React.forwardRef<HTMLDivElement, TableV2ToolbarProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
    } = props

    const tableToolbarRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledTableV2Toolbar css={css} ref={tableToolbarRef}>
        {children}
      </StyledTableV2Toolbar>
    )
  },
)

export default TableV2Toolbar
