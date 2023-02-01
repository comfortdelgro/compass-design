import {
  faPinterest,
  faTelegram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import {styled} from '../theme'
import CarouselMobile from './carousel-mobile'
import {
  CarouselSliderButton,
  CarouselSliderItem,
  SocicalIcon,
} from './content-slider.types'

const socials: SocicalIcon[] = [
  {
    icon: faPinterest,
    url: 'https://www.pinterest.com.au/',
  },
  {icon: faTiktok, url: 'https://www.tiktok.com/'},
  {icon: faTelegram, url: 'https://telegram.org/'},
]

const slideData: CarouselSliderItem[] = [
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Content slider is awesome',
    description: 'You can put whatever you want here',
    mask: 0.2,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'This slide contains buttons',
    description: 'These button can listen and handle user click event',
    alignment: 'center-end',
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

const StyledSampleAnyCarouselSlider = styled('div', {
  width: '480px',
})

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

export const WithButtons = () => {
  return (
    <StyledSampleAnyCarouselSlider className='content-slider-sample'>
      <CarouselMobile
        data={slideData}
        useNavigation={false}
        buttons={buttons}
      />
    </StyledSampleAnyCarouselSlider>
  )
}

export const NoButtons = () => {
  return (
    <StyledSampleAnyCarouselSlider className='content-slider-sample'>
      <CarouselMobile data={slideData} useNavigation={false} />
    </StyledSampleAnyCarouselSlider>
  )
}

export const FloatingContent = () => {
  return (
    <StyledSampleAnyCarouselSlider className='content-slider-sample'>
      <CarouselMobile
        data={slideData}
        floatingContent={true}
        useNavigation={false}
      />
    </StyledSampleAnyCarouselSlider>
  )
}

export const FloatingContentWithButtons = () => {
  return (
    <StyledSampleAnyCarouselSlider className='content-slider-sample'>
      <CarouselMobile
        data={slideData}
        floatingContent={true}
        useNavigation={false}
        buttons={buttons}
      />
    </StyledSampleAnyCarouselSlider>
  )
}
