import Timeline from './timeline'
import TimelineItem from './timeline-item'

export type {TimelineProps} from './timeline'
export type {TimelineItemProps} from './timeline-item'

Timeline.Item = TimelineItem

Timeline.Item.displayName = 'Timeline.Item'
Timeline.displayName = 'Timeline'

export default Timeline
