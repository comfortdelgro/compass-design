import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useEffect, useState} from 'react'
import {styled} from '../theme'
import CarouselMobile from './carousel-mobile'
import CarouselPromotion from './carousel-promotion'
import CarouselSlide from './carousel-slide'
import CarouselSlider from './carousel-slider'
import {StyledCarouselSliderImageItem} from './content-slider.styles'
import {
  CarouselSliderButton,
  CarouselSliderItem,
  SocicalIcon,
} from './content-slider.types'
import './stories.css'

const socials: SocicalIcon[] = [
  {
    icon: <FontAwesomeIcon icon={faBug} />,
    url: 'https://www.pinterest.com.au/',
  },
  {
    icon: <FontAwesomeIcon icon={faBug} />,
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

export const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeIndex1, setActiveIndex1] = useState(0)
  const [activeIndex2, setActiveIndex2] = useState(0)
  const [count, setCount] = useState(3)

  const imageUrls = [
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
    'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
  ]

  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index)
  }

  const handleSwitchSlide1 = (index: number) => {
    setActiveIndex1(index)
  }

  const handleSwitchSlide2 = (index: number) => {
    setActiveIndex2(index)
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
    <>
      <StyledSampleAnyCarouselSlider className='content-slider-sample'>
        <h2>Slider - image only + no dots</h2>

        <CarouselSlider
          onSwitchSlide={handleSwitchSlide2}
          effect={'slide'}
          className='my-multiple-slides-slider'
          itemPerPage={count}
        >
          {Array.from({length: 9}).map((item, index) => (
            <CarouselSlide
              key={index}
              className={`slider-side responsive-slide${
                activeIndex2 === index ? ' active' : ''
              }`}
              active={false}
            >
              <div className='sample-slide-inner'>Carousel slide {index}</div>
            </CarouselSlide>
          ))}
        </CarouselSlider>
      </StyledSampleAnyCarouselSlider>

      <StyledSampleAnyCarouselSlider className='content-slider-sample'>
        <h2>Slider - image only + no dots</h2>

        <CarouselSlider
          onSwitchSlide={handleSwitchSlide1}
          useDotIndicator={false}
          className='floating-slide'
          style={{height: '512px'}}
        >
          {imageUrls.map((imageUrl: string, index: number) => (
            <StyledCarouselSliderImageItem
              key={index}
              className={`slider-side${
                activeIndex1 === index ? ' active' : ''
              }`}
              src={imageUrl}
            />
          ))}
        </CarouselSlider>
      </StyledSampleAnyCarouselSlider>

      <StyledSampleAnyCarouselSlider className='content-slider-sample gray-background'>
        <h2>Slider - Any content</h2>
        <CarouselSlider
          onSwitchSlide={handleSwitchSlide}
          navigationButtonType='text'
          className='floating-slide'
          style={{height: '300px'}}
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
            Even if you're using a <b>rich text content</b>,{' '}
            <i>It also works!</i>
            <br />
            <img
              style={{width: '100px'}}
              src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp'
            />
          </CarouselSlide>
        </CarouselSlider>
      </StyledSampleAnyCarouselSlider>
    </>
  )
}

export const Promotion = () => {
  return (
    <>
      <StyledSampleAnyCarouselSlider className='content-slider-sample'>
        <h2>Promotion - Slide effect</h2>
        <CarouselPromotion data={slideData} effect={'slide'} />
      </StyledSampleAnyCarouselSlider>

      <StyledSampleAnyCarouselSlider className='content-slider-sample'>
        <h2>Promotion - Fade effect</h2>
        <CarouselPromotion data={slideData} />
      </StyledSampleAnyCarouselSlider>

      <StyledSampleAnyCarouselSlider className='content-slider-sample'>
        <h2>Promotion - With socials</h2>
        <CarouselPromotion data={slideData} socials={socials} />
      </StyledSampleAnyCarouselSlider>

      <StyledSampleAnyCarouselSlider className='content-slider-sample'>
        <h2>Promotion - With text navigation buttons</h2>
        <CarouselPromotion
          data={slideData}
          socials={socials}
          navigationButtonType={'text'}
        />
      </StyledSampleAnyCarouselSlider>
    </>
  )
}

export const Mobile = () => {
  return (
    <>
      <StyledSampleMobileCarouselSlider className='content-slider-sample'>
        <h2>Mobile - without buttons</h2>
        <CarouselMobile data={slideData} useNavigation={false} />
      </StyledSampleMobileCarouselSlider>

      <StyledSampleMobileCarouselSlider className='content-slider-sample'>
        <h2>Mobile - with buttons</h2>
        <CarouselMobile
          data={slideData}
          useNavigation={false}
          buttons={buttons}
        />
      </StyledSampleMobileCarouselSlider>

      <StyledSampleMobileCarouselSlider className='content-slider-sample'>
        <h2>Mobile - floating content + without buttons</h2>
        <CarouselMobile
          data={slideData}
          floatingContent={true}
          useNavigation={false}
        />
      </StyledSampleMobileCarouselSlider>

      <StyledSampleMobileCarouselSlider className='content-slider-sample'>
        <h2>Mobile - floating content + with buttons</h2>
        <CarouselMobile
          data={slideData}
          floatingContent={true}
          useNavigation={false}
          buttons={buttons}
        />
      </StyledSampleMobileCarouselSlider>
    </>
  )
}

const StyledSampleAnyCarouselSlider = styled('div', {
  background: '#ffffff',
  '&.gray-background': {
    background: '#cccccc',
  },
})

const StyledSampleMobileCarouselSlider = styled('div', {
  width: '100%',
})
