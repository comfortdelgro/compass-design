import {Header} from '@tanstack/react-table'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridResizer} from './data-grid-resizer.styles'
export interface Props extends StyledComponentProps {
  headerProps: Header<any, unknown>
}

export type DataGridResizerProps = Props

const DataGridResizer = React.forwardRef<
  HTMLTableCellElement,
  DataGridResizerProps
>(({headerProps}, ref) => {
  const DataGridResizerRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledDataGridResizer
      {...{
        onMouseDown: headerProps.getResizeHandler(),
        onTouchStart: headerProps.getResizeHandler(),
        className: `resizer ${
          headerProps.column.getIsResizing() ? 'isResizing' : ''
        }`,
      }}
      ref={DataGridResizerRef}
    />
  )
})

export default DataGridResizer
