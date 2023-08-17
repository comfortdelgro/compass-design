import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {
  StyledSubHeaderTitle,
  SubHeaderTitleVariantProps,
} from './sub-header-title.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  variant?: SubHeaderTitleVariantProps['variant']
}

export type SubHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderTitle = React.forwardRef<HTMLDivElement, SubHeaderTitleProps>(
  (props, ref) => {
    const {children, css = {}, variant = 'default', ...delegated} = props

    return (
      <StyledSubHeaderTitle
        ref={ref}
        css={css}
        {...delegated}
        variant={variant}
      >
        {children}
      </StyledSubHeaderTitle>
    )
  },
)

export default SubHeaderTitle
