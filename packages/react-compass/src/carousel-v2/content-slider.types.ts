import {IconDefinition} from '@fortawesome/free-regular-svg-icons'

export type NinePartAlignment =
  | 'start-start'
  | 'center-start'
  | 'end-start'
  | 'start-center'
  | 'center-center'
  | 'end-center'
  | 'start-end'
  | 'center-end'
  | 'end-end'

export type ButtonType = 'primary' | 'secondary'

export interface ContentSliderButton {
  type: ButtonType
  label: string
}

export interface ContentSliderItem {
  image: string
  title: string
  description: string
  buttons?: ContentSliderButton[]
  alignment?: NinePartAlignment
  mask?: number
}

export interface SocicalIcon {
  icon: IconDefinition
  url: string
}
