import {useCallback, useEffect} from 'react'
import {
  DRAWER_CLASSES,
  DRAWER_CSS_VARIABLES,
  DRAWER_SCALE_TARGET,
} from '../constants'
import {DrawerMobileProps} from '../types'
import {updateElementStyles} from '../utils'

type UseScaleEffectOptions = Readonly<
  Pick<
    DrawerMobileProps,
    'enableScaleBg' | 'scaleBgOffset' | 'scaleBgClassName'
  > & {
    drawerOpened?: boolean
  }
>

export const useScaleEffect = ({
  drawerOpened,
  enableScaleBg,
  scaleBgClassName = '',
  scaleBgOffset = 16,
}: UseScaleEffectOptions = {}) => {
  const scaleBackground = useCallback(() => {
    if (!enableScaleBg || typeof document === 'undefined') {
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
  }, [enableScaleBg, drawerOpened, scaleBgClassName, scaleBgOffset])

  useEffect(() => {
    scaleBackground()
  }, [scaleBackground])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => scaleBackground, []) // clear scale effect styles on unmount (router change, etc...)
}
