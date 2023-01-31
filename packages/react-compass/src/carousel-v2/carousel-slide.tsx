import React from 'react'
import {StyledContentSliderContentItem} from './content-slider.styles'

interface Props {
  children?: React.ReactNode
  className?: string
  active: boolean
}

const CarouselSlide = ({children, className, active}: Props) => {
  return (
    <StyledContentSliderContentItem
      className={`slider-slide ${className || ''} ${active ? ' active' : ''}`}
    >
      {children}
    </StyledContentSliderContentItem>
  )
}

export default CarouselSlide
