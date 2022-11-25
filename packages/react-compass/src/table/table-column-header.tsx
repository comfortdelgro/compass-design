import {faSort} from '@fortawesome/free-solid-svg-icons'
import {useTableColumnHeader} from '@react-aria/table'
import {TableState} from '@react-stately/table'
import type {GridNode} from '@react-types/grid'
import React from 'react'
import {Icon} from '../icon'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledTableColumnHeader,
  StyledTableHeaderWrapper,
  StyledTableSortingIndicator,
} from './table-column-header.styles'

interface Props<T = unknown> {
  column: GridNode<T>
  state: TableState<T>
}

const TableColumnHeader = React.forwardRef<HTMLTableCellElement, Props>(
  ({column, state}, ref) => {
    const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)
    const {columnHeaderProps} = useTableColumnHeader(
      {node: column},
      state,
      tableRowRef,
    )

    return (
      <StyledTableColumnHeader ref={tableRowRef} {...columnHeaderProps}>
        <StyledTableHeaderWrapper>
          <span>{column.rendered}</span>

          {(column.props as {allowsSorting: boolean}).allowsSorting && (
            <StyledTableSortingIndicator
              aria-hidden='true'
              style={{
                visibility:
                  state.sortDescriptor?.column === column.key
                    ? 'visible'
                    : 'hidden',
              }}
            >
              <Icon icon={faSort} />
            </StyledTableSortingIndicator>
          )}
        </StyledTableHeaderWrapper>
      </StyledTableColumnHeader>
    )
  },
)

export default TableColumnHeader
