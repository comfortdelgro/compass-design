import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import PageHeaderDescription from './page-header-description'
import PageHeaderHeader from './page-header-header'
import PageHeaderSubtitle from './page-header-subtitle'
import PageHeaderTitle from './page-header-title'
import {PageHeaderVariantProps, StyledPageHeader} from './page-header.style'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type PageHeaderProps = Props &
  PageHeaderVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (props, ref) => {
    const {children, color = 'white', css = {}, ...delegated} = props

    const variantProps = {
      color,
    }

    return (
      <StyledPageHeader ref={ref} css={css} {...variantProps} {...delegated}>
        {children}
      </StyledPageHeader>
    )
  },
)

export default PageHeader as typeof PageHeader & {
  Title: typeof PageHeaderTitle
  Subtitle: typeof PageHeaderSubtitle
  Header: typeof PageHeaderHeader
  Description: typeof PageHeaderDescription
}
