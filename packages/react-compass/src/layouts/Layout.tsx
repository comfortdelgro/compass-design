import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledLayout} from './Layout.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
  direction?: 'row' | 'column'
  flex?: Number
}

export type LayoutProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (props, ref) => {
    const layoutRef = useDOMRef<HTMLDivElement>(ref)
    const {
      children,
      direction = 'column',
      flex = 0,
      css = {},
      ...delegated
    } = props

    return (
      <StyledLayout
        ref={layoutRef}
        css={css}
        {...delegated}
        className={`cdg-layout ${direction}`}
        style={{flex: flex.toString()}}
      >
        {children}
      </StyledLayout>
    )
  },
)

export default Layout as typeof Layout & {}
