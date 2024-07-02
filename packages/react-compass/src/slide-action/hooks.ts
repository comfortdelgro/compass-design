import {useEffect, useMemo, useRef, useState} from 'react'
import {useDrag} from '../utils'
import type {SlideDraggerParams, SlideDraggerProps} from './slide-action.types'

/** This hook works the same way as `useEffect` but it's not trigger on first render */
export const useLazyEffect: typeof useEffect = (effect, deps) => {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) {
      effect()
      return
    }
    mounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export const useSlideActionDragger = ({
  slideRef,
  onDrag,
  onDragEnd,
  disableDrag = false,
}: SlideDraggerProps) => {
  const [draggerWidth, setDraggerWidth] = useState(0)

  const slideDraggerInfo = useMemo<SlideDraggerParams>(() => {
    if (typeof window === 'undefined' || !slideRef.current) {
      return {draggerWidth, maxSlideDistance: 0}
    }

    const computedStyle = window.getComputedStyle(slideRef.current)
    const slideContainerPaddingX =
      parseFloat(computedStyle.paddingLeft) +
      parseFloat(computedStyle.paddingRight)

    return {
      draggerWidth,
      maxSlideDistance:
        slideRef.current.offsetWidth - slideContainerPaddingX - draggerWidth,
    }
  }, [draggerWidth, slideRef])

  const {target: slideDraggerRef, setPosition: setDraggerPosition} =
    useDrag<HTMLButtonElement>({
      direction: 'horizontal',
      limit: {x: {min: 0, max: slideDraggerInfo.maxSlideDistance}},
      onMove: (...params) => onDrag?.(slideDraggerInfo, ...params),
      onEnd: (...params) => onDragEnd?.(slideDraggerInfo, ...params),
      disabled: disableDrag,
    })

  useEffect(() => {
    if (typeof window === 'undefined' || !slideDraggerRef.current) {
      return
    }

    const resizeObserver = new ResizeObserver((entries) => {
      setDraggerWidth((entries[0].target as HTMLButtonElement).offsetWidth)
    })

    resizeObserver.observe(slideDraggerRef.current)
    return () => resizeObserver.disconnect()
  }, [slideDraggerRef])

  return {slideDraggerRef, setDraggerPosition}
}
