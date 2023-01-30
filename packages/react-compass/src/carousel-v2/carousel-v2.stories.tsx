import {
  faPinterest,
  faTelegram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import CarouselV2 from './carousel-v2'
import {ContentSliderItem, SocicalIcon} from './content-slider.types'

const socials: SocicalIcon[] = [
  {
    icon: faPinterest,
    url: 'https://www.pinterest.com.au/',
  },
  {icon: faTiktok, url: 'https://www.tiktok.com/'},
  {icon: faTelegram, url: 'https://telegram.org/'},
]

const slideData: ContentSliderItem[] = [
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

export const OnlyContent = () => {
  return (
    <div className='content-slider-sample'>
      <CarouselV2 data={slideData} />
    </div>
  )
}

export const WithSocials = () => {
  return (
    <div className='content-slider-sample'>
      <CarouselV2 data={slideData} socials={socials} />
    </div>
  )
}
