import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import FooterHeader from './footer-header'
import FooterNavigation from './footer-nav'
import FooterPolicy from './footer-policy'
import {FooterVariantProps, StyledFooter} from './footer.styles'

interface Props extends FooterVariantProps, StyledComponentProps {
  children?: React.ReactNode
}

export type FooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const {children, color = 'white', css = {}, ...delegated} = props
  return (
    <StyledFooter ref={ref} css={css} color={color} {...delegated}>
      {children}
    </StyledFooter>
  )
})

export default Footer as typeof Footer & {
  Header: typeof FooterHeader
  Nav: typeof FooterNavigation
  Policy: typeof FooterPolicy
}
