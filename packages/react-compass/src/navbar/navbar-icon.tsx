import React from 'react'
import {IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledNavbarIcon} from './navbar-icon.styles'

interface Props extends StyledComponentProps {
  icon: IconProp
}

export type NavbarIconProps = Props

const NavbarIcon = React.forwardRef<SVGSVGElement, NavbarIconProps>(
  (props, ref) => {
    const {icon, css = {}} = props
    return (
      <StyledNavbarIcon
        className='navbar-icon'
        icon={icon}
        css={css}
        ref={ref}
      />
    )
  },
)

export default NavbarIcon
