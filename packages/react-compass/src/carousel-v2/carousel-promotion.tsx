import React, {useState} from 'react'
import Button from '../button'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselSlider from './carousel-slider'
import {
  StyledCarouselSliderContentItem,
  StyledSlideBackground,
  StyledSlideBody,
  StyledSlideButtonRow,
  StyledSlideDescription,
  StyledSlideMask,
  StyledSlideTitle,
} from './content-slider.styles'
import {
  CarouselOptions,
  CarouselSliderItem,
  NavigationButtonType,
  SocicalIcon,
} from './content-slider.types'

interface Props extends CarouselOptions {
  data: CarouselSliderItem[]
  socials?: SocicalIcon[]
  navigationButtonType?: NavigationButtonType
}

export type CarouselPromotionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselPromotion = React.forwardRef<
  HTMLDivElement,
  CarouselPromotionProps
>((props, ref) => {
  const {
    data,
    socials = [],
    useNavigation = true,
    autoSwitch = true,
    navigationButtonType = 'icon',
    css = {},
    onSwitchSlide = () => {},
    ...delegated
  } = props
  const carouselRef = useDOMRef<HTMLDivElement>(ref)

  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
    onSwitchSlide(index)
  }

  const generateButtonRangeClassName = () => {
    return data[activeIndex]?.buttons?.length || 0
  }

  return (
    <CarouselSlider
      onSwitchSlide={handleSwitchSlide}
      socials={socials || []}
      useNavigation={useNavigation}
      autoSwitch={autoSwitch}
      navigationButtonType={navigationButtonType}
      ref={carouselRef}
      css={css}
      {...delegated}
      className={`current-slide-buttons-${generateButtonRangeClassName()}`}
    >
      {data.map((dataItem: CarouselSliderItem, index: number) => (
        <StyledCarouselSliderContentItem
          key={index}
          className={`slider-slide${activeIndex === index ? ' active' : ''}`}
        >
          <StyledSlideBackground
            className='slide-background'
            src={dataItem.image}
          />
          {dataItem.mask && (
            <StyledSlideMask
              className='slide-mask'
              style={{background: `rgba(0,0,0,${dataItem.mask})`}}
            />
          )}
          <StyledSlideBody className={`slide-body ${dataItem.alignment || ''}`}>
            <StyledSlideTitle className='content-slider-title'>
              {dataItem.title}
            </StyledSlideTitle>
            <StyledSlideDescription className='content-slider-description'>
              {dataItem.description}
            </StyledSlideDescription>
            {dataItem.buttons && (
              <StyledSlideButtonRow className='slide-button-row'>
                {dataItem.buttons.map((button, index) => {
                  return (
                    <Button
                      key={index}
                      variant={button.type}
                      className={button.type}
                    >
                      {button.label}
                    </Button>
                  )
                })}
              </StyledSlideButtonRow>
            )}
          </StyledSlideBody>
        </StyledCarouselSliderContentItem>
      ))}
    </CarouselSlider>
  )
})

export default CarouselPromotion
