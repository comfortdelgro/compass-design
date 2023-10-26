import React, {useEffect, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {Pointer, Position} from '../utils/pointer'
import {capitalizeFirstLetter} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselImageSlide from './carousel-image-slide'
import CarouselMobile from './carousel-mobile'
import CarouselPromotion from './carousel-promotion'
import CarouselSlide from './carousel-slide'
import CarouselSliderDots from './carousel-slider-dots'
import {
  AnimationType,
  NavigationButtonType,
  SocicalIcon,
} from './carousel.const'
import styles from './styles/carousel.module.css'

interface Props {
  css?: unknown
  style?: React.CSSProperties
  children: React.ReactNode[]
  autoSwitch?: boolean
  useNavigation?: boolean
  useDotIndicator?: boolean
  navigationButtonType?: NavigationButtonType
  socials?: SocicalIcon[]
  className?: string
  effect?: AnimationType
  itemPerPage?: number
  onSwitchSlide?: (index: number) => void
}

export type CarouselSliderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselSlider = React.forwardRef<HTMLDivElement, CarouselSliderProps>(
  (props, ref) => {
    const {
      css = {},
      children,
      autoSwitch = true,
      useNavigation = true,
      useDotIndicator = true,
      navigationButtonType = 'icon',
      socials,
      className,
      effect = 'fade',
      itemPerPage = 1,
      style,
      onSwitchSlide = () => null,
      ...htmlProps
    } = props

    const hostRef = useDOMRef<HTMLDivElement>(ref)
    const sliderRef = useDOMRef<HTMLDivElement>()
    const scroller = useDOMRef<HTMLDivElement>()

    const [xPosition, setXPosition] = useState(0)
    const [current, setCurrent] = useState(0)
    const [viewWidth, setViewWidth] = useState(0)
    const [timer, setTimer] = useState<any>()

    const targetXPosition =
      (sliderRef.current && sliderRef.current.clientWidth * current) || 0
    const slideWidth = (sliderRef.current && sliderRef.current.clientWidth) || 0
    const pageCount = Math.ceil(children.length / itemPerPage)

    useEffect(() => {
      const handleResize = () => {
        setXPosition(targetXPosition)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    useEffect(() => {
      if (autoSwitch) {
        setTimer(setTimeout(next, 3000))
      }
      onSwitchSlide(current)
      setXPosition(targetXPosition)

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
      const nextIndex = (current + 1) % pageCount
      setCurrent(nextIndex)
    }

    const prev = () => {
      clearCurrentTimer()
      const nextIndex = (current - 1 + pageCount) % pageCount
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
            if (Math.abs(pointer.distance.x) / slideWidth > 0.2) {
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
      <CssInjection css={css} childrenRef={hostRef}>
        <div
          className={`content-slider ${
            styles['effect' + capitalizeFirstLetter(effect)]
          } ${styles.carousel} ${className ? ' ' + className : ''}`}
          ref={sliderRef}
          style={style}
          {...htmlProps}
        >
          <div
            className={`content-slider-container ${
              styles.contentSliderContainer
            } ${styles[effect + 'ContentSliderContainer']}`}
          >
            {effect === 'slide' ? (
              <div
                ref={scroller}
                className={`slider-scroller ${styles.sliderScroller} ${
                  styles[effect + 'SliderScroller']
                }`}
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
          </div>
          {useNavigation && pageCount > 1 && (
            <div
              className={`content-slider-controls ${styles.contentSliderControls}`}
            >
              <div
                onClick={prev}
                className={`${styles.sliderNavButton} ${
                  styles.sliderPrevButton
                } ${styles[navigationButtonType]} ${
                  styles[
                    'sliderPrevButton' +
                      capitalizeFirstLetter(navigationButtonType)
                  ]
                }`}
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
              </div>
              <div
                onClick={next}
                className={`${styles.sliderNavButton} ${
                  styles.sliderNextButton
                } ${styles[navigationButtonType]} ${
                  styles[
                    'sliderNextButton' +
                      capitalizeFirstLetter(navigationButtonType)
                  ]
                }`}
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
              </div>
            </div>
          )}
          <div
            className={`content-slider-bottom-nav ${
              styles.contentSliderBottomNav
            } ${socials && socials.length ? styles.useSocials : ''}`}
          >
            {useDotIndicator && pageCount > 1 && (
              <CarouselSliderDots
                length={pageCount}
                current={current}
                dotClick={setCurrentIndex}
              />
            )}
            {socials && socials.length ? (
              <div className={styles.sliderSocials}>
                {socials.map((social, index) => {
                  return (
                    <a
                      className={styles.socialLink}
                      href={social.url}
                      target='_blank'
                      key={index}
                    >
                      {social.icon}
                    </a>
                  )
                })}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default CarouselSlider as typeof CarouselSlider & {
  Slide: typeof CarouselSlide
  ImageSlide: typeof CarouselImageSlide
  Promotion: typeof CarouselPromotion
  Mobile: typeof CarouselMobile
}
