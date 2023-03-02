import {Header} from '@tanstack/react-table'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableResizer} from './react-table-resizer.styles'
export interface Props extends StyledComponentProps {
  headerProps: Header<any, unknown>
}

export type ReactTableResizerProps = Props

const ReactTableResizer = React.forwardRef<
  HTMLTableCellElement,
  ReactTableResizerProps
>(({headerProps}, ref) => {
  const reactTableResizerRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledReactTableResizer
      {...{
        onMouseDown: headerProps.getResizeHandler(),
        onTouchStart: headerProps.getResizeHandler(),
        className: `resizer ${
          headerProps.column.getIsResizing() ? 'isResizing' : ''
        }`,
      }}
      ref={reactTableResizerRef}
    />
  )
})

export default ReactTableResizer
