import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledPageHeaderHeader} from './page-header-header.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type PageHeaderHeaderProps = Props

const PageHeaderHeader = React.forwardRef<
  HTMLDivElement,
  PageHeaderHeaderProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledPageHeaderHeader ref={ref} css={css} {...delegated}>
      {children}
    </StyledPageHeaderHeader>
  )
})

export default PageHeaderHeader
