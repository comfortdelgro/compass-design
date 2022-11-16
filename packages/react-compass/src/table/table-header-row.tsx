import {useTableHeaderRow} from '@react-aria/table'
import {TableState} from '@react-stately/table'
import type {GridNode} from '@react-types/grid'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableHeaderRow} from './table-header-row.styles'

interface Props<T = unknown> {
  item: GridNode<T>
  state: TableState<T>
  children: React.ReactNode
}

const TableHeaderRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({item, state, children}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableRowElement>(ref)
    const {rowProps} = useTableHeaderRow({node: item}, state, tableRowRef)

    return (
      <StyledTableHeaderRow ref={tableRowRef} {...rowProps}>
        {children}
      </StyledTableHeaderRow>
    )
  },
)

export default TableHeaderRow
