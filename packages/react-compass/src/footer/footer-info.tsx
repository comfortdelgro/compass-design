import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterInfo} from './footer-info.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type FooterInfoProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfo = React.forwardRef<HTMLDivElement, FooterInfoProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    return (
      <StyledFooterInfo ref={ref} css={css} {...delegated}>
        {children}
      </StyledFooterInfo>
    )
  },
)

export default FooterInfo
