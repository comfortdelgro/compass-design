import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledTableV2RowGroup} from './table-v2-row-group.styles'

interface Props extends StyledComponentProps {
  as?: React.ElementType
  children?: React.ReactNode
}

const TableV2RowGroup: React.FC<Props> = ({
  as = 'tbody',
  children,
  ...props
}) => {
  return (
    <StyledTableV2RowGroup as={as} {...props}>
      {children}
    </StyledTableV2RowGroup>
  )
}

export default TableV2RowGroup
