import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridRow} from './data-grid-row.styles'

interface Props {
  children: React.ReactNode
  isSelected: boolean
}

const DataGridRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, isSelected}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledDataGridRow isSelected={isSelected} ref={tableRowRef}>
        {children}
      </StyledDataGridRow>
    )
  },
)

export default DataGridRow
