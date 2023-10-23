import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableV2HeaderRow} from './table-header-row.styles'

interface Props {
  children: React.ReactNode
}

const TableV2HeaderRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children}, ref) => {
    const TableV2HeaderRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledTableV2HeaderRow ref={TableV2HeaderRowRef} role='row'>
        {children}
      </StyledTableV2HeaderRow>
    )
  },
)

export default TableV2HeaderRow
