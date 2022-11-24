import Carousel from './carousel'
import CarouselDescription from './carousel-description'
import CarouselImage from './carousel-image'
import CarouselTitle from './carousel-title'

export type {CarouselProps} from './carousel'
export type {CarouselDescriptionProps} from './carousel-description'
export type {CarouselImageProps} from './carousel-image'
export type {CarouselTitleProps} from './carousel-title'

Carousel.Image = CarouselImage
Carousel.Title = CarouselTitle
Carousel.Description = CarouselDescription

export default Carousel
