import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableV2Row} from './table-row.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  isSelected: boolean
  isExpanded: boolean
  css?: CSS
}

const TableV2Row = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, isSelected, isExpanded, css = {}}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledTableV2Row
        isSelected={isSelected}
        isExpanded={isExpanded}
        ref={tableRowRef}
        css={css}
        role='row'
      >
        {children}
      </StyledTableV2Row>
    )
  },
)

export default TableV2Row
