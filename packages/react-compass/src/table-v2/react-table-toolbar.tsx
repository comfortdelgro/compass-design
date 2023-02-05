import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableToolbar} from './react-table-toolbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ReactTableToolbarProps = Props

const ReactTableToolbar = React.forwardRef<
  HTMLDivElement,
  ReactTableToolbarProps
>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    children,
  } = props

  const tableToolbarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledReactTableToolbar css={css} ref={tableToolbarRef}>
      {children}
    </StyledReactTableToolbar>
  )
})

export default ReactTableToolbar
