import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledPageHeaderSubtitle} from './page-header-subtitle.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type PageHeaderSubtitleProps = Props

const PageHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  PageHeaderSubtitleProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledPageHeaderSubtitle ref={ref} css={css} {...delegated}>
      {children}
    </StyledPageHeaderSubtitle>
  )
})

export default PageHeaderSubtitle
