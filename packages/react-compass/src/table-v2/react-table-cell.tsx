import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableCell} from './react-table-cell.styles'

const ReactTableCell = React.forwardRef<HTMLTableCellElement, any>(
  ({cell}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)

    return <StyledReactTableCell ref={tableRowRef}>{cell}</StyledReactTableCell>
  },
)

export default ReactTableCell
