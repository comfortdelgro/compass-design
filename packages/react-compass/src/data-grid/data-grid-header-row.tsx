import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridHeaderRow} from './data-grid-header-row.styles'

interface Props {
  children: React.ReactNode
}

const DataGridHeaderRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledDataGridHeaderRow ref={tableRowRef}>
        {children}
      </StyledDataGridHeaderRow>
    )
  },
)

export default DataGridHeaderRow
