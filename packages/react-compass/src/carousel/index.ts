import Carousel from './carousel'
import CarouselButtons from './carousel-buttons'
import CarouselDescription from './carousel-description'
import CarouselImage from './carousel-image'
import CarouselTitle from './carousel-title'

export type {CarouselProps} from './carousel'
export type {CarouselButtonsProps} from './carousel-buttons'
export type {CarouselDescriptionProps} from './carousel-description'
export type {CarouselImageProps} from './carousel-image'
export type {CarouselTitleProps} from './carousel-title'

Carousel.Image = CarouselImage
Carousel.Title = CarouselTitle
Carousel.Description = CarouselDescription
Carousel.Buttons = CarouselButtons

export default Carousel
