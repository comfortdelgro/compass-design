import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledPageHeaderTitle} from './page-header-title.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type PageHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const PageHeaderTitle = React.forwardRef<HTMLDivElement, PageHeaderTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledPageHeaderTitle ref={ref} css={css} {...delegated}>
        {children}
      </StyledPageHeaderTitle>
    )
  },
)

export default PageHeaderTitle
