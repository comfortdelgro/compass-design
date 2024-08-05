import {useMemo, type RefObject} from 'react'
import type {DrawerMobileProps, DrawerRef} from '../types'

const DEFAULT_SNAP_POINTS = [100] as const // fullscreen
const MAX_SNAP_POINTS = 4

/**
 *
 * Non-finite (eg: `1 / 0`, `Infinity`, `NaN`, `'10'`) and out-of-range [0-100] numbers will be filtered out.
 *
 * @returns an accending sorted array of snap points and capped at 4 elements.
 */
export const useSnapPoints = (
  drawerRef: RefObject<DrawerRef>,
  snapPoints: DrawerMobileProps['snapPoints'],
  availableHeight: number,
) => {
  const processedSnapPoints = useMemo(() => {
    if (!snapPoints?.length || availableHeight <= 0) {
      return DEFAULT_SNAP_POINTS
    }

    const copiedSnapPoints = snapPoints.filter(
      (point) => Number.isFinite(point) && point > 0 && point <= 100,
    )
    return copiedSnapPoints.sort((a, b) => a - b).slice(0, MAX_SNAP_POINTS) // toSorted is not widely supported yet
  }, [availableHeight, snapPoints])

  return processedSnapPoints
}
