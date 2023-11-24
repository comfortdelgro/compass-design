import DrawerComposable from './drawer'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'

export type {DrawerFooterProps} from './drawer-footer'
export type {DrawerHeaderProps} from './drawer-header'
export type {
  DrawerDefaultProps,
  DrawerH5Props,
  DrawerProps,
  DrawerRef,
} from './types'

const Drawer = DrawerComposable as typeof DrawerComposable & {
  Header: typeof DrawerHeader
  Footer: typeof DrawerFooter
}

Drawer.Header = DrawerHeader
Drawer.Footer = DrawerFooter

Drawer.Header.displayName = 'Drawer.Header'
Drawer.Footer.displayName = 'Drawer.Footer'
Drawer.displayName = 'Drawer'

export default Drawer
