import Grid from './grid'
import GridItem from './grid-item'

export type {GridContainerProps} from './grid'
export type {GridItemProps} from './grid-item'

Grid.Item = GridItem

Grid.displayName = 'GridContainer'
Grid.Item.displayName = 'GridItem'

export default Grid
