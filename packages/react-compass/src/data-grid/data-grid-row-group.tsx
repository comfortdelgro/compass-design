import React from 'react'
import {StyledDataGridRowGroup} from './data-grid-row-group.styles'

interface Props {
  as?: React.ElementType
  children?: React.ReactNode
}

const DataGridRowGroup: React.FC<Props> = ({
  as = 'tbody',
  children,
  ...props
}) => {
  return (
    <StyledDataGridRowGroup as={as} {...props}>
      {children}
    </StyledDataGridRowGroup>
  )
}

export default DataGridRowGroup
