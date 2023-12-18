import ItemCounting from './components/ItemCounting'
import Pagination from './pagination'

export type {PaginationProps} from './pagination'

const ComposablePagination = Pagination as typeof Pagination & {
  ItemCounting: typeof ItemCounting
}

ComposablePagination.displayName = 'Pagination'
ComposablePagination.ItemCounting = ItemCounting

export default ComposablePagination
