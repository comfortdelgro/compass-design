import React from 'react'
import Box from '../box'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledNavbarActions} from './navbar-actions.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  alternativeElement?: React.ReactNode
}

export type NavbarActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
  (props, ref) => {
    const {children, css = {}, alternativeElement, ...delegated} = props
    return (
      <StyledNavbarActions ref={ref} css={css} {...delegated}>
        <Box
          className={`default-navbar-actions ${
            alternativeElement ? 'has-alternative' : ''
          }`}
        >
          {children}
        </Box>
        {alternativeElement ? (
          <Box className='alternative-navbar-actions'>{alternativeElement}</Box>
        ) : (
          <></>
        )}
      </StyledNavbarActions>
    )
  },
)

export default NavbarActions
