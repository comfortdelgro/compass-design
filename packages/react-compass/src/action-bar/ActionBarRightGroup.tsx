import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledActionBarRightGroup} from './ActionBar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
}

export type ActionBarRightGroupProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const ActionBarRightGroup = React.forwardRef<
  HTMLDivElement,
  ActionBarRightGroupProps
>((props, ref) => {
  const layoutRef = useDOMRef<HTMLDivElement>(ref)
  const {children, css = {}, ...delegated} = props

  return (
    <StyledActionBarRightGroup ref={layoutRef} css={css} {...delegated}>
      {children}
    </StyledActionBarRightGroup>
  )
})
