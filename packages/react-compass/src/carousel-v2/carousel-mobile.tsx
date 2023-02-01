import React, {useState} from 'react'
import Button from '../button'
import ContentSlider from './content-slider'
import {
  StyledContentSliderContentItem,
  StyledContentSliderMobile,
  StyledMobileSlideBackground,
  StyledSlideBody,
  StyledSlideButtonRow,
  StyledSlideDescription,
  StyledSlideMask,
  StyledSlideTitle,
} from './content-slider.styles'
import {
  CarouselOptions,
  ContentSliderButton,
  ContentSliderItem,
  SocicalIcon,
} from './content-slider.types'

interface Props extends CarouselOptions {
  data: ContentSliderItem[]
  buttons?: ContentSliderButton[]
  socials?: SocicalIcon[]
  floatingContent?: boolean
}

const CarouselMobile = ({
  data,
  buttons = [],
  socials,
  autoSwitch = false,
  floatingContent = false,
  useNavigation = false,
  useDotIndicator = true,
  navigationButtonType = 'icon',
  onSwitchSlide = () => {},
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
    onSwitchSlide(index)
  }

  const generateButtonRangeClassName = () => {
    return data[activeIndex]?.buttons?.length || 0
  }

  return (
    <StyledContentSliderMobile
      className={`content-slider-mobile-mode${
        floatingContent ? ' floating-content' : ''
      }`}
    >
      <ContentSlider
        onSwitchSlide={handleSwitchSlide}
        socials={socials || []}
        useNavigation={useNavigation}
        autoSwitch={autoSwitch}
        navigationButtonType={navigationButtonType}
        useDotIndicator={useDotIndicator}
        className={`current-slide-buttons-${generateButtonRangeClassName()}`}
      >
        {data.map((dataItem: ContentSliderItem, index: number) => (
          <StyledContentSliderContentItem
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
              />
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
            </div>
          </StyledContentSliderContentItem>
        ))}
      </ContentSlider>
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
    </StyledContentSliderMobile>
  )
}

export default CarouselMobile
