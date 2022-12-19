import SubBanner from './subBanner'
import SubBannerDescription from './subBanner-description'
import SubBannerImage from './subBanner-image'
import SubBannerTitle from './subBanner-title'

export type {SubBannerProps} from './subBanner'
export type {SubBannerDescriptionProps} from './subBanner-description'
export type {SubBannerImageProps} from './subBanner-image'
export type {SubBannerTitleProps} from './subBanner-title'

SubBanner.Image = SubBannerImage
SubBanner.Title = SubBannerTitle
SubBanner.Description = SubBannerDescription

SubBanner.Image.displayName = 'SubBanner.Image'
SubBanner.Title.displayName = 'SubBanner.Title'
SubBanner.Description.displayName = 'SubBanner.Description'
SubBanner.displayName = 'SubBanner'

export default SubBanner
