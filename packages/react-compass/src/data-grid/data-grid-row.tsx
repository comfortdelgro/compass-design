import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridRow} from './data-grid-row.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  isSelected: boolean
  isExpanded: boolean
  css?: CSS
}

const DataGridRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, isSelected, isExpanded, css = {}}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledDataGridRow
        isSelected={isSelected}
        isExpanded={isExpanded}
        ref={tableRowRef}
        css={css}
        role='row'
      >
        {children}
      </StyledDataGridRow>
    )
  },
)

export default DataGridRow
