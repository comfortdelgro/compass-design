import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterInfoSocial} from './footer-info-social.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type FooterInfoSocialProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoSocial = React.forwardRef<
  HTMLDivElement,
  FooterInfoSocialProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  return (
    <StyledFooterInfoSocial ref={ref} css={css} {...delegated}>
      {children}
    </StyledFooterInfoSocial>
  )
})

export default FooterInfoSocial
