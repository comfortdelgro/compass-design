import Navbar from './navbar'
import NavbarActions from './navbar-actions'
import NavbarBrand from './navbar-brand'
import {NavbarLinks} from './navbar-links'
import {NavbarSeperator} from './navbar-seperator'

export type {NavbarProps} from './navbar'
export type {NavbarActionsProps} from './navbar-actions'
export type {NavbarBrandProps} from './navbar-brand'

Navbar.Brand = NavbarBrand
Navbar.Actions = NavbarActions
Navbar.Links = NavbarLinks
Navbar.Separator = NavbarSeperator

Navbar.Brand.displayName = 'Navbar.Brand'
Navbar.Actions.displayName = 'Navbar.Actions'
Navbar.Links.displayName = 'Navbar.Links'
Navbar.Separator.displayName = 'Navbar.Separator'
Navbar.displayName = 'Navbar'

export default Navbar
