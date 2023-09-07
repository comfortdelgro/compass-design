import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

export type TSideNavItem = {
  isActive?: boolean
  isExpanded?: boolean
  children?: TSideNavItem[]
  pathname: string
  title: string
  icon?: IconDefinition
  description?: string
}

export type TSearchItem = {
  pathname: string
  title: string
  description?: string
}

export type TPageProps = {
  description?: string
  disableAd?: boolean
  disableToc?: boolean
  location?: string
  title?: string
  toc?: unknown
  backgroundColor?: string
  textColor?: string
  backgroundImage?: string
  imgSrc?: string
}
