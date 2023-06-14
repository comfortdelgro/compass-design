export interface ViewerImageSize {
  width: number
  height: number
}

export interface ImageDecorator {
  src: string
  alt?: string
  downloadUrl?: string
  defaultSize?: ViewerImageSize
}

export interface ToolbarConfig {
  key: string
  actionType?: number
  render?: React.ReactNode
  onClick?: (activeImage: ImageDecorator) => void
}

export interface ViewerDefaultImg {
  src: string
  width?: number
  height?: number
}

interface ViewerProps {
  visible?: boolean
  onClose?: () => void
  images?: ImageDecorator[]
  activeIndex?: number
  zIndex?: number
  container?: HTMLElement
  drag?: boolean
  attribute?: boolean
  zoomable?: boolean
  rotatable?: boolean
  scalable?: boolean
  onMaskClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  downloadable?: boolean
  loop?: boolean
  noClose?: boolean
  noImgDetails?: boolean
  noNavbar?: boolean
  noToolbar?: boolean
  noFooter?: boolean
  changeable?: boolean
  customToolbar?: (toolbars: ToolbarConfig[]) => ToolbarConfig[]

  // zoom speed
  zoomSpeed?: number

  // default image size
  defaultSize?: ViewerImageSize

  // if load img failed, show default img
  defaultImg?: ViewerDefaultImg

  // disable keyboard support
  disableKeyboardSupport?: boolean

  // no reset zoom after image change
  noResetZoomAfterChange?: boolean

  // no limit image initialization size
  noLimitInitializationSize?: boolean

  // default scale
  defaultScale?: number

  // callback when iamge change
  onChange?: (activeImage: ImageDecorator, index: number) => void

  // disable mouse zoom
  disableMouseZoom?: boolean

  // whether to download in a new window
  downloadInNewWindow?: boolean

  className?: string

  // whether to display the total number and range
  showTotal?: boolean

  // total indicator name.
  totalName?: string

  // max scale
  maxScale?: number

  // min scale
  minScale?: number
}

export default ViewerProps
