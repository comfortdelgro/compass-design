import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledNavbarBrand} from './navbar-brand.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  hiddenOnMobile?: boolean
}

export type NavbarBrandProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      className = '',
      // StyledComponentProps
      css = {},
      hiddenOnMobile = false,
      // HTMLDiv props
      ...delegated
    } = props

    // Render children as h1 tag if it's a string
    const renderChildren = () => {
      if (typeof children === 'string') {
        return <h1 className='navbar-brand-title'>{children}</h1>
      }
      return children
    }

    return (
      <StyledNavbarBrand
        className={`${className} navbar-brand`}
        css={css}
        ref={ref}
        hiddenOnMobile={hiddenOnMobile ? 'true' : 'false'}
        {...delegated}
      >
        {renderChildren()}
      </StyledNavbarBrand>
    )
  },
)

export default NavbarBrand
