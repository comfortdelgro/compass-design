import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

export type TPage = {
  pathname: string
  title: string
  icon?: IconDefinition
  children?: TPage[]
}
