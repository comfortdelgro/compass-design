import _Banner from './banner'
import BannerBody from './banner/body'
import BannerLeft from './banner/left'
import BannerRight from './banner/right'

export type {AnnouncementProps} from './banner'

export const Banner = _Banner as typeof _Banner & {
  Left: typeof BannerLeft
  Body: typeof BannerBody
  Right: typeof BannerRight
}

Banner.Left = BannerLeft
Banner.Body = BannerBody
Banner.Right = BannerRight

// const Banner = _Banner as typeof _Banner & {
//     Left: typeof BannerLeft,
//     Right: typeof BannerRight}

interface ComposableAnnouncement {
  Banner: typeof Banner
  // Bar: typeof BarAnnouncement
}

const Announcement: ComposableAnnouncement = {
  Banner: Banner,
  // Bar: BarAnnouncement,
}

// Announcement.Banner.Left.displayName = 'Announcement.Banner.Left'
// Announcement.Banner.Right.displayName = 'Announcement.Banner.Right'

export default Announcement
