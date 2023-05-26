/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledCarouselSliderDot,
  StyledCarouselSliderDots,
} from './content-slider.styles'

interface Props extends StyledComponentProps {
  length: number
  current: number
  dotClick?: (index: number) => void
}

export type CarouselDotProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselSliderDots = React.forwardRef<HTMLDivElement, CarouselDotProps>(
  (props, ref) => {
    const {
      length,
      current,
      css = {},
      dotClick = () => null,
      ...delegated
    } = props
    const dotRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledCarouselSliderDots
        ref={dotRef}
        css={css}
        {...delegated}
        className='content-slider-dots'
      >
        {Array(length)
          .fill(0)
          .map((item: any, index: number) => {
            return (
              <StyledCarouselSliderDot
                key={index + item}
                className={`${index === current ? ' active' : ''}`}
                onClick={() => {
                  dotClick(index)
                }}
              />
            )
          })}
      </StyledCarouselSliderDots>
    )
  },
)

export default CarouselSliderDots
