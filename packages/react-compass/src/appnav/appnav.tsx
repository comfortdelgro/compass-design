import React, {HTMLAttributes} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledAppNav} from './appnav.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  sections?: 4 | 5
  position?: 'top' | 'bottom'
  value?: number
  onChange?: (value: number) => void
}

export type AppNavProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

export const AppNav = React.forwardRef<HTMLDivElement, AppNavProps>(
  (props, ref) => {
    const navBarRef = useDOMRef(ref)
    const {
      sections = 4,
      position = 'bottom',
      css = {},
      children,
      onChange,
      ...delegated
    } = props
    return (
      <StyledAppNav
        sections={sections}
        position={position}
        ref={navBarRef}
        css={css}
        {...delegated}
      >
        {children}
      </StyledAppNav>
    )
  },
)
