import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterHeader} from './footer-header.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type FooterHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterHeader = React.forwardRef<HTMLDivElement, FooterHeaderProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    return (
      <StyledFooterHeader ref={ref} css={css} {...delegated}>
        {children}
      </StyledFooterHeader>
    )
  },
)

export default FooterHeader
