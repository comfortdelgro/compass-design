/* eslint-disable prettier/prettier */
import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
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
  prevIcon?: IconProp
  nextIcon?: IconProp
  socialIcons?: {icon: IconProp; target: string}[]
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
      prevIcon = faChevronLeft,
      nextIcon = faChevronRight,
      count = 0,
      socialIcons = [
        {icon: faFacebook, target: 'https://www.facebook.com/'},
        {icon: faInstagram, target: 'https://www.instagram.com/'},
        {icon: faTwitter, target: 'https://twitter.com/'},
      ],
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
                <Icon icon={prevIcon} />
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
                        <Icon
                          icon={item.icon as unknown as IconProp}
                          onClick={() => window.open(item.target, '_blank')}
                          key={index}
                        />
                      )
                    })}
                  </StyledCarouselIconsContainer>
                </StyledCarouselPaginationAndIconsContainer>
              </StyledMainContentContainer>
              <StyledNextContainer onClick={() => nextSlideHandler()}>
                <Icon icon={nextIcon} />
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
