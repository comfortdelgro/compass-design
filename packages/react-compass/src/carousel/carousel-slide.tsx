import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledCarouselSliderContentItem} from './content-slider.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  className?: string
  active: boolean
}

export type CarouselSlideProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselSlide = React.forwardRef<HTMLDivElement, CarouselSlideProps>(
  (props, ref) => {
    const {children, className, active, css = {}, ...delegated} = props
    const slideRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledCarouselSliderContentItem
        ref={slideRef}
        css={css}
        {...delegated}
        className={`slider-slide ${className || ''} ${active ? ' active' : ''}`}
      >
        {children}
      </StyledCarouselSliderContentItem>
    )
  },
)

export default CarouselSlide
