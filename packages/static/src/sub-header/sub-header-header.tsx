import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubHeaderHeader} from './styles/sub-header-header.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type SubHeaderHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderHeader = React.forwardRef<HTMLDivElement, SubHeaderHeaderProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledSubHeaderHeader ref={ref} css={css} {...delegated}>
        {children}
      </StyledSubHeaderHeader>
    )
  },
)

export default SubHeaderHeader
