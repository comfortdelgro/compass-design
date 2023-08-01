import React, {PropsWithChildren} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledNavbarLinks} from './navbar-links.styles'

export type NavbarLinksProps = PropsWithChildren<
  StyledComponentProps & React.HTMLAttributes<HTMLUListElement>
>

export const NavbarLinks = React.forwardRef<HTMLUListElement, NavbarLinksProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const listOfChildren = React.Children.toArray(children)

    return (
      <StyledNavbarLinks css={css} ref={ref} {...delegated}>
        {listOfChildren.map((child, index) => {
          return <li key={index}>{child}</li>
        })}
      </StyledNavbarLinks>
    )
  },
)
