/* eslint-disable prettier/prettier */
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselButtons from './carousel-buttons'
import CarouselDescription from './carousel-description'
import CarouselImage from './carousel-image'
import CarouselTitle from './carousel-title'
import {
  CarouselVariantProps,
  StyledCarousel,
  StyledCarouselIconsContainer,
  StyledCarouselPaginationAndIconsContainer,
  StyledCarouselPaginationContainer,
  StyledContainer,
  StyledMainContentContainer,
  StyledNextContainer,
  StyledPrevContainer,
} from './carousel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
  autoSlide?: number
}

export type CarouselProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (props, ref) => {
    const {
      // children props
      children,
      // styled component props
      css = {},
      // VariantProps
      size,
      autoSlide,
      // HTMLDiv Props
      ...delegated
    } = props

    const carouselRef = useDOMRef<HTMLDivElement>(ref)
    const {child: CarouselImageElement, rest: childrenWithoutImageElement} =
      pickChild<typeof CarouselImage>(children, CarouselImage)

    const {child: CarouselTitleElement, rest: childrenWithoutTitleElement} =
      pickChild<typeof CarouselTitle>(children, CarouselTitle)

    const {
      child: CarouselDescriptionElement,
      rest: childrenWithoutDescriptionElement,
    } = pickChild<typeof CarouselDescription>(children, CarouselDescription)

    const {child: CarouselButtonsElement, rest: childrenWithoutButtonsElement} =
      pickChild<typeof CarouselButtons>(children, CarouselButtons)

    const variantProps = {size} as CarouselVariantProps

    const [isNextSlide, setIsNextImage] = React.useState(false)
    const [isPrevSlide, setIsPrevImage] = React.useState(false)

    const prevSlideHandler = () => {
      setIsPrevImage(!isPrevSlide)
    }

    const nextSlideHandler = () => {
      setIsNextImage(!isNextSlide)
    }

    return (
      <>
        <StyledCarousel
          css={css}
          ref={carouselRef}
          {...variantProps}
          {...delegated}
        >
          {/* Background Image */}
          {React.cloneElement(CarouselImageElement as unknown as JSX.Element, {
            isNextSlide: isNextSlide,
            isPrevSlide: isPrevSlide,
            autoSlide: autoSlide,
          })}

          {/* Container for all content*/}
          <StyledContainer>
            <StyledPrevContainer onClick={() => prevSlideHandler()}>
              Prev
            </StyledPrevContainer>
            <StyledMainContentContainer>
              {React.cloneElement(
                CarouselTitleElement as unknown as JSX.Element,
                {
                  isNextSlide: isNextSlide,
                  isPrevSlide: isPrevSlide,
                  autoSlide: autoSlide,
                },
              )}
              {React.cloneElement(
                CarouselDescriptionElement as unknown as JSX.Element,
                {
                  isNextSlide: isNextSlide,
                  isPrevSlide: isPrevSlide,
                  autoSlide: autoSlide,
                },
              )}
              {React.cloneElement(
                CarouselButtonsElement as unknown as JSX.Element,
                {
                  isNextSlide: isNextSlide,
                  isPrevSlide: isPrevSlide,
                  autoSlide: autoSlide,
                },
              )}
              <StyledCarouselPaginationAndIconsContainer>
                <StyledCarouselPaginationContainer>
                  Pagination
                </StyledCarouselPaginationContainer>
                <StyledCarouselIconsContainer>
                  Icons
                </StyledCarouselIconsContainer>
              </StyledCarouselPaginationAndIconsContainer>
            </StyledMainContentContainer>
            <StyledNextContainer onClick={() => nextSlideHandler()}>
              Next
            </StyledNextContainer>
          </StyledContainer>
        </StyledCarousel>
      </>
    )
  },
)

export default Carousel as typeof Carousel & {
  Image: typeof CarouselImage
  Title: typeof CarouselTitle
  Description: typeof CarouselDescription
  Buttons: typeof CarouselButtons
}
