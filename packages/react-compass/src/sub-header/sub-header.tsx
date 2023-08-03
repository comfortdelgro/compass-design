import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import SubHeaderDescription from './sub-header-description'
import SubHeaderHeader from './sub-header-header'
import SubHeaderTitle from './sub-header-title'
import {StyledSubHeader} from './sub-header.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type SubHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

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
  Title: typeof SubHeaderTitle
  Header: typeof SubHeaderHeader
  Description: typeof SubHeaderDescription
}
