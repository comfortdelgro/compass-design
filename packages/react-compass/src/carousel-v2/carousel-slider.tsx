/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useEffect, useState} from 'react'
import {Pointer, Position} from '../utils/pointer'
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
      onSwitchSlide = () => null,
      ...delegated
    } = props

    const sliderRef = useDOMRef<HTMLDivElement>(ref)
    const scroller = useDOMRef<HTMLDivElement>(ref)

    const [xPosition, setXPosition] = useState(0)
    const [current, setCurrent] = useState(0)
    const [viewWidth, setViewWidth] = useState(0)
    const [timer, setTimer] = useState<any>()

    useEffect(() => {
      if (autoSwitch) {
        setTimer(setTimeout(next, 3000))
      }
      onSwitchSlide(current)
      setXPosition(
        (sliderRef.current && sliderRef.current.clientWidth * current) || 0,
      )

      return () => {
        clearTimeout(timer)
      }
    }, [current])

    // To update slider width based on the time sliderRef.current is available
    useEffect(() => {
      if (sliderRef && sliderRef.current) {
        setViewWidth(sliderRef.current.clientWidth * children.length)
      }
    }, [sliderRef])

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

    const getSlideWidth = () => {
      return (sliderRef.current && sliderRef.current.clientWidth) || 0
    }

    const handlePointerDown = (event: React.PointerEvent) => {
      const pointer = new Pointer()
      pointer.start(new Position(event.pageX, event.pageY))
      const startX = xPosition
      clearCurrentTimer()

      if (scroller.current) {
        scroller.current.style.transition = 'none'
        scroller.current.setPointerCapture(event.pointerId)

        const handlePointerMove = (event: PointerEvent) => {
          pointer.update(new Position(event.pageX, event.pageY))
          setXPosition(startX - pointer.distance.x)
        }

        const handlePointerUp = (event: PointerEvent) => {
          pointer.end(new Position(event.pageX, event.pageY))

          if (scroller.current) {
            scroller.current.removeEventListener(
              'pointermove',
              handlePointerMove,
            )
            scroller.current.style.transition = 'all 250ms ease'
            if (Math.abs(pointer.distance.x) / getSlideWidth() > 0.2) {
              if (pointer.distance.x < 0) {
                next()
              } else {
                prev()
              }
            } else {
              setXPosition(startX)
            }
          }
        }

        scroller.current.addEventListener('pointermove', handlePointerMove)
        scroller.current.addEventListener('pointerup', handlePointerUp, {
          once: true,
        })
        scroller.current.addEventListener('pointercancel', handlePointerUp, {
          once: true,
        })
      }
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
              ref={scroller}
              className='slider-scroller'
              style={{
                width: `${viewWidth}px`,
                transform: `translate3d(-${xPosition}px, 0, 0)`,
              }}
              onPointerDown={handlePointerDown}
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
                <svg viewBox='0 0 320 512'>
                  <path
                    fill='currentColor'
                    d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z'
                  ></path>
                </svg>
              ) : (
                'Prev'
              )}
            </StyledCarouselSliderPrev>
            <StyledCarouselSliderNext
              onClick={next}
              className={navigationButtonType}
            >
              {navigationButtonType === 'icon' ? (
                <svg viewBox='0 0 320 512'>
                  <path
                    fill='currentColor'
                    d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                  ></path>
                </svg>
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
                  <a href={social.url} target='_blank' key={index}>
                    {social.icon}
                  </a>
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
