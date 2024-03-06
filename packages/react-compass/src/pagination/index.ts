import ItemCounting from './components/ItemCounting'
import ComposablePagination from './pagination'

export type {PaginationProps} from './pagination'

ComposablePagination.displayName = 'Pagination'
ComposablePagination.ItemCounting = ItemCounting

export default ComposablePagination
