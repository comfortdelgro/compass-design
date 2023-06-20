import Gutter from './gutter'
import GutterContent from './gutter-content'
import GutterResizer from './gutter-resizer'

export type {GutterProps} from './gutter'
export type {GutterContentProps} from './gutter-content'
export type {GutterResizerProps} from './gutter-resizer'
export {GutterContent, GutterResizer}

Gutter.Resizer = GutterResizer
Gutter.Content = GutterContent

Gutter.displayName = 'Gutter'
Gutter.Resizer.displayName = 'Gutter Resizer'
Gutter.Content.displayName = 'Gutter Content'

export default Gutter
