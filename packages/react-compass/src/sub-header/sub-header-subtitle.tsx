import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubHeaderSubtitle} from './sub-header-subtitle.style'

interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type SubHeaderSubtitleProps = Props

const SubHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  SubHeaderSubtitleProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledSubHeaderSubtitle ref={ref} css={css} {...delegated}>
      {children}
    </StyledSubHeaderSubtitle>
  )
})

export default SubHeaderSubtitle
