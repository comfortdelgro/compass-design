import {NaturalDrawerWrapper} from './natural-drawer'
import {NaturalDrawerContent} from './natural-drawer-content'
import {NaturalDrawerHeader} from './natural-drawer-header'

const NaturalDrawer = NaturalDrawerWrapper as typeof NaturalDrawerWrapper & {
  Header: typeof NaturalDrawerHeader
  Content: typeof NaturalDrawerContent
}

NaturalDrawer.Header = NaturalDrawerHeader
NaturalDrawer.Content = NaturalDrawerContent
NaturalDrawer.displayName = 'Drawer'

export default NaturalDrawer
