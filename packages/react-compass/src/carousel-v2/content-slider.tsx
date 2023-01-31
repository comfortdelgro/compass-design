import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import type {CSS} from '@stitches/react'
import React, {useEffect, useState} from 'react'
import Icon from '../icon'
import ContentSliderDots from './content-slider-dots'
import {
  StyledContentSlider,
  StyledContentSliderBottomNav,
  StyledContentSliderContainer,
  StyledContentSliderNext,
  StyledContentSliderPrev,
  StyledSliderSocials,
} from './content-slider.styles'
import {NavigationButtonType, SocicalIcon} from './content-slider.types'

interface StyledComponentProps {
  css?: CSS
}

interface Props extends StyledComponentProps {
  children: React.ReactNode[]
  autoSwitch?: boolean
  useNavigation?: boolean
  useDotIndicator?: boolean
  navigationButtonType?: NavigationButtonType
  socials?: SocicalIcon[]
  className?: string
  onSwitchSlide?: (index: number) => void
}

const ContentSlider = ({
  children,
  autoSwitch = true,
  useNavigation = true,
  useDotIndicator = true,
  navigationButtonType = 'icon',
  socials,
  className,
  onSwitchSlide = () => {},
}: Props) => {
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
      className={`content-slider${className ? ' ' + className : ''}`}
    >
      <StyledContentSliderContainer className='content-slider-container'>
        {children}
      </StyledContentSliderContainer>
      {useNavigation && children.length > 1 && (
        <div className='content-slider-controls'>
          <StyledContentSliderPrev
            onClick={prev}
            className={navigationButtonType}
          >
            {navigationButtonType === 'icon' ? (
              <Icon icon={faChevronLeft} />
            ) : (
              'Prev'
            )}
          </StyledContentSliderPrev>
          <StyledContentSliderNext
            onClick={next}
            className={navigationButtonType}
          >
            {navigationButtonType === 'icon' ? (
              <Icon icon={faChevronRight} />
            ) : (
              'Next'
            )}
          </StyledContentSliderNext>
        </div>
      )}
      <StyledContentSliderBottomNav
        className={`content-slider-bottom-nav${
          socials && socials.length ? ' use-socials' : ''
        }`}
      >
        {useDotIndicator && children.length > 1 && (
          <ContentSliderDots
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
      </StyledContentSliderBottomNav>
    </StyledContentSlider>
  )
}

export default ContentSlider
