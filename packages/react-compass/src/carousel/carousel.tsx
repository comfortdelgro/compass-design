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
  StyledCarouselButtonContainer,
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
  auto?: number
  prevIcon?: React.ReactNode
  nextIcon?: React.ReactNode
  socialIcons?: Array<{icon: React.ReactNode; target: string}>
  count: number
  view?: 'desktop' | 'mobile'
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
      auto,
      prevIcon = (
        <svg viewBox='0 0 320 512'>
          <path
            fill='currentColor'
            d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z'
          ></path>
        </svg>
      ),
      nextIcon = (
        <svg viewBox='0 0 320 512'>
          <path
            fill='currentColor'
            d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
          ></path>
        </svg>
      ),
      count = 0,
      socialIcons = [],
      view = 'desktop',
      // HTMLDiv Props
      ...delegated
    } = props

    const carouselRef = useDOMRef<HTMLDivElement>(ref)
    const {child: CarouselImageElement} = pickChild<typeof CarouselImage>(
      children,
      CarouselImage,
    )

    const {child: CarouselTitleElement} = pickChild<typeof CarouselTitle>(
      children,
      CarouselTitle,
    )

    const {child: CarouselDescriptionElement} = pickChild<
      typeof CarouselDescription
    >(children, CarouselDescription)

    const {child: CarouselButtonsElement} = pickChild<typeof CarouselButtons>(
      children,
      CarouselButtons,
    )

    const variantProps = {size, view} as CarouselVariantProps
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
      if (auto) {
        setTimeout(nextSlideHandler, auto)
      }
    }, [currentSlideIndex])

    return (
      <>
        {view == 'desktop' && (
          <StyledCarousel
            css={css}
            ref={carouselRef}
            {...variantProps}
            {...delegated}
          >
            {/* Background Image */}
            {CarouselImageElement &&
              React.cloneElement(
                CarouselImageElement as unknown as JSX.Element,
                {
                  currentSlideIndex: currentSlideIndex,
                  auto: auto,
                },
              )}

            {/* Container for all content*/}
            <StyledContainer>
              <StyledPrevContainer onClick={() => prevSlideHandler()}>
                {prevIcon}
              </StyledPrevContainer>
              <StyledMainContentContainer>
                {CarouselTitleElement &&
                  React.cloneElement(
                    CarouselTitleElement as unknown as JSX.Element,
                    {
                      currentSlideIndex: currentSlideIndex,
                      auto: auto,
                    },
                  )}
                {CarouselDescriptionElement &&
                  React.cloneElement(
                    CarouselDescriptionElement as unknown as JSX.Element,
                    {
                      currentSlideIndex: currentSlideIndex,
                      auto: auto,
                    },
                  )}
                {CarouselButtonsElement &&
                  React.cloneElement(
                    CarouselButtonsElement as unknown as JSX.Element,
                    {
                      currentSlideIndex: currentSlideIndex,
                      auto: auto,
                    },
                  )}
                <StyledCarouselPaginationAndIconsContainer>
                  <StyledCarouselPaginationContainer>
                    {renderPagniation()}
                  </StyledCarouselPaginationContainer>
                  <StyledCarouselIconsContainer>
                    {socialIcons.map((item, index) => {
                      return (
                        <React.Fragment key={index}>{item.icon}</React.Fragment>
                      )
                    })}
                  </StyledCarouselIconsContainer>
                </StyledCarouselPaginationAndIconsContainer>
              </StyledMainContentContainer>
              <StyledNextContainer onClick={() => nextSlideHandler()}>
                {nextIcon}
              </StyledNextContainer>
            </StyledContainer>
          </StyledCarousel>
        )}
        {view == 'mobile' && (
          <StyledCarousel
            css={css}
            ref={carouselRef}
            {...variantProps}
            {...delegated}
          >
            {/* Background Image */}
            {CarouselImageElement &&
              React.cloneElement(
                CarouselImageElement as unknown as JSX.Element,
                {
                  currentSlideIndex: currentSlideIndex,
                  auto: auto,
                },
              )}
            <StyledCarouselPaginationContainer>
              {renderPagniation()}
            </StyledCarouselPaginationContainer>

            {/* Container for all content*/}

            <StyledMainContentContainer>
              {CarouselTitleElement &&
                React.cloneElement(
                  CarouselTitleElement as unknown as JSX.Element,
                  {
                    currentSlideIndex: currentSlideIndex,
                    auto: auto,
                  },
                )}
              {CarouselDescriptionElement &&
                React.cloneElement(
                  CarouselDescriptionElement as unknown as JSX.Element,
                  {
                    currentSlideIndex: currentSlideIndex,
                    auto: auto,
                  },
                )}
            </StyledMainContentContainer>
            <StyledCarouselButtonContainer>
              {CarouselButtonsElement &&
                React.cloneElement(
                  CarouselButtonsElement as unknown as JSX.Element,
                  {
                    currentSlideIndex: currentSlideIndex,
                    auto: auto,
                  },
                )}
            </StyledCarouselButtonContainer>
          </StyledCarousel>
        )}
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
