import {Item} from '@react-stately/collections'
import Tabs from './tabs'
import TabsPaneless from './tabs-paneless'

export type {TabsProps} from './tabs'

Tabs.Item = Item
Tabs.Paneless = TabsPaneless

Tabs.displayName = 'Tabs'

export default Tabs
