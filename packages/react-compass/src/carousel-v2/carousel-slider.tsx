import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from 'react'
import Icon from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselImageSlide from './carousel-image-slide'
import CarouselMobile from './carousel-mobile'
import CarouselPromotion from './carousel-promotion'
import CarouselSlide from './carousel-slide'
import CarouselSliderDots from './content-slider-dots'
import {
  StyledCarouselSlider,
  StyledCarouselSliderBottomNav,
  StyledCarouselSliderContainer,
  StyledCarouselSliderNext,
  StyledCarouselSliderPrev,
  StyledSliderSocials,
} from './content-slider.styles'
import {
  AnimationType,
  NavigationButtonType,
  SocicalIcon,
} from './content-slider.types'

interface Props extends StyledComponentProps {
  children: React.ReactNode[]
  autoSwitch?: boolean
  useNavigation?: boolean
  useDotIndicator?: boolean
  navigationButtonType?: NavigationButtonType
  socials?: SocicalIcon[]
  className?: string
  effect?: AnimationType
  onSwitchSlide?: (index: number) => void
}

export type CarouselSliderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselSlider = React.forwardRef<HTMLDivElement, CarouselSliderProps>(
  (props, ref) => {
    const {
      children,
      autoSwitch = true,
      useNavigation = true,
      useDotIndicator = true,
      navigationButtonType = 'icon',
      socials,
      className,
      effect = 'fade',
      css = {},
      onSwitchSlide = () => {},
      ...delegated
    } = props

    const sliderRef = useDOMRef<HTMLDivElement>(ref)

    const [current, setCurrent] = useState(0)
    const [timer, setTimer] = useState<any>()

    useEffect(() => {
      if (autoSwitch) {
        setTimer(setTimeout(next, 3000))
      }
      onSwitchSlide(current)
    }, [current])

    const next = () => {
      clearCurrentTimer()
      const nextIndex = (current + 1) % children.length
      setCurrent(nextIndex)
    }

    const prev = () => {
      clearCurrentTimer()
      const nextIndex = (current - 1 + children.length) % children.length
      setCurrent(nextIndex)
    }

    const setCurrentIndex = (index: number) => {
      clearCurrentTimer()
      setCurrent(index)
    }

    const clearCurrentTimer = () => {
      if (timer) {
        clearTimeout(timer)
        setTimer(null)
      }
    }

    const getViewWidth = () => {
      return (
        (sliderRef.current &&
          sliderRef.current.clientWidth * children.length + 'px') ||
        0
      )
    }

    const getViewPosition = () => {
      return (sliderRef.current && sliderRef.current.clientWidth * current) || 0
    }

    return (
      <StyledCarouselSlider
        css={css}
        ref={sliderRef}
        {...delegated}
        className={`content-slider effect-${effect} ${
          className ? ' ' + className : ''
        }`}
      >
        <StyledCarouselSliderContainer className='content-slider-container'>
          {effect === 'slide' ? (
            <div
              className='slider-scroller'
              style={{
                width: getViewWidth(),
                transform: `translate3d(-${getViewPosition()}px, 0, 0)`,
              }}
            >
              {children}
            </div>
          ) : (
            children
          )}
        </StyledCarouselSliderContainer>
        {useNavigation && children.length > 1 && (
          <div className='content-slider-controls'>
            <StyledCarouselSliderPrev
              onClick={prev}
              className={navigationButtonType}
            >
              {navigationButtonType === 'icon' ? (
                <Icon icon={faChevronLeft} />
              ) : (
                'Prev'
              )}
            </StyledCarouselSliderPrev>
            <StyledCarouselSliderNext
              onClick={next}
              className={navigationButtonType}
            >
              {navigationButtonType === 'icon' ? (
                <Icon icon={faChevronRight} />
              ) : (
                'Next'
              )}
            </StyledCarouselSliderNext>
          </div>
        )}
        <StyledCarouselSliderBottomNav
          className={`content-slider-bottom-nav${
            socials && socials.length ? ' use-socials' : ''
          }`}
        >
          {useDotIndicator && children.length > 1 && (
            <CarouselSliderDots
              length={children.length}
              current={current}
              dotClick={setCurrentIndex}
            />
          )}
          {socials && socials.length ? (
            <StyledSliderSocials>
              {socials.map((social, index) => {
                return (
                  <Icon
                    icon={social.icon}
                    onClick={() => window.open(social.url, '_blank')}
                    key={index}
                  />
                )
              })}
            </StyledSliderSocials>
          ) : (
            ''
          )}
        </StyledCarouselSliderBottomNav>
      </StyledCarouselSlider>
    )
  },
)

export default CarouselSlider as typeof CarouselSlider & {
  Slide: typeof CarouselSlide
  ImageSlide: typeof CarouselImageSlide
  Promotion: typeof CarouselPromotion
  Mobile: typeof CarouselMobile
}
