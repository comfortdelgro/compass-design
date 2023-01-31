import React, {useState} from 'react'
import {styled} from '../theme'
import CarouselSlide from './carousel-slide'
import ContentSlider from './content-slider'
import {StyledContentSliderImageItem} from './content-slider.styles'

export const NoDots = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const imageUrls = [
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
  ]

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className='content-slider-sample'>
      <ContentSlider onSwitchSlide={handleSwitchSlide} useDotIndicator={false}>
        {imageUrls.map((imageUrl: string, index: number) => (
          <StyledContentSliderImageItem
            key={index}
            className={`slider-side${activeIndex === index ? ' active' : ''}`}
            src={imageUrl}
          />
        ))}
      </ContentSlider>
    </div>
  )
}

export const ArrowIconButton = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const imageUrls = [
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
  ]

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className='content-slider-sample'>
      <ContentSlider onSwitchSlide={handleSwitchSlide}>
        {imageUrls.map((imageUrl: string, index: number) => (
          <StyledContentSliderImageItem
            key={index}
            className={`slider-side${activeIndex === index ? ' active' : ''}`}
            src={imageUrl}
          />
        ))}
      </ContentSlider>
    </div>
  )
}

export const TextButton = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const imageUrls = [
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
  ]

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className='content-slider-sample'>
      <ContentSlider
        onSwitchSlide={handleSwitchSlide}
        navigationButtonType='text'
      >
        {imageUrls.map((imageUrl: string, index: number) => (
          <StyledContentSliderImageItem
            key={index}
            className={`slider-side${activeIndex === index ? ' active' : ''}`}
            src={imageUrl}
          />
        ))}
      </ContentSlider>
    </div>
  )
}

const StyledSampleAnyContentSlider = styled('div', {
  background: '#cccccc',
})

export const AnyContent = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <StyledSampleAnyContentSlider className='content-slider-sample'>
      <ContentSlider
        onSwitchSlide={handleSwitchSlide}
        navigationButtonType='text'
      >
        <CarouselSlide active={activeIndex === 0}>
          First slide
          <br />
          You can put any content here
          <br />
          Replace this content with everything you want
          <br />
          With your own custom styles
          <br />
          <i>The gray background here is just for this sample</i>
        </CarouselSlide>
        <CarouselSlide active={activeIndex === 1}>
          Second slide
          <br />
          Even if you're using a <b>rich text content</b>, <i>It also works!</i>
          <br />
          <img
            style={{width: '100px'}}
            src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp'
          />
        </CarouselSlide>
      </ContentSlider>
    </StyledSampleAnyContentSlider>
  )
}
