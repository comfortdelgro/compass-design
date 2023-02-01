import React, {useState} from 'react'
import Button from '../button'
import ContentSlider from './content-slider'
import {
  StyledContentSliderContentItem,
  StyledSlideBackground,
  StyledSlideBody,
  StyledSlideButtonRow,
  StyledSlideDescription,
  StyledSlideMask,
  StyledSlideTitle,
} from './content-slider.styles'
import {
  CarouselOptions,
  ContentSliderItem,
  NavigationButtonType,
  SocicalIcon,
} from './content-slider.types'

interface Props extends CarouselOptions {
  data: ContentSliderItem[]
  socials?: SocicalIcon[]
  navigationButtonType?: NavigationButtonType
}

const CarouselV2 = ({
  data,
  socials = [],
  useNavigation = true,
  autoSwitch = true,
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
    <ContentSlider
      onSwitchSlide={handleSwitchSlide}
      socials={socials || []}
      useNavigation={useNavigation}
      autoSwitch={autoSwitch}
      navigationButtonType={navigationButtonType}
      className={`current-slide-buttons-${generateButtonRangeClassName()}`}
    >
      {data.map((dataItem: ContentSliderItem, index: number) => (
        <StyledContentSliderContentItem
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
        </StyledContentSliderContentItem>
      ))}
    </ContentSlider>
  )
}

export default CarouselV2
