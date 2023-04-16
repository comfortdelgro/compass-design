import TabItem from './item'
import Tabs from './tabs'
import TabsPaneless from './tabs-paneless'

export type {TabsProps} from './tabs'

Tabs.Item = TabItem
Tabs.Paneless = TabsPaneless

Tabs.displayName = 'Tabs'

export default Tabs
