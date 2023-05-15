import React, {useState} from 'react'
import Button from '../button'
import {useDOMRef} from '../utils/use-dom-ref'
import CarouselSlider from './carousel-slider'
import {
  StyledCarouselSliderContentItem,
  StyledCarouselSliderMobile,
  StyledMobileSlideBackground,
  StyledSlideBody,
  StyledSlideButtonRow,
  StyledSlideDescription,
  StyledSlideMask,
  StyledSlideTitle,
} from './content-slider.styles'
import {
  CarouselOptions,
  CarouselSliderButton,
  CarouselSliderItem,
  SocicalIcon,
} from './content-slider.types'

interface Props extends CarouselOptions {
  data: CarouselSliderItem[]
  buttons?: CarouselSliderButton[]
  socials?: SocicalIcon[]
  floatingContent?: boolean
}

export type CarouselMobileProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselMobile = React.forwardRef<HTMLDivElement, CarouselMobileProps>(
  (props, ref) => {
    const {
      data,
      buttons = [],
      socials,
      autoSwitch = false,
      floatingContent = false,
      useNavigation = false,
      useDotIndicator = true,
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

    const slideTitle = () => {
      return data[activeIndex]?.title || ''
    }

    const slideDescription = () => {
      return data[activeIndex]?.description || ''
    }

    return (
      <StyledCarouselSliderMobile
        ref={carouselRef}
        css={css}
        {...delegated}
        className={`content-slider-mobile-mode${
          floatingContent ? ' floating-content' : ''
        }`}
      >
        <CarouselSlider
          onSwitchSlide={handleSwitchSlide}
          socials={socials || []}
          useNavigation={useNavigation}
          autoSwitch={autoSwitch}
          navigationButtonType={navigationButtonType}
          useDotIndicator={useDotIndicator}
          effect='slide'
          className={`current-slide-buttons-${generateButtonRangeClassName()}`}
        >
          {data.map((dataItem: CarouselSliderItem, index: number) => (
            <StyledCarouselSliderContentItem
              key={index}
              className={`slider-slide mobile-mode${
                activeIndex === index ? ' active' : ''
              }`}
            >
              {dataItem.mask && (
                <StyledSlideMask
                  className='slide-mask'
                  style={{background: `rgba(0,0,0,${dataItem.mask})`}}
                />
              )}
              <div className='carousel-mobile-inner-content'>
                <StyledMobileSlideBackground
                  className='slide-background'
                  src={dataItem.image}
                  draggable={false}
                />
                {floatingContent ? (
                  <StyledSlideBody
                    className={`slide-body ${
                      floatingContent ? dataItem.alignment || '' : ''
                    }`}
                  >
                    <StyledSlideTitle className='content-slider-title'>
                      {dataItem.title}
                    </StyledSlideTitle>
                    <StyledSlideDescription className='content-slider-description'>
                      {dataItem.description}
                    </StyledSlideDescription>
                  </StyledSlideBody>
                ) : (
                  ''
                )}
              </div>
            </StyledCarouselSliderContentItem>
          ))}
        </CarouselSlider>

        {!floatingContent ? (
          <StyledSlideBody className={`slide-body`}>
            <StyledSlideTitle className='content-slider-title'>
              {slideTitle()}
            </StyledSlideTitle>
            <StyledSlideDescription className='content-slider-description'>
              {slideDescription()}
            </StyledSlideDescription>
          </StyledSlideBody>
        ) : (
          ''
        )}
        {buttons && (
          <StyledSlideButtonRow className='slide-mobile-buttons'>
            {buttons.map((button, index) => {
              return (
                <Button
                  key={index}
                  variant={button.type}
                  className={button.type}
                  onPress={() => {
                    if (button.callback) {
                      button.callback()
                    }
                  }}
                >
                  {button.label}
                </Button>
              )
            })}
          </StyledSlideButtonRow>
        )}
      </StyledCarouselSliderMobile>
    )
  },
)

export default CarouselMobile
