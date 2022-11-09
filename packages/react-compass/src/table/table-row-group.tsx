import {useTableRowGroup} from '@react-aria/table'
import React from 'react'
import {StyledTableRowGroup} from './table-row-group.styles'

interface Props {
  as?: React.ElementType
}

const TableRowGroup: React.FC<Props> = ({as = 'tbody', children}) => {
  const {rowGroupProps} = useTableRowGroup()

  return (
    <StyledTableRowGroup as={as} {...rowGroupProps}>
      {children}
    </StyledTableRowGroup>
  )
}

export default TableRowGroup
