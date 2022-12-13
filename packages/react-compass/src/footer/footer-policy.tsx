import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterPolicy} from './footer-policy.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type FooterPolicyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterPolicy = React.forwardRef<HTMLDivElement, FooterPolicyProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    return (
      <StyledFooterPolicy ref={ref} css={css} {...delegated}>
        {children}
      </StyledFooterPolicy>
    )
  },
)

export default FooterPolicy
