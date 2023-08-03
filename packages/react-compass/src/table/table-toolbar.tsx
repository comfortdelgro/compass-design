import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableToolbar} from './table-toolbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

const TableToolbar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    children,
  } = props

  const tableToolbarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledTableToolbar css={css} ref={tableToolbarRef}>
      {children}
    </StyledTableToolbar>
  )
})

export default TableToolbar
