/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledCarouselDescription} from './carousel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type CarouselDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselDescription = React.forwardRef<
  HTMLDivElement,
  CarouselDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledCarouselDescription css={css} ref={ref} {...delegated}>
      {children}
    </StyledCarouselDescription>
  )
})

export default CarouselDescription
