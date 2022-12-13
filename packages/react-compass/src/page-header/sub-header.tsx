import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import PageHeaderDescription from './page-header-description'
import PageHeaderHeader from './page-header-header'
import PageHeaderTitle from './page-header-title'
import {StyledSubHeader} from './sub-header.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type SubHeaderProps = Props

const SubHeader = React.forwardRef<HTMLDivElement, SubHeaderProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledSubHeader ref={ref} css={css} {...delegated}>
        {children}
      </StyledSubHeader>
    )
  },
)

export default SubHeader as typeof SubHeader & {
  Title: typeof PageHeaderTitle
  Header: typeof PageHeaderHeader
  Description: typeof PageHeaderDescription
}
