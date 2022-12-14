import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import NavbarBrand from './navbar-brand'
import NavbarIcon from './navbar-icon'
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
      {...delegated}
      {...variantProps}
      css={css}
      ref={ref}
    >
      {children}
    </StyledNavbar>
  )
})

export default Navbar as typeof Navbar & {
  Brand: typeof NavbarBrand
  Icon: typeof NavbarIcon
}
