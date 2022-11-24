import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledNavbarBrand} from './navbar-brand.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type NavbarBrandProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  (props, ref) => {
    const {children, className = '', css = {}, ...delegated} = props

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
        {...delegated}
      >
        {renderChildren()}
      </StyledNavbarBrand>
    )
  },
)

export default NavbarBrand
