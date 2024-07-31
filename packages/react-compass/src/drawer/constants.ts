export const DRAWER_SCALE_TARGET = 'data-cdg-drawer-scalable-bg'
export const DRAWER_SCALE_OFFSET = 16 // px

export const DRAWER_CLASSES = {
  ROOT: 'cdg-drawer',
  HEADER: 'cdg-drawer-header',
  FOOTER: 'cdg-drawer-footer',
  CONTENT: 'cdg-drawer-content',
  CONTENT_SCROLLABLE: 'cdg-drawer-content-scrollable',

  SCALE_DOCUMENT: 'cdg-webpage-scaled-by-drawer',
  SCALE_TARGET: 'cdg-drawer-scale-layer',
  SCALE_DRAWER_OPENED: 'cdg-drawer-scale-layer-scaled',
} as const

export const DRAWER_CSS_VARIABLES = {
  BACKDROP_BG: '--cdg-drawer-backdrop-bg',
  BACKDROP_BLUR: '--cdg-drawer-backdrop-blur',
  BACKDROP_OPACITY: '--cdg-drawer-backdrop-opacity',
  BACKDROP_TRANSITION: '--cdg-drawer-backdrop-transition',
  SCALE: '--cdg-drawer-scale',
  SCALE_OFFSET: '--cdg-drawer-scale-offset',
} as const
