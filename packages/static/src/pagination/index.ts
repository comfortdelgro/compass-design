import ItemCounting from './components/ItemCounting'
import Pagination from './pagination'

export type {PaginationProps} from './pagination'

Pagination.displayName = 'Pagination'

export default Pagination as typeof Pagination & {
  ItemsCounting: typeof ItemCounting
}
