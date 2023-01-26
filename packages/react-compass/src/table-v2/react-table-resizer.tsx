import React from 'react'
import {StyledReactTableResizer} from './react-table-resizer.styles'

const ReactTableResizer = React.forwardRef<HTMLTableCellElement, any>(
  ({headerProps}) => {
    return (
      <StyledReactTableResizer
        {...{
          onMouseDown: headerProps.getResizeHandler(),
          onTouchStart: headerProps.getResizeHandler(),
          className: `resizer ${
            headerProps.column.getIsResizing() ? 'isResizing' : ''
          }`,
          style: {
            transform: '',
          },
        }}
      />
    )
  },
)

export default ReactTableResizer
