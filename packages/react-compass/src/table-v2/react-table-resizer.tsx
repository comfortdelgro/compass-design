import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableResizer} from './react-table-resizer.styles'
export interface Props extends StyledComponentProps {
  resizeHandler: (e: unknown) => void
}

export type ReactTableResizerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ReactTableResizer = React.forwardRef<
  HTMLDivElement,
  ReactTableResizerProps
>(({resizeHandler}, ref) => {
  const reactTableResizerRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledReactTableResizer
      onMouseDown={resizeHandler}
      onTouchStart={resizeHandler}
      ref={reactTableResizerRef}
    />
  )
})

export default ReactTableResizer
