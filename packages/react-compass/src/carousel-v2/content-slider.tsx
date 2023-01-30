import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import type {CSS} from '@stitches/react'
import React, {useEffect, useState} from 'react'
import Icon from '../icon'
import {useDOMRef} from '../utils/use-dom-ref'
import ContentSliderDots from './content-slider-dots'
import {
  StyledContentSlider,
  StyledContentSliderBottomNav,
  StyledContentSliderContainer,
  StyledContentSliderNext,
  StyledContentSliderPrev,
  StyledSliderSocials,
} from './content-slider.styles'
import {SocicalIcon} from './content-slider.types'

interface StyledComponentProps {
  css?: CSS
}

interface Props extends StyledComponentProps {
  children: React.ReactNode[]
  autoSwitch?: boolean
  socials?: SocicalIcon[]
  className?: string
  onSwitchSlide: (index: number) => void
}

export type CarouselProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ContentSlider = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({children, autoSwitch = true, socials, className, onSwitchSlide}, ref) => {
    const carouselRef = useDOMRef<HTMLDivElement>(ref)
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

    return (
      <StyledContentSlider
        ref={carouselRef}
        className={`content-slider${className ? ' ' + className : ''}`}
      >
        <StyledContentSliderContainer className='content-slider-container'>
          {children}
        </StyledContentSliderContainer>
        <div className='content-slider-controls'>
          <StyledContentSliderPrev onClick={prev}>
            <Icon icon={faChevronLeft} />
          </StyledContentSliderPrev>
          <StyledContentSliderNext onClick={next}>
            <Icon icon={faChevronRight} />
          </StyledContentSliderNext>
        </div>
        <StyledContentSliderBottomNav
          className={`content-slider-bottom-nav${
            socials && socials.length ? ' use-socials' : ''
          }`}
        >
          <ContentSliderDots
            length={children.length}
            current={current}
            dotClick={setCurrentIndex}
          />
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
        </StyledContentSliderBottomNav>
      </StyledContentSlider>
    )
  },
)

export default ContentSlider
