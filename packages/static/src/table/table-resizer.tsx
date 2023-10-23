import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableV2Resizer} from './table-resizer.styles'
export interface Props extends StyledComponentProps {
  resizeHandler: (e: unknown) => void
}

export type TableV2ResizerProps = Props

const TableV2Resizer = React.forwardRef<
  HTMLTableCellElement,
  TableV2ResizerProps
>(({resizeHandler}, ref) => {
  const TableV2ResizerRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledTableV2Resizer
      onMouseDown={resizeHandler}
      onTouchStart={resizeHandler}
      ref={TableV2ResizerRef}
    />
  )
})

export default TableV2Resizer
