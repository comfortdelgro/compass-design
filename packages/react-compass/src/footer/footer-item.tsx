import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterItem} from './footer-item.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type FooterItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterItem = React.forwardRef<HTMLDivElement, FooterItemProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    return (
      <StyledFooterItem ref={ref} css={css} {...delegated}>
        {children}
      </StyledFooterItem>
    )
  },
)

export default FooterItem
