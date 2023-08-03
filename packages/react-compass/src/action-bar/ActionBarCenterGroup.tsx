import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledActionBarCenterGroup} from './ActionBar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
}

export type ActionBarCenterGroupProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const ActionBarCenterGroup = React.forwardRef<
  HTMLDivElement,
  ActionBarCenterGroupProps
>((props, ref) => {
  const layoutRef = useDOMRef<HTMLDivElement>(ref)
  const {children, css = {}, ...delegated} = props

  return (
    <StyledActionBarCenterGroup ref={layoutRef} css={css} {...delegated}>
      {children}
    </StyledActionBarCenterGroup>
  )
})
