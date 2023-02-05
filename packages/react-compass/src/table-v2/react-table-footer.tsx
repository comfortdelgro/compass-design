import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledReactTableFooter} from './react-table-footer.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ReactTableFooterProps = Props

const ReactTableFooter = React.forwardRef<
  HTMLDivElement,
  ReactTableFooterProps
>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    children,
  } = props

  const reactTableFooterRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledReactTableFooter css={css} ref={reactTableFooterRef}>
      {children}
    </StyledReactTableFooter>
  )
})

export default ReactTableFooter
