import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledLayout} from './Layout.styles'

export type LayoutAlignment =
  | 'start-start'
  | 'center-start'
  | 'end-start'
  | 'start-center'
  | 'center-center'
  | 'end-center'
  | 'start-end'
  | 'center-end'
  | 'end-end'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
  direction?: 'row' | 'column'
  flex?: Number
  align?: LayoutAlignment
  className?: string
}

export type LayoutProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (props, ref) => {
    const layoutRef = useDOMRef<HTMLDivElement>(ref)
    const {
      children,
      direction = 'column',
      align,
      flex,
      className,
      css = {},
      ...delegated
    } = props

    return (
      <StyledLayout
        ref={layoutRef}
        css={css}
        {...delegated}
        className={`cdg-layout ${direction} ${align ? ' ' + align : ''} ${
          className ? ' ' + className : ''
        }`}
        style={flex ? {flex: flex.toString()} : {}}
      >
        {children}
      </StyledLayout>
    )
  },
)

export default Layout as typeof Layout & {}
