import BreadcrumbItem from './breadcrumb-item'
import Breadcrumbs from './breadcrumbs'

export type {BreadcrumbItemProps} from './breadcrumb-item'
export type {BreadcrumbsProps} from './breadcrumbs'

Breadcrumbs.Item = BreadcrumbItem

Breadcrumbs.Item.displayName = 'Breadcrumbs.Item'
Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
