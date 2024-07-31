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
  Pick<DrawerMobileProps, 'scaleLayerOffset' | 'scaleLayerClassName'> & {
    enable?: boolean
  }
>

export const useScaleEffect = ({
  enable = false,
  scaleLayerClassName = '',
  scaleLayerOffset = 16,
}: UseScaleEffectOptions = {}) => {
  const scaleElement =
    typeof document !== 'undefined'
      ? document.querySelector<HTMLElement>(`[${DRAWER_SCALE_TARGET}]`) ||
        document.body
      : null

  const getScaleValue = useCallback(
    () =>
      enable && typeof window !== 'undefined'
        ? Math.round(
            ((window.innerWidth - scaleLayerOffset * 2) / window.innerWidth +
              Number.EPSILON) *
              100,
          ) / 100
        : 1,
    [enable, scaleLayerOffset],
  )

  const controlScaleEffect = useCallback(
    (shouldScale = false) => {
      if (!enable || typeof document === 'undefined') {
        return
      }

      if (!scaleElement) {
        return
      }

      scaleElement.classList.add(DRAWER_CLASSES.SCALE_TARGET)

      if (shouldScale) {
        document.documentElement.classList.add(
          DRAWER_CLASSES.SCALE_DOCUMENT,
          scaleLayerClassName,
        )
        updateElementStyles(scaleElement, {
          [DRAWER_CSS_VARIABLES.SCALE]: getScaleValue(),
          [DRAWER_CSS_VARIABLES.SCALE_OFFSET]: `${scaleLayerOffset}px`,
        })
        scaleElement.classList.add(DRAWER_CLASSES.SCALE_DRAWER_OPENED)
        return
      }

      document.documentElement.classList.remove(
        DRAWER_CLASSES.SCALE_DOCUMENT,
        scaleLayerClassName,
      )
      scaleElement.classList.remove(DRAWER_CLASSES.SCALE_DRAWER_OPENED)
    },
    [
      enable,
      scaleLayerClassName,
      scaleLayerOffset,
      scaleElement,
      getScaleValue,
    ],
  )

  useSafeLayoutEffect(() => {
    controlScaleEffect()
  }, [controlScaleEffect])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => controlScaleEffect, []) // clear scale effect styles on unmount (router change, etc...)

  return {scaleElement, getScaleValue, controlScaleEffect}
}
