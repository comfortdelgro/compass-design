import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableHeaderRow} from './react-table-header-row.styles'

interface Props {
  children: React.ReactNode
}

const ReactTableHeaderRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledReactTableHeaderRow ref={tableRowRef}>
        {children}
      </StyledReactTableHeaderRow>
    )
  },
)

export default ReactTableHeaderRow
