/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCarouselImage} from './carousel.styles'

interface Props extends StyledComponentProps {
  addresses?: string[]
  isNextImage?: boolean
  isPrevImage?: boolean
  autoSlide?: number
}

export type CarouselImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const CarouselImage = React.forwardRef<HTMLImageElement, CarouselImageProps>(
  (props, ref) => {
    const {
      css = {},
      id = 'myId',
      addresses = [],
      isNextImage,
      isPrevImage,
      autoSlide,
    } = props
    const carouselImageRef = useDOMRef<HTMLImageElement>(ref)
    const [imageIndex, setImageIndex] = React.useState(0)

    const nextImageFunc = () => {
      if (imageIndex < addresses.length - 1) {
        setImageIndex(imageIndex + 1)
      } else {
        setImageIndex(0)
      }
    }

    const prevImageFunc = () => {
      if (imageIndex > 0) {
        setImageIndex(imageIndex - 1)
      } else {
        setImageIndex(addresses.length - 1)
      }
    }

    React.useEffect(() => {
      nextImageFunc()
    }, [isNextImage])

    React.useEffect(() => {
      prevImageFunc()
    }, [isPrevImage])

    React.useEffect(() => {
      if (autoSlide) {
        setTimeout(nextImageFunc, autoSlide)
      }
    }, [imageIndex])

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
