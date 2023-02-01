import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCarouselSliderImageItem} from './content-slider.styles'

interface Props extends StyledComponentProps {
  imageUrl: string
  className?: string
  active: boolean
}

export type CarouselImageSlideProps = Props &
  Omit<React.HTMLAttributes<HTMLImageElement>, keyof Props>

const CarouselImageSlide = React.forwardRef<
  HTMLImageElement,
  CarouselImageSlideProps
>((props, ref) => {
  const {imageUrl, className, active, css = {}, ...delegated} = props
  const imageRef = useDOMRef<HTMLImageElement>(ref)
  return (
    <StyledCarouselSliderImageItem
      ref={imageRef}
      css={css}
      {...delegated}
      className={`slider-slide ${className || ''} ${active ? ' active' : ''}`}
      src={imageUrl}
    />
  )
})

export default CarouselImageSlide
