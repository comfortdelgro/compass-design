import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubHeaderDescription} from './sub-header-description.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type SubHeaderDescriptionProps = Props

const SubHeaderDescription = React.forwardRef<
  HTMLDivElement,
  SubHeaderDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledSubHeaderDescription ref={ref} css={css} {...delegated}>
      {children}
    </StyledSubHeaderDescription>
  )
})

export default SubHeaderDescription
