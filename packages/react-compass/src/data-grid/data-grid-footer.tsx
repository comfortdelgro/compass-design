import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridFooter} from './data-grid-footer.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DataGridFooterProps = Props

const DataGridFooter = React.forwardRef<HTMLDivElement, DataGridFooterProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
    } = props

    const DataGridFooterRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledDataGridFooter css={css} ref={DataGridFooterRef}>
        {children}
      </StyledDataGridFooter>
    )
  },
)

export default DataGridFooter
