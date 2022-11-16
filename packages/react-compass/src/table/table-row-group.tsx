import {useTableRowGroup} from '@react-aria/table'
import React from 'react'
import {StyledTableRowGroup} from './table-row-group.styles'

interface Props {
  as?: React.ElementType
  children?: React.ReactNode
}

const TableRowGroup: React.FC<Props> = ({as = 'tbody', children, ...props}) => {
  const {rowGroupProps} = useTableRowGroup()

  return (
    <StyledTableRowGroup as={as} {...props} {...rowGroupProps}>
      {children}
    </StyledTableRowGroup>
  )
}

export default TableRowGroup
