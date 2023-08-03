import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledActionBarLeftGroup} from './ActionBar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
}

export type ActionBarLeftGroupProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const ActionBarLeftGroup = React.forwardRef<
  HTMLDivElement,
  ActionBarLeftGroupProps
>((props, ref) => {
  const layoutRef = useDOMRef<HTMLDivElement>(ref)
  const {children, css = {}, ...delegated} = props

  return (
    <StyledActionBarLeftGroup ref={layoutRef} css={css} {...delegated}>
      {children}
    </StyledActionBarLeftGroup>
  )
})
