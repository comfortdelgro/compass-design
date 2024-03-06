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

export type NavigationButtonType = 'icon' | 'text'

export type AnimationType = 'fade' | 'slide'

export interface CarouselSliderButton {
  type: ButtonType
  label: string
  callback?: () => void
}

export interface CarouselSliderItem {
  image: string
  title: string
  description: string
  buttons?: CarouselSliderButton[]
  alignment?: NinePartAlignment
  mask?: number
}

export interface SocicalIcon {
  icon: React.ReactNode
  url: string
}

export interface CarouselOptions {
  effect?: AnimationType
  autoSwitch?: boolean
  useNavigation?: boolean
  useDotIndicator?: boolean
  navigationButtonType?: NavigationButtonType
  css?: unknown
  onSwitchSlide?: (index: number) => void
}
