/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselDescription} from './carousel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  descriptions?: string[]
  currentSlideIndex?: number
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
    currentSlideIndex = 0,
    ...delegated
  } = props

  const [descriptionIndex, setDescriptionIndex] = React.useState(0)

  React.useEffect(() => {
    setDescriptionIndex(currentSlideIndex)
  }, [currentSlideIndex])

  return (
    <StyledCarouselDescription css={css} ref={ref} {...delegated}>
      {descriptions[descriptionIndex]}
    </StyledCarouselDescription>
  )
})

export default CarouselDescription
