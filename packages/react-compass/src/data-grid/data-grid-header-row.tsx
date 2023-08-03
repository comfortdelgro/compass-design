import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridHeaderRow} from './data-grid-header-row.styles'

interface Props {
  children: React.ReactNode
}

const DataGridHeaderRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children}, ref) => {
    const dataGridHeaderRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledDataGridHeaderRow ref={dataGridHeaderRowRef} role='row'>
        {children}
      </StyledDataGridHeaderRow>
    )
  },
)

export default DataGridHeaderRow
