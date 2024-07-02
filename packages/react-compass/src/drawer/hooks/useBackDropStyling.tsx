import {useEffect, type RefObject} from 'react'
import {DRAWER_CSS_VARIABLES} from '../constants'
import type {DrawerProps, DrawerRef} from '../types'
import {updateElementStyles} from '../utils'

export const useBackDropStyling = (
  drawerRef: RefObject<DrawerRef>,
  backdropProps: DrawerProps['backdropProps'],
) => {
  const DrawerElement = drawerRef.current

  useEffect(() => {
    if (typeof document === 'undefined' || !DrawerElement) {
      return
    }

    const blurVal = backdropProps?.blur
    updateElementStyles(DrawerElement, {
      [DRAWER_CSS_VARIABLES.BACKDROP_OPACITY]: backdropProps?.opacity,
      [DRAWER_CSS_VARIABLES.BACKDROP_BLUR]:
        typeof blurVal === 'number' ? `${blurVal}px` : blurVal,
      [DRAWER_CSS_VARIABLES.BACKDROP_BG]: backdropProps?.background,
    })
  }, [
    DrawerElement,
    backdropProps?.background,
    backdropProps?.blur,
    backdropProps?.opacity,
  ])
}
