import _Banner from './banner'
import BannerBody from './banner/body'
import BannerLeft from './banner/left'
import BannerRight from './banner/right'

export type {BannerProps as AnnouncementBannerProps} from './banner'
export type {BannerBodyProps as AnnouncementBannerBodyProps} from './banner/body'
export type {BannerLeftProps as AnnouncementBannerLeftProps} from './banner/left'
export type {BannerRightProps as AnnouncementBannerRightProps} from './banner/right'

import _Card from './card'
import CardBody from './card/body'
import CardFooter from './card/footer'
import CardHeader from './card/header'

export type {CardProps as AnnouncementCardProps} from './card'
export type {CardBodyProps as AnnouncementCardBodyProps} from './card/body'
export type {CardFooterProps as AnnouncementCardFooterProps} from './card/footer'
export type {CardHeaderProps as AnnouncementCardHeaderProps} from './card/header'

export const Banner = _Banner as typeof _Banner & {
  Left: typeof BannerLeft
  Body: typeof BannerBody
  Right: typeof BannerRight
}

Banner.Left = BannerLeft
Banner.Body = BannerBody
Banner.Right = BannerRight

export const Card = _Card as typeof _Card & {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

interface ComposableAnnouncement {
  Banner: typeof Banner
  Card: typeof Card
}

const Announcement: ComposableAnnouncement = {
  Banner: Banner,
  Card: Card,
}

export default Announcement
