/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCarouselImage} from './carousel.styles'

interface Props extends StyledComponentProps {
  addresses?: string[]
  isNextSlide?: boolean
  isPrevSlide?: boolean
  autoSlide?: number
}

export type CarouselImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const CarouselImage = React.forwardRef<HTMLImageElement, CarouselImageProps>(
  (props, ref) => {
    const {
      css = {},
      id = 'myId',
      addresses = [''],
      isNextSlide,
      isPrevSlide,
      autoSlide,
    } = props
    const carouselImageRef = useDOMRef<HTMLImageElement>(ref)
    const [imageIndex, setImageIndex] = React.useState(0)
    const isNextMounted = React.useRef(false)
    const isPrevMounted = React.useRef(false)

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

    // need to prevent this from on mount

    React.useEffect(() => {
      if (isNextMounted.current) {
        nextImageFunc()
      } else {
        isNextMounted.current = true
      }
    }, [isNextSlide])

    React.useEffect(() => {
      if (isPrevMounted.current) {
        prevImageFunc()
      } else {
        isPrevMounted.current = true
      }
    }, [isPrevSlide])

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
