import {useEffect, useMemo, type RefObject} from 'react'
import {DRAWER_CSS_VARIABLES} from '../constants'
import type {DrawerProps, DrawerRef} from '../types'
import {updateElementStyles} from '../utils'

export const useBackDropStyling = (
  drawerRef: RefObject<DrawerRef>,
  backdropProps: DrawerProps['backdropProps'],
) => {
  const {backdropStyles, customStyles} = useMemo(() => {
    const blurVal = backdropProps?.blur
    const customStyles = {
      [DRAWER_CSS_VARIABLES.BACKDROP_OPACITY]: backdropProps?.opacity,
      [DRAWER_CSS_VARIABLES.BACKDROP_BLUR]:
        typeof blurVal === 'number' ? `${blurVal}px` : blurVal,
      [DRAWER_CSS_VARIABLES.BACKDROP_BG]: backdropProps?.background,
    }

    if (typeof window === 'undefined' || !drawerRef.current) {
      return {backdropStyles: customStyles, customStyles}
    }

    const computedStyle = window.getComputedStyle(drawerRef.current)
    const mergedStyles = Object.assign(
      {
        [DRAWER_CSS_VARIABLES.BACKDROP_OPACITY]: computedStyle.getPropertyValue(
          DRAWER_CSS_VARIABLES.BACKDROP_OPACITY,
        ),
        [DRAWER_CSS_VARIABLES.BACKDROP_BLUR]: computedStyle.getPropertyValue(
          DRAWER_CSS_VARIABLES.BACKDROP_BLUR,
        ),
        [DRAWER_CSS_VARIABLES.BACKDROP_BG]: computedStyle.getPropertyValue(
          DRAWER_CSS_VARIABLES.BACKDROP_BG,
        ),
      },
      customStyles,
    )

    return {
      backdropStyles: mergedStyles,
      customStyles,
    }
  }, [
    backdropProps?.background,
    backdropProps?.blur,
    backdropProps?.opacity,
    drawerRef,
  ])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    updateElementStyles(drawerRef.current, customStyles, {
      ignoreNilValue: true,
    })
  }, [customStyles, drawerRef])

  return {backdropStyles}
}
