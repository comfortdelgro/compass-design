import {Header} from '@tanstack/react-table'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledReactTableResizer} from './react-table-resizer.styles'
export interface Props extends StyledComponentProps {
  headerProps: Header<any, unknown>
}

export type ReactTableResizerProps = Props

const ReactTableResizer = React.forwardRef<
  HTMLTableCellElement,
  ReactTableResizerProps
>(({headerProps}) => {
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
})

export default ReactTableResizer
