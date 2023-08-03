import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDataGridToolbar} from './data-grid-toolbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DataGridToolbarProps = Props

const DataGridToolbar = React.forwardRef<HTMLDivElement, DataGridToolbarProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      children,
    } = props

    const tableToolbarRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledDataGridToolbar css={css} ref={tableToolbarRef}>
        {children}
      </StyledDataGridToolbar>
    )
  },
)

export default DataGridToolbar
