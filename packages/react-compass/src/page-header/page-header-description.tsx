import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledPageHeaderDescription} from './page-header-description.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type PageHeaderDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderDescription = React.forwardRef<
  HTMLDivElement,
  PageHeaderDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledPageHeaderDescription ref={ref} css={css} {...delegated}>
      {children}
    </StyledPageHeaderDescription>
  )
})

export default PageHeaderDescription
