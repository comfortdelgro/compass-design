import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import SubHeaderBody from './sub-header-body'
import SubHeaderDescription from './sub-header-description'
import SubHeaderHeader from './sub-header-header'
import SubHeaderImage from './sub-header-image'
import SubHeaderTitle from './sub-header-title'
import {StyledSubHeader, SubHeaderHeaderVariantProps} from './sub-header.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  variant?: SubHeaderHeaderVariantProps['variant']
}

export type SubHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeader = React.forwardRef<HTMLDivElement, SubHeaderProps>(
  (props, ref) => {
    const {children, css = {}, variant = 'default', ...delegated} = props

    return (
      <StyledSubHeader ref={ref} css={css} variant={variant} {...delegated}>
        {children}
      </StyledSubHeader>
    )
  },
)

export default SubHeader as typeof SubHeader & {
  Title: typeof SubHeaderTitle
  Header: typeof SubHeaderHeader
  Description: typeof SubHeaderDescription
  Image: typeof SubHeaderImage
  Body: typeof SubHeaderBody
}
