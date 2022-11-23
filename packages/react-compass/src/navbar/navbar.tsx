import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import NavbarBrand from './navbar-brand'
import NavbarIcon from './navbar-icon'
import {NavbarVariantProps, StyledNavbar} from './navbar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type NavbarProps = Props & NavbarVariantProps

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  const {children, color = 'blue', variant = 'portal', css = {}} = props

  const variantProps = {
    color: color,
    variant: variant,
  }

  return (
    <StyledNavbar
      className={`navbar-${color}`}
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
