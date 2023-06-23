import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableRow} from './react-table-row.styles'

interface Props {
  children: React.ReactNode
  isSelected: boolean
}

const ReactTableRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, isSelected}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledReactTableRow isSelected={isSelected} ref={tableRowRef}>
        {children}
      </StyledReactTableRow>
    )
  },
)

export default ReactTableRow
