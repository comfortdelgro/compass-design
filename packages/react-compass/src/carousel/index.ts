import CarouselImageSlide from './carousel-image-slide'
import CarouselMobile from './carousel-mobile'
import CarouselPromotion from './carousel-promotion'
import CarouselSlide from './carousel-slide'
import CarouselSlider from './carousel-slider'

CarouselSlider.Slide = CarouselSlide
CarouselSlider.ImageSlide = CarouselImageSlide
CarouselSlider.Promotion = CarouselPromotion
CarouselSlider.Mobile = CarouselMobile

export type {
  AnimationType,
  ButtonType,
  CarouselOptions,
  CarouselSliderButton,
  CarouselSliderItem,
  NavigationButtonType,
  NinePartAlignment,
  SocicalIcon,
} from './content-slider.types'

export default CarouselSlider
