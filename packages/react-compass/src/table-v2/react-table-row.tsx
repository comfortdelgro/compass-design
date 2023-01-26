import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableRow} from './react-table-row.styles'

interface Props {
  children: React.ReactNode
}

const ReactTableRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledReactTableRow ref={tableRowRef}>{children}</StyledReactTableRow>
    )
  },
)

export default ReactTableRow
