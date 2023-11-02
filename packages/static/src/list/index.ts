import DragAndDropList from './drag-and-drop'
import DragAndDropListItem from './drag-and-drop/item'
import List from './list'
import ListCard from './list-card'
import ListCardDetail from './list-card-detail'
import ListImage from './list-image'
import InteractiveList from './list-interactive'

export type {DragAndDropListProps} from './drag-and-drop'
export type {ListProps} from './list'
export type {ListCardProps} from './list-card'
export type {ListCardDetailProps} from './list-card-detail'
export type {ListImageProps} from './list-image'
export type {InteractiveListProps} from './list-interactive'
export {DragAndDropList, InteractiveList, ListCard}

List.Image = ListImage
ListCard.Detail = ListCardDetail
DragAndDropList.Item = DragAndDropListItem

List.Image.displayName = 'List.Image'
ListCard.Detail.displayName = 'ListCard.Detail'
List.displayName = 'List'

export default List
