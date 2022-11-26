/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselDescription} from './carousel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  descriptions?: string[]
  isNextSlide?: boolean
  isPrevSlide?: boolean
  autoSlide?: number
}

export type CarouselDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselDescription = React.forwardRef<
  HTMLDivElement,
  CarouselDescriptionProps
>((props, ref) => {
  const {
    descriptions = [''],
    css = {},
    isNextSlide,
    isPrevSlide,
    autoSlide,
    ...delegated
  } = props

  const [descriptionIndex, setDescriptionIndex] = React.useState(0)
  const isNextMounted = React.useRef(false)
  const isPrevMounted = React.useRef(false)

  const nextDescriptionFunc = () => {
    if (descriptionIndex < descriptions.length - 1) {
      setDescriptionIndex(descriptionIndex + 1)
    } else {
      setDescriptionIndex(0)
    }
  }

  const prevDescriptionFunc = () => {
    if (descriptionIndex > 0) {
      setDescriptionIndex(descriptionIndex - 1)
    } else {
      setDescriptionIndex(descriptions.length - 1)
    }
  }

  React.useEffect(() => {
    if (isNextMounted.current) {
      nextDescriptionFunc()
    } else {
      isNextMounted.current = true
    }
  }, [isNextSlide])

  React.useEffect(() => {
    if (isPrevMounted.current) {
      prevDescriptionFunc()
    } else {
      isPrevMounted.current = true
    }
  }, [isPrevSlide])

  React.useEffect(() => {
    if (autoSlide) {
      setTimeout(nextDescriptionFunc, autoSlide)
    }
  }, [descriptionIndex])

  return (
    <StyledCarouselDescription css={css} ref={ref} {...delegated}>
      {descriptions[descriptionIndex]}
    </StyledCarouselDescription>
  )
})

export default CarouselDescription
