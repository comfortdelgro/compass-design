/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCarouselImage} from './carousel.styles'

type Props = StyledComponentProps

export type CarouselImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const CarouselImage = React.forwardRef<HTMLImageElement, CarouselImageProps>(
  (props, ref) => {
    const {css = {}, id = 'myId', ...delegated} = props
    const carouselImageRef = useDOMRef<HTMLImageElement>(ref)
    return (
      <>
        <StyledCarouselImage
          css={css}
          {...delegated}
          ref={carouselImageRef}
          id={id}
        />
      </>
    )
  },
)

export default CarouselImage
