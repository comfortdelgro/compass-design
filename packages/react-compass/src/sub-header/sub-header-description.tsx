import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {
  StyledSubHeaderDescription,
  SubHeaderDescriptionVariantProps,
} from './sub-header-description.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
  variant?: SubHeaderDescriptionVariantProps['variant']
}

export type SubHeaderDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderDescription = React.forwardRef<
  HTMLDivElement,
  SubHeaderDescriptionProps
>((props, ref) => {
  const {children, css = {}, variant = 'default', ...delegated} = props

  return (
    <StyledSubHeaderDescription
      ref={ref}
      css={css}
      variant={variant}
      {...delegated}
    >
      {children}
    </StyledSubHeaderDescription>
  )
})

export default SubHeaderDescription
