import {faBaby, faBridge, faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {Meta} from '@storybook/react'
import React, {useEffect, useState} from 'react'
import CarouselSlider from '.'
import CarouselMobile from './carousel-mobile'
import CarouselPromotion from './carousel-promotion'
import {
  CarouselSliderButton,
  CarouselSliderItem,
  SocicalIcon,
} from './carousel.const'
import styles from './styles/stories.module.css'

const socials: SocicalIcon[] = [
  {
    icon: <FontAwesomeIcon icon={faBaby} />,
    url: 'https://www.pinterest.com.au/',
  },
  {
    icon: <FontAwesomeIcon icon={faBridge} />,
    url: 'https://www.tiktok.com/',
  },
  {
    icon: <FontAwesomeIcon icon={faBug} />,
    url: 'https://telegram.org/',
  },
]

const buttons: CarouselSliderButton[] = [
  {
    type: 'secondary',
    label: 'Button',
    callback: () => {
      console.log('Button clicked')
    },
  },
  {
    type: 'primary',
    label: 'Call action',
    callback: () => {
      console.log('Call action clicked')
    },
  },
]

const slideData: CarouselSliderItem[] = [
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Content slider is awesome',
    description: 'You can put whatever you want here',
    buttons: [
      {type: 'primary', label: 'Awesome'},
      {type: 'secondary', label: 'Take a tour'},
    ],
    mask: 0.2,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'This slide contains buttons',
    description: 'These button can listen and handle user click event',
    alignment: 'center-end',
    buttons: [
      {type: 'primary', label: 'Awesome'},
      {type: 'secondary', label: 'Take a tour'},
    ],
    mask: 0.5,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    title: 'This slide has different alignment',
    description: 'You can use the document for the other alignment options',
    alignment: 'end-center',
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Content slider is awesome',
    description: 'You can put whatever you want here',
    mask: 0.1,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'This slide contains buttons',
    description: 'These button can listen and handle user click event',
    alignment: 'center-end',
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    title: 'This slide has different alignment',
    description: 'You can use the document for the other alignment options',
    alignment: 'end-center',
    mask: 0.3,
  },
]

export const Multiple: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [count, setCount] = useState(3)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div>
      <h2>Multiple slides on the sample page</h2>
      <CarouselSlider
        onSwitchSlide={handleSwitchSlide}
        effect={'slide'}
        className='my-multiple-slides-slider'
        itemPerPage={count}
      >
        {Array.from({length: 9}).map((item, index) => (
          <CarouselSlider.Slide
            key={index}
            active={activeIndex === index}
            style={{display: 'flex', height: '100%', width: '33.33%'}}
          >
            <div
              style={{
                backgroundColor: '#ccc',
                border: '1px solid #aaa',
                width: '100%',
                height: '250px',
              }}
            >
              Carousel slide {index}
            </div>
          </CarouselSlider.Slide>
        ))}
      </CarouselSlider>
    </div>
  )
}

export const MultipleResponsive: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [count, setCount] = useState(3)

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const handleResize = () => {
      const itemPerpage = window.innerWidth >= 768 ? 3 : 1
      setCount(itemPerpage)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h2>Multiple slides with responsive</h2>
      <CarouselSlider
        onSwitchSlide={handleSwitchSlide}
        effect={'slide'}
        className='my-multiple-slides-slider'
        itemPerPage={count}
      >
        {Array.from({length: 9}).map((item, index) => (
          <CarouselSlider.Slide
            key={index}
            active={activeIndex === index}
            className={styles.slideItem}
          >
            <div className={styles.slideContent} style={{}}>
              Carousel slide {index}
            </div>
          </CarouselSlider.Slide>
        ))}
      </CarouselSlider>
    </div>
  )
}

export const Images: React.FC = () => {
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
    <div>
      <h2>Image Only</h2>
      <CarouselSlider
        onSwitchSlide={handleSwitchSlide}
        useDotIndicator={false}
        className='floating-slide'
        style={{height: '512px'}}
      >
        {imageUrls.map((imageUrl: string, index: number) => (
          <CarouselSlider.ImageSlide
            key={index}
            active={activeIndex === index}
            imageUrl={imageUrl}
          />
        ))}
      </CarouselSlider>
    </div>
  )
}

export const AnyContent: React.FC = () => {
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
    <div>
      <h2>Any Content</h2>
      <CarouselSlider
        onSwitchSlide={handleSwitchSlide}
        navigationButtonType='text'
        className='floating-slide'
        style={{height: '300px'}}
      >
        <CarouselSlider.Slide active={activeIndex === 0}>
          First slide
          <br />
          You can put any content here
          <br />
          Replace this content with everything you want
          <br />
          With your own custom styles
          <br />
          <i>The gray background here is just for this sample</i>
        </CarouselSlider.Slide>
        <CarouselSlider.Slide active={activeIndex === 1}>
          Second slide
          <br />
          Even if you're using a <b>rich text content</b>, <i>It also works!</i>
          <br />
          <img
            style={{width: '100px'}}
            src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp'
          />
        </CarouselSlider.Slide>
      </CarouselSlider>
    </div>
  )
}

export const PromotionSlide: React.FC = () => {
  return (
    <div>
      <h2>Promotions Carousel</h2>
      <CarouselPromotion data={slideData} effect={'slide'} />
    </div>
  )
}

export const PromotionWithSocial: React.FC = () => {
  return (
    <div>
      <h2>Promotions With Social</h2>
      <CarouselPromotion data={slideData} socials={socials} effect={'slide'} />
    </div>
  )
}

export const Mobile: React.FC = () => {
  return (
    <div>
      <h2>Carousel for mobile mode</h2>
      <CarouselMobile data={slideData} useNavigation={false} />
    </div>
  )
}

export const MobileWithButtons: React.FC = () => {
  return (
    <div>
      <h2>Carousel for mobile mode</h2>
      <CarouselMobile
        data={slideData}
        useNavigation={false}
        buttons={buttons}
      />
    </div>
  )
}

export const MobileFloattingContent: React.FC = () => {
  return (
    <div>
      <h2>Carousel for mobile mode</h2>
      <CarouselMobile
        data={slideData}
        floatingContent={true}
        useNavigation={false}
        buttons={buttons}
      />
    </div>
  )
}

const meta = {
  title: 'Example/Carousel',
  component: Multiple,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Multiple>

export default meta
