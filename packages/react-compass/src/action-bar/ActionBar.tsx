import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledActionBar} from './ActionBar.styles'
import {ActionBarCenterGroup} from './ActionBarCenterGroup'
import {ActionBarLeftGroup} from './ActionBarLeftGroup'
import {ActionBarRightGroup} from './ActionBarRightGroup'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
}

export type ActionBarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const ActionBar = React.forwardRef<HTMLDivElement, ActionBarProps>(
  (props, ref) => {
    const layoutRef = useDOMRef<HTMLDivElement>(ref)
    const {children, css = {}, ...delegated} = props

    return (
      <StyledActionBar ref={layoutRef} css={css} {...delegated}>
        {children}
      </StyledActionBar>
    )
  },
)

export default ActionBar as typeof ActionBar & {
  LeftGroup: typeof ActionBarLeftGroup
  CenterGroup: typeof ActionBarCenterGroup
  RightGroup: typeof ActionBarRightGroup
}
