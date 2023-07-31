import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTableV2Footer} from './table-v2-footer.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type TableV2FooterProps = Props

const TableV2Footer = React.forwardRef<HTMLDivElement, TableV2FooterProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
    } = props

    const TableV2FooterRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledTableV2Footer css={css} ref={TableV2FooterRef}>
        {children}
      </StyledTableV2Footer>
    )
  },
)

export default TableV2Footer
