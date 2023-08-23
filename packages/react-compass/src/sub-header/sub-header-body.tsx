import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubHeaderBody} from './sub-header-body.style'

export type SubHeaderBodyProps = StyledComponentProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof StyledComponentProps>

const SubHeaderBody = React.forwardRef<HTMLDivElement, SubHeaderBodyProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledSubHeaderBody ref={ref} css={css} {...delegated}>
        {children}
      </StyledSubHeaderBody>
    )
  },
)

export default SubHeaderBody
