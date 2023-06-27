import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridRow} from './data-grid-row.styles'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  isSelected: boolean
  css?: CSS
}

const DataGridRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({children, isSelected, css = {}}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <StyledDataGridRow isSelected={isSelected} ref={tableRowRef} css={css}>
        {children}
      </StyledDataGridRow>
    )
  },
)

export default DataGridRow
