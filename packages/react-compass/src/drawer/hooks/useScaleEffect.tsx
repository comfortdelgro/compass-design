import {useCallback, useEffect} from 'react'
import {useSafeLayoutEffect} from '../../utils'
import {
  DRAWER_CLASSES,
  DRAWER_CSS_VARIABLES,
  DRAWER_SCALE_TARGET,
} from '../constants'
import type {DrawerMobileProps} from '../types'
import {updateElementStyles} from '../utils'

type UseScaleEffectOptions = Readonly<
  Pick<DrawerMobileProps, 'scaleBgOffset' | 'scaleBgClassName'> & {
    enable?: boolean
    drawerOpened?: boolean
  }
>

export const useScaleEffect = ({
  drawerOpened = false,
  enable = false,
  scaleBgClassName = '',
  scaleBgOffset = 16,
}: UseScaleEffectOptions = {}) => {
  const scaleBackground = useCallback(() => {
    if (!enable || typeof document === 'undefined') {
      return
    }

    const scaleElement =
      document.querySelector<HTMLElement>(`[${DRAWER_SCALE_TARGET}]`) ||
      document.body
    if (!scaleElement) {
      return
    }

    scaleElement.classList.add(DRAWER_CLASSES.SCALE_TARGET)

    if (drawerOpened) {
      document.documentElement.classList.add(
        DRAWER_CLASSES.SCALE_DOCUMENT,
        scaleBgClassName,
      )
      updateElementStyles(scaleElement, {
        [DRAWER_CSS_VARIABLES.SCALE]: `${(
          (window.innerWidth - scaleBgOffset * 2) /
          window.innerWidth
        ).toFixed(2)}`,
        [DRAWER_CSS_VARIABLES.SCALE_OFFSET]: `${scaleBgOffset}px`,
      })
      scaleElement.classList.add(DRAWER_CLASSES.SCALE_DRAWER_OPENED)
      return
    }

    document.documentElement.classList.remove(
      DRAWER_CLASSES.SCALE_DOCUMENT,
      scaleBgClassName,
    )
    scaleElement.classList.remove(DRAWER_CLASSES.SCALE_DRAWER_OPENED)
  }, [enable, drawerOpened, scaleBgClassName, scaleBgOffset])

  useSafeLayoutEffect(() => {
    scaleBackground()
  }, [scaleBackground])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => scaleBackground, []) // clear scale effect styles on unmount (router change, etc...)
}
