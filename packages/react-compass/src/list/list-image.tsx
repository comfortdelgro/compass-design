import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledListImage} from './list-image.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type ListImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const ListImage = React.forwardRef<HTMLImageElement, ListImageProps>(
  (props, ref) => {
    const {css = {}, ...delegated} = props

    return <StyledListImage ref={ref} css={css} {...delegated} />
  },
)

export default ListImage
