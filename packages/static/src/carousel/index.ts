import CarouselImageSlide from './carousel-image-slide'
import CarouselMobile from './carousel-mobile'
import CarouselPromotion from './carousel-promotion'
import CarouselSlide from './carousel-slide'
import CarouselSlider from './carousel-slider'

export type {CarouselImageSlideProps} from './carousel-image-slide'
export type {CarouselMobileProps} from './carousel-mobile'
export type {CarouselPromotionProps} from './carousel-promotion'
export type {CarouselSlideProps} from './carousel-slide'
export type {CarouselSliderProps} from './carousel-slider'
export type {
  ButtonType,
  CarouselOptions,
  CarouselSliderButton,
  CarouselSliderItem,
  NavigationButtonType,
  NinePartAlignment,
  SocicalIcon,
} from './carousel.const'

CarouselSlider.displayName = 'CarouselSlider'
CarouselSlider.Slide = CarouselSlide
CarouselSlider.ImageSlide = CarouselImageSlide
CarouselSlider.Promotion = CarouselPromotion
CarouselSlider.Mobile = CarouselMobile

export default CarouselSlider
