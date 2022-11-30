import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterNavigation} from './footer-nav.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  gridItems: number
}

export type FooterNavigationProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterNavigation = React.forwardRef<
  HTMLDivElement,
  FooterNavigationProps
>((props, ref) => {
  const {children, gridItems, css = {}, ...delegated} = props

  const cssProps = {
    $$gridItems: gridItems,
    ...css,
  }

  return (
    <StyledFooterNavigation ref={ref} css={cssProps} {...delegated}>
      {children}
    </StyledFooterNavigation>
  )
})

export default FooterNavigation
