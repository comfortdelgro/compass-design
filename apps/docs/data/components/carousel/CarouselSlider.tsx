import {CarouselSlider} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  const imageUrls = [
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
  ]

  return (
    <CarouselSlider
      onSwitchSlide={handleSwitchSlide}
      className='floating-slide'
      style={{height: '512px', width: '100%'}}
    >
      {imageUrls.map((imageUrl: string, index: number) => (
        <CarouselSlider.ImageSlide
          key={index}
          active={activeIndex === index}
          imageUrl={imageUrl}
        />
      ))}
    </CarouselSlider>
  )
}

export default Sliders
