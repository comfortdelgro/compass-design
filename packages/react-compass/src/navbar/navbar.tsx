import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import NavbarActions from './navbar-actions'
import NavbarBrand from './navbar-brand'
import {NavbarLinks} from './navbar-links.styles'
import {NavbarSeperator} from './navbar-seperator.style'
import {NavbarVariantProps, StyledNavbar} from './navbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type NavbarProps = Props &
  NavbarVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  const {
    // ComponentProps
    children,
    color = 'blue',
    variant = 'portal',
    className = '',
    // StyledComponentProps
    css = {},
    // HTMLDiv props
    ...delegated
  } = props

  const variantProps = {
    color: color,
    variant: variant,
  } as NavbarVariantProps

  return (
    <StyledNavbar
      className={`${className} navbar-${color}`}
      css={css}
      ref={ref}
      {...variantProps}
      {...delegated}
    >
      {children}
    </StyledNavbar>
  )
})

export default Navbar as typeof Navbar & {
  Brand: typeof NavbarBrand
  Actions: typeof NavbarActions
  Links: typeof NavbarLinks
  Separator: typeof NavbarSeperator
}
