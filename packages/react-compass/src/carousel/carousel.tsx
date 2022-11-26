/* eslint-disable prettier/prettier */
import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
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
  StylePagination,
} from './carousel.styles'
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
  autoSlide?: number
  prevIcon?: IconProp
  nextIcon?: IconProp
  count: number
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
      // ComponentProps
      size,
      autoSlide,
      prevIcon = faChevronLeft,
      nextIcon = faChevronRight,
      count = 0,
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
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

    const prevSlideHandler = () => {
      // setIsPrevImage(!isPrevSlide)
      if (currentSlideIndex == 0) {
        setCurrentSlideIndex(count - 1)
      } else {
        setCurrentSlideIndex(currentSlideIndex - 1)
      }
    }

    const nextSlideHandler = () => {
      if (currentSlideIndex == count - 1) {
        setCurrentSlideIndex(0)
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1)
      }
    }

    const navigateToCurrentSlide = (index: number) => {
      setCurrentSlideIndex(index)
    }

    const renderPagniation = () => {
      const rows = []
      for (let i = 0; i < count; i++) {
        if (currentSlideIndex == i) {
          rows.push(
            <StylePagination
              current='true'
              onClick={() => navigateToCurrentSlide(i)}
            />,
          )
        } else {
          rows.push(
            <StylePagination
              current='false'
              onClick={() => navigateToCurrentSlide(i)}
            />,
          )
        }
      }
      return rows
    }

    React.useEffect(() => {
      if (autoSlide) {
        setTimeout(nextSlideHandler, autoSlide)
      }
    }, [currentSlideIndex])

    return (
      <>
        <StyledCarousel
          css={css}
          ref={carouselRef}
          {...variantProps}
          {...delegated}
        >
          {/* Background Image */}
          {CarouselImageElement &&
            React.cloneElement(CarouselImageElement as unknown as JSX.Element, {
              currentSlideIndex: currentSlideIndex,
              autoSlide: autoSlide,
            })}

          {/* Container for all content*/}
          <StyledContainer>
            <StyledPrevContainer onClick={() => prevSlideHandler()}>
              <Icon icon={prevIcon} />
            </StyledPrevContainer>
            <StyledMainContentContainer>
              {CarouselTitleElement &&
                React.cloneElement(
                  CarouselTitleElement as unknown as JSX.Element,
                  {
                    currentSlideIndex: currentSlideIndex,
                    autoSlide: autoSlide,
                  },
                )}
              {CarouselDescriptionElement &&
                React.cloneElement(
                  CarouselDescriptionElement as unknown as JSX.Element,
                  {
                    currentSlideIndex: currentSlideIndex,
                    autoSlide: autoSlide,
                  },
                )}
              {CarouselButtonsElement &&
                React.cloneElement(
                  CarouselButtonsElement as unknown as JSX.Element,
                  {
                    currentSlideIndex: currentSlideIndex,
                    autoSlide: autoSlide,
                  },
                )}
              <StyledCarouselPaginationAndIconsContainer>
                <StyledCarouselPaginationContainer>
                  {renderPagniation()}
                </StyledCarouselPaginationContainer>
                <StyledCarouselIconsContainer>
                  Icons
                </StyledCarouselIconsContainer>
              </StyledCarouselPaginationAndIconsContainer>
            </StyledMainContentContainer>
            <StyledNextContainer onClick={() => nextSlideHandler()}>
              <Icon icon={nextIcon} />
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
