/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselTitle} from './carousel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  titles?: string[]
  currentSlideIndex?: number
}

export type CarouselTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselTitle = React.forwardRef<HTMLDivElement, CarouselTitleProps>(
  (props, ref) => {
    const {titles = [''], css = {}, currentSlideIndex = 0, ...delegated} = props

    const [titleIndex, setTitleIndex] = React.useState(0)

    React.useEffect(() => {
      setTitleIndex(currentSlideIndex)
    }, [currentSlideIndex])

    return (
      <StyledCarouselTitle css={css} ref={ref} {...delegated}>
        {titles[titleIndex]}
      </StyledCarouselTitle>
    )
  },
)

export default CarouselTitle
