import {useState} from 'react'
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
import {ContentSliderItem, SocicalIcon} from './content-slider.types'

interface Props {
  data: ContentSliderItem[]
  socials?: SocicalIcon[]
}

const CarouselV2 = ({data, socials}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  const generateButtonRangeClassName = () => {
    return data[activeIndex]?.buttons?.length || 0
  }

  return (
    <div className='content-slider-sample'>
      <ContentSlider
        onSwitchSlide={handleSwitchSlide}
        socials={socials || []}
        className={`current-slide-buttons-${generateButtonRangeClassName()}`}
      >
        {data.map((data: ContentSliderItem, index: number) => (
          <StyledContentSliderContentItem
            key={index}
            className={`slider-slide${activeIndex === index ? ' active' : ''}`}
          >
            <StyledSlideBackground
              className='slide-background'
              src={data.image}
            />
            {data.mask && (
              <StyledSlideMask
                className='slide-mask'
                style={{background: `rgba(0,0,0,${data.mask})`}}
              />
            )}
            <StyledSlideBody className={`slide-body ${data.alignment || ''}`}>
              <StyledSlideTitle className='content-slider-title'>
                {data.title}
              </StyledSlideTitle>
              <StyledSlideDescription className='content-slider-description'>
                {data.description}
              </StyledSlideDescription>
              {data.buttons && (
                <StyledSlideButtonRow className='slide-button-row'>
                  {data.buttons.map((button, index) => {
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
    </div>
  )
}

export default CarouselV2
