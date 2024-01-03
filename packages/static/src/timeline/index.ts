// import Card from './card'
// import CardBody from './card-body'
// import CardImage from './card-image'
// import CardTitle from './card-title'

// export type {CardProps} from './card'
// export type {CardBodyProps} from './card-body'
// export type {CardImageProps} from './card-image'
// export type {CardTitleProps} from './card-title'

// Card.Body = CardBody
// Card.Image = CardImage
// Card.Title = CardTitle

// export default Card

import Timeline from './timeline'
import TimelineItem from './timeline-item'

export type {TimelineProps} from './timeline'
export type {TimelineItemProps} from './timeline-item'

Timeline.Item = TimelineItem

Timeline.Item.displayName = 'Timeline.Item'
Timeline.displayName = 'Timeline'

export default Timeline
