/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCarouselImage} from './carousel.styles'

interface Props extends StyledComponentProps {
  addresses?: string[]
  currentSlideIndex?: number
}

export type CarouselImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const CarouselImage = React.forwardRef<HTMLImageElement, CarouselImageProps>(
  (props, ref) => {
    const {
      css = {},
      id = 'myId',
      addresses = [''],
      currentSlideIndex = 0,
    } = props
    const carouselImageRef = useDOMRef<HTMLImageElement>(ref)
    const [imageIndex, setImageIndex] = React.useState(0)
    React.useEffect(() => {
      setImageIndex(currentSlideIndex)
    }, [currentSlideIndex])

    return (
      <>
        <StyledCarouselImage
          src={addresses[imageIndex]}
          css={css}
          ref={carouselImageRef}
          id={id}
        />
      </>
    )
  },
)

export default CarouselImage
