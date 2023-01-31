import React from 'react'
import {
  StyledContentSliderDot,
  StyledContentSliderDots,
} from './content-slider.styles'

interface Props {
  length: number
  current: number
  dotClick?: (index: number) => void
}

const ContentSliderDots = ({length, current, dotClick = () => {}}: Props) => {
  return (
    <StyledContentSliderDots className='content-slider-dots'>
      {Array(length)
        .fill(0)
        .map((item: any, index: number) => {
          return (
            <StyledContentSliderDot
              key={index + item}
              className={`${index === current ? ' active' : ''}`}
              onClick={() => {
                dotClick(index)
              }}
            />
          )
        })}
    </StyledContentSliderDots>
  )
}

export default ContentSliderDots
