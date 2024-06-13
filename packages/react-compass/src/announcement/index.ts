import Banner from './banner'
import BannerBody from './banner/body'
import BannerLeft from './banner/left'
import BannerRight from './banner/right'

export type {BannerProps as AnnouncementBannerProps} from './banner'
export type {BannerBodyProps as AnnouncementBannerBodyProps} from './banner/body'
export type {BannerLeftProps as AnnouncementBannerLeftProps} from './banner/left'
export type {BannerRightProps as AnnouncementBannerRightProps} from './banner/right'

import Card from './card'
import CardBody from './card/body'
import CardFooter from './card/footer'
import CardHeader from './card/header'

export type {CardProps as AnnouncementCardProps} from './card'
export type {CardBodyProps as AnnouncementCardBodyProps} from './card/body'
export type {CardFooterProps as AnnouncementCardFooterProps} from './card/footer'
export type {CardHeaderProps as AnnouncementCardHeaderProps} from './card/header'

interface ComposableAnnouncement {
  Banner: typeof Banner & {
    Left: typeof BannerLeft
    Body: typeof BannerBody
    Right: typeof BannerRight
  }
  Card: typeof Card & {
    Header: typeof CardHeader
    Body: typeof CardBody
    Footer: typeof CardFooter
  }
}

const Announcement: ComposableAnnouncement = {
  Banner: Banner as typeof Banner & {
    Left: typeof BannerLeft
    Body: typeof BannerBody
    Right: typeof BannerRight
  },
  Card: Card as typeof Card & {
    Header: typeof CardHeader
    Body: typeof CardBody
    Footer: typeof CardFooter
  },
}

Announcement.Banner.Left = BannerLeft
Announcement.Banner.Body = BannerBody
Announcement.Banner.Right = BannerRight

Announcement.Card.Header = CardHeader
Announcement.Card.Body = CardBody
Announcement.Card.Footer = CardFooter

export default Announcement
