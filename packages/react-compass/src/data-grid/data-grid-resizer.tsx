import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridResizer} from './data-grid-resizer.styles'
export interface Props extends StyledComponentProps {
  resizeHandler: (e: unknown) => void
}

export type DataGridResizerProps = Props

const DataGridResizer = React.forwardRef<
  HTMLTableCellElement,
  DataGridResizerProps
>(({resizeHandler}, ref) => {
  const DataGridResizerRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledDataGridResizer
      onMouseDown={resizeHandler}
      onTouchStart={resizeHandler}
      ref={DataGridResizerRef}
    />
  )
})

export default DataGridResizer
