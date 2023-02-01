import React from 'react'
import {StyledContentSliderImageItem} from './content-slider.styles'

interface Props {
  imageUrl: string
  className?: string
  active: boolean
}

const CarouselImageSlide = ({imageUrl, className, active}: Props) => {
  return (
    <StyledContentSliderImageItem
      className={`slider-slide ${className || ''} ${active ? ' active' : ''}`}
      src={imageUrl}
    />
  )
}

export default CarouselImageSlide
