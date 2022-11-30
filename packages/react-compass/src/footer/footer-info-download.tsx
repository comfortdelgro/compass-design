import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledFooterInfoDownload} from './footer-info-download.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type FooterInfoDownloadProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoDownload = React.forwardRef<
  HTMLDivElement,
  FooterInfoDownloadProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  return (
    <StyledFooterInfoDownload ref={ref} css={css} {...delegated}>
      {children}
    </StyledFooterInfoDownload>
  )
})

export default FooterInfoDownload
