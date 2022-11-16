import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableFooter} from './table-footer.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

const TableFooter = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    children,
  } = props

  const tableFooterRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledTableFooter css={css} ref={tableFooterRef}>
      {children}
    </StyledTableFooter>
  )
})

export default TableFooter
