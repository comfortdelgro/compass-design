import InteractiveList from './interactive-list'
import List from './list'
import ListCard from './list-card'
import ListCardDetail from './list-card-detail'
import ListImage from './list-image'

export type {InteractiveListProps} from './interactive-list'
export type {ListProps} from './list'
export type {ListCardProps} from './list-card'
export type {ListCardDetailProps} from './list-card-detail'
export type {ListImageProps} from './list-image'
export {ListCard, InteractiveList}

List.Image = ListImage
ListCard.Detail = ListCardDetail

export default List
