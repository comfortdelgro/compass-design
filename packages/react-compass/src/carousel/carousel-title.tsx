/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselTitle} from './carousel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  titles?: string[]
  isNextSlide?: boolean
  isPrevSlide?: boolean
  autoSlide?: number
}

export type CarouselTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselTitle = React.forwardRef<HTMLDivElement, CarouselTitleProps>(
  (props, ref) => {
    const {
      titles = [''],
      css = {},
      isNextSlide,
      isPrevSlide,
      autoSlide,
      ...delegated
    } = props

    const [titleIndex, setTitleIndex] = React.useState(0)

    const nextTitleFunc = () => {
      if (titleIndex < titles.length - 1) {
        setTitleIndex(titleIndex + 1)
      } else {
        setTitleIndex(0)
      }
    }

    const prevTitleFunc = () => {
      if (titleIndex > 0) {
        setTitleIndex(titleIndex - 1)
      } else {
        setTitleIndex(titles.length - 1)
      }
    }

    React.useEffect(() => {
      nextTitleFunc()
    }, [isNextSlide])

    React.useEffect(() => {
      prevTitleFunc()
    }, [isPrevSlide])

    React.useEffect(() => {
      if (autoSlide) {
        setTimeout(nextTitleFunc, autoSlide)
      }
    }, [titleIndex])

    return (
      <StyledCarouselTitle css={css} ref={ref} {...delegated}>
        {titles[titleIndex]}
      </StyledCarouselTitle>
    )
  },
)

export default CarouselTitle
