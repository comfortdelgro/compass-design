import Pagination from './pagination'
import ItemCounting from './pagination-itemCounting'

export type {PaginationProps} from './pagination'
export type {ItemCountingProps} from './pagination-itemCounting'

Pagination.displayName = 'Pagination'

Pagination.ItemsCounting = ItemCounting
export default Pagination
