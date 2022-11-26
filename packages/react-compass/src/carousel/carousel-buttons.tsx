/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselButtonContainer} from './carousel.styles'
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isNextSlide?: boolean
  isPrevSlide?: boolean
  autoSlide?: number
  className?: string
}

export type CarouselButtonsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselButtons = React.forwardRef<HTMLDivElement, CarouselButtonsProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      isNextSlide,
      isPrevSlide,
      autoSlide,
      ...delegated
    } = props

    const [descriptionIndex, setButtonsIndex] = React.useState(0)
    const isNextMounted = React.useRef(false)
    const isPrevMounted = React.useRef(false)
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    const buttons = React.Children.toArray(children)

    const nextButtonsFunc = () => {
      if (currentSlideIndex < buttons.length - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1)
      } else {
        setCurrentSlideIndex(0)
      }
    }

    const prevButtonsFunc = () => {
      if (currentSlideIndex > 0) {
        setCurrentSlideIndex(currentSlideIndex - 1)
      } else {
        setCurrentSlideIndex(buttons.length - 1)
      }
    }

    const renderButtons = () => {
      if (buttons.length) {
        return <>{buttons[currentSlideIndex]}</>
      }
    }

    React.useEffect(() => {
      if (isNextMounted.current) {
        nextButtonsFunc()
      } else {
        isNextMounted.current = true
      }
    }, [isNextSlide])

    React.useEffect(() => {
      if (isPrevMounted.current) {
        prevButtonsFunc()
      } else {
        isPrevMounted.current = true
      }
    }, [isPrevSlide])

    React.useEffect(() => {
      if (autoSlide) {
        setTimeout(nextButtonsFunc, autoSlide)
      }
    }, [descriptionIndex])

    console.log('button children', children)
    return (
      <StyledCarouselButtonContainer css={css} ref={ref} {...delegated}>
        {renderButtons()}
      </StyledCarouselButtonContainer>
    )
  },
)

export default CarouselButtons
