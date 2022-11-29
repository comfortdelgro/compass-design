import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooter} from './footer.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type FooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  return (
    <StyledFooter ref={ref} css={css} {...delegated}>
      {children}
    </StyledFooter>
  )
})

export default Footer
