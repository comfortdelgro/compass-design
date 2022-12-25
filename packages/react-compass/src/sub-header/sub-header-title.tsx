import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubHeaderTitle} from './sub-header-title.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type SubHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderTitle = React.forwardRef<HTMLDivElement, SubHeaderTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledSubHeaderTitle ref={ref} css={css} {...delegated}>
        {children}
      </StyledSubHeaderTitle>
    )
  },
)

export default SubHeaderTitle
