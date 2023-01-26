import React from 'react'
import {StyledReactTableRowGroup} from './react-table-row-group.styles'

interface Props {
  as?: React.ElementType
  children?: React.ReactNode
}

const ReactTableRowGroup: React.FC<Props> = ({
  as = 'tbody',
  children,
  ...props
}) => {
  return (
    <StyledReactTableRowGroup as={as} {...props}>
      {children}
    </StyledReactTableRowGroup>
  )
}

export default ReactTableRowGroup
