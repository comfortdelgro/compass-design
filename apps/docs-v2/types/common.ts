import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

export type TSideNavItem = {
  isActive?: boolean
  isExpanded?: boolean
  children?: TSideNavItem[]
  pathname: string
  title: string
  icon?: IconDefinition
}
