import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubHeaderImage} from './styles/sub-header-image.style'

export type SubHeaderImageProps = StyledComponentProps &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof StyledComponentProps>

const SubHeaderImage = React.forwardRef<HTMLImageElement, SubHeaderImageProps>(
  (props, ref) => {
    const {css = {}, ...delegated} = props

    return <StyledSubHeaderImage ref={ref} css={css} {...delegated} />
  },
)

export default SubHeaderImage
