import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {ActionBarCenterGroup} from './ActionBarCenterGroup'
import {ActionBarLeftGroup} from './ActionBarLeftGroup'
import {ActionBarRightGroup} from './ActionBarRightGroup'
import {StyledLayout} from './Layout.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
  direction?: 'row' | 'column'
}

export type LayoutProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (props, ref) => {
    const layoutRef = useDOMRef<HTMLDivElement>(ref)
    const {children, direction = 'column', css = {}, ...delegated} = props

    return (
      <StyledLayout
        ref={layoutRef}
        css={css}
        {...delegated}
        className={`cdg-layout ${direction}`}
      >
        {children}
      </StyledLayout>
    )
  },
)

export default Layout as typeof Layout & {
  LeftGroup: typeof ActionBarLeftGroup
  CenterGroup: typeof ActionBarCenterGroup
  RightGroup: typeof ActionBarRightGroup
}
