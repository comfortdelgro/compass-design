import _Banner from './banner'
import BannerDescription from './banner-description'
import BannerImage from './banner-image'
import BannerTitle from './banner-title'

export type {BannerProps} from './banner'
export type {BannerDescriptionProps} from './banner-description'
export type {BannerImageProps} from './banner-image'
export type {BannerTitleProps} from './banner-title'

const Banner = _Banner as typeof _Banner & {
  Image: typeof BannerImage
  Title: typeof BannerTitle
  Description: typeof BannerDescription
}

Banner.Image = BannerImage
Banner.Title = BannerTitle
Banner.Description = BannerDescription

Banner.Image.displayName = 'Banner.Image'
Banner.Title.displayName = 'Banner.Title'
Banner.Description.displayName = 'Banner.Description'
Banner.displayName = 'Banner'

export default Banner
