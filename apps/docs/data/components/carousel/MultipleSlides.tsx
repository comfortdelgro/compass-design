import CarouselSlider from '@comfortdelgro/react-compass/carousel'
import {useState} from 'react'

const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <CarouselSlider
      onSwitchSlide={handleSwitchSlide}
      effect={'slide'}
      className='floating-slide'
      itemPerPage={3}
      style={{height: '512px'}}
    >
      {Array.from({length: 9}).map((item, index) => (
        <CarouselSlider.Slide
          key={index}
          className={`slider-side${activeIndex === index ? ' active' : ''}`}
          active={false}
          css={{
            width: '33.33% !important',
            padding: '0 20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ccc',
              border: '1px solid #aaa',
              height: '100%',
            }}
          >
            Carousel slide {index}
          </div>
        </CarouselSlider.Slide>
      ))}
    </CarouselSlider>
  )
}

export default Sliders
