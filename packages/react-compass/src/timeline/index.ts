import _Timeline from './timeline'
import TimelineItem from './timeline-item'

export type {TimelineProps} from './timeline'
export type {TimelineItemProps} from './timeline-item'

const Timeline = _Timeline as typeof _Timeline & {
  Item: typeof TimelineItem
}

Timeline.Item = TimelineItem

Timeline.Item.displayName = 'Timeline.Item'
Timeline.displayName = 'Timeline'

export default Timeline
