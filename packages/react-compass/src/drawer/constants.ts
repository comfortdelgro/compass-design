export const DRAWER_SCALE_TARGET = 'data-cdg-drawer-scalable-bg'
export const DRAWER_SCALE_OFFSET = 16 // px

export const DRAWER_CLASSES = {
  ROOT: 'cdg-drawer',
  HEADER: 'cdg-drawer-header',
  FOOTER: 'cdg-drawer-footer',
  CONTENT: 'cdg-drawer-content',

  SCALE_DOCUMENT: 'cdg-webpage-drawer-scale',
  SCALE_TARGET: 'cdg-drawer-bg-scale',
  SCALE_DRAWER_OPENED: 'cdg-drawer-opened-bg-scale',
} as const

export const DRAWER_CSS_VARIABLES = {
  BACKDROP_BG: '--cdg-drawer-backdrop-bg',
  BACKDROP_BLUR: '--cdg-drawer-backdrop-blur',
  BACKDROP_OPACITY: '--cdg-drawer-backdrop-opacity',
  SCALE: '--cdg-drawer-scale',
  SCALE_OFFSET: '--cdg-drawer-scale-offset',
} as const
