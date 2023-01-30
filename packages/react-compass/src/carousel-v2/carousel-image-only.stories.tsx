import {useState} from 'react'
import ContentSlider from './content-slider'
import {StyledContentSliderImageItem} from './content-slider.styles'

export const OnlyImages = () => {
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
