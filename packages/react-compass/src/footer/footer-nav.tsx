import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterNavigation} from './footer-nav.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  gridNumber: number
  tabletGridNumber?: number
}

export type FooterNavigationProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterNavigation = React.forwardRef<
  HTMLDivElement,
  FooterNavigationProps
>((props, ref) => {
  const {
    children,
    gridNumber,
    // tablet grid column number will be 3 by default if grid column number is greater than 3
    tabletGridNumber = gridNumber >= 3 ? 3 : gridNumber,
    css = {},
    ...delegated
  } = props

  const cssProps = {
    $$gridNumber: gridNumber,
    $$tabletGridNumber: tabletGridNumber,
    ...css,
  }

  return (
    <StyledFooterNavigation ref={ref} css={cssProps} {...delegated}>
      {children}
    </StyledFooterNavigation>
  )
})

export default FooterNavigation
