'use client'

import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const clamp = (value: number, [min, max]: [number, number]): number => {
  return Math.min(Math.max(value, min), max)
}

const getNearestScale = (value: number, stepSize: number) => {
  const prevStep = Math.floor(value / stepSize) * stepSize
  const nextStep = Math.ceil(value / stepSize) * stepSize
  return value - prevStep > nextStep - value ? nextStep : prevStep
}

type SetPosition = (position: [number, number], transition?: string) => void

export type DraggableOptions = {
  /**
   * use Event.preventDefault with the touchmove events
   * @default true
   */
  prevent?: boolean
  /**
   * Listen touch events
   * @default true
   */
  touch?: boolean
  /**
   * Listen mouse events
   * @default true
   */
  mouse?: boolean
  /**
   * Dragging direction
   * @default 'both'
   */
  direction?: 'vertical' | 'horizontal' | 'both'
  /** Set css transform */
  setCSS?: boolean
  /** Max dragging distance */
  maxDistance?: {
    x?: {max?: number; min?: number}
    y?: {max?: number; min?: number}
  }
  /** Position step size */
  stepSize?:
    | number
    | {
        x: number
        y: number
      }

  onStart?: (
    target: RefObject<HTMLElement>,
    position: [number, number],
    setPosition: SetPosition,
  ) => void

  onMove?: (
    target: RefObject<HTMLElement>,
    position: [number, number],
    setPosition: SetPosition,
  ) => void

  onEnd?: (
    target: RefObject<HTMLElement>,
    position: [number, number],
    setPosition: SetPosition,
  ) => void
}

const defaultOptions: DraggableOptions = {
  prevent: true,
  touch: true,
  mouse: true,
  direction: 'both',
  maxDistance: {
    x: {max: Infinity, min: -Infinity},
    y: {max: Infinity, min: -Infinity},
  },
  stepSize: 0,
  setCSS: true,
}

const useDrag = <T extends HTMLElement>(
  options?: DraggableOptions,
): {
  /** Target element ref  */
  target: RefObject<T>
  /** Position state {x, y} */
  position: {x: number; y: number}
  /** Function to set a new position value. */
  setPosition: SetPosition
} => {
  const opts = useMemo(
    () => ({
      ...defaultOptions,
      ...options,
      // touch: isTouchDevice() ? options?.touch : false,
    }),
    [options],
  )

  const target = useRef<T>(null)
  const startXY = useRef<[number, number]>([0, 0])
  const prevPosition = useRef<[number, number]>([0, 0])
  const dragging = useRef<boolean>(false)
  const [position, setPosition] = useState<[number, number]>([0, 0])

  const setTransform = useCallback<SetPosition>(
    (newPosition, transition) => {
      if (opts.stepSize) {
        newPosition = [
          getNearestScale(
            position[0],
            typeof opts.stepSize === 'object' ? opts.stepSize.x : opts.stepSize,
          ),
          getNearestScale(
            position[1],
            typeof opts.stepSize === 'object' ? opts.stepSize.y : opts.stepSize,
          ),
        ]
      }

      prevPosition.current = newPosition
      setPosition(newPosition)

      if (!target.current || !opts.setCSS) {
        return
      }

      if (transition) {
        target.current.style.transition = transition
      } else {
        target.current.style.transition = ''
      }

      target.current.style.transform = `translate3d(${newPosition[0]}px, ${newPosition[1]}px, 0)`
    },
    [opts.setCSS, opts.stepSize],
  )

  const handleStart = useCallback(
    (e: TouchEvent | MouseEvent) => {
      const [prevX, prevY] = prevPosition.current
      let [x, y] = prevPosition.current
      if (
        opts.touch &&
        (e as TouchEvent).touches?.[0]?.clientX
        // && e instanceof window.TouchEvent
      ) {
        const touchList = (e as TouchEvent).touches[0]
        if (touchList) {
          dragging.current = true
          x = touchList.clientX - prevX
          y = touchList.clientY - prevY

          startXY.current = [x, y]
          opts.onStart?.(target, [x, y], setTransform)
        }

        return
      }

      if (opts.mouse && e instanceof window.MouseEvent && e.button === 0) {
        dragging.current = true
        x = e.clientX - prevX
        y = e.clientY - prevY

        startXY.current = [x, y]
        opts.onStart?.(target, [x, y], setTransform)
      }
    },
    [opts, setTransform],
  )

  const handleMove = useCallback(
    (e: TouchEvent | MouseEvent) => {
      if (!dragging.current || (!opts.mouse && !opts.touch)) {
        return
      }

      if (opts.prevent && e.cancelable) {
        e.preventDefault()
      }

      const [startX, startY] = startXY.current
      let [x, y] = prevPosition.current
      if (
        opts.touch &&
        (e as TouchEvent).touches?.[0]?.clientX
        // && e instanceof window.TouchEvent
      ) {
        const touchList = (e as TouchEvent).touches[0]
        if (touchList) {
          x = touchList.clientX - startX
          y = touchList.clientY - startY
        }
      } else if (
        opts.mouse &&
        e instanceof window.MouseEvent &&
        e.button === 0
      ) {
        x = e.clientX - startX
        y = e.clientY - startY
      }

      if (opts.stepSize) {
        x = getNearestScale(
          x,
          typeof opts.stepSize === 'object' ? opts.stepSize.x : opts.stepSize,
        )
        y = getNearestScale(
          y,
          typeof opts.stepSize === 'object' ? opts.stepSize.y : opts.stepSize,
        )
      }

      x =
        opts.direction === 'vertical'
          ? 0
          : clamp(x, [
              opts.maxDistance?.x?.min ?? -Infinity,
              opts.maxDistance?.x?.max ?? Infinity,
            ])
      y =
        opts.direction === 'horizontal'
          ? 0
          : clamp(y, [
              opts.maxDistance?.y?.min ?? -Infinity,
              opts.maxDistance?.y?.max ?? Infinity,
            ])

      opts.onMove?.(target, [x, y], setTransform)
      setTransform([x, y])
    },
    [dragging, opts, setTransform],
  )

  const handleEnd = useCallback(
    (e: TouchEvent | MouseEvent) => {
      if (
        // Firefox Desktop will throw errors if we check like this: e instanceof window.TouchEvent
        (opts.touch && typeof (e as TouchEvent).touches !== 'undefined') ||
        (opts.mouse && e instanceof window.MouseEvent && e.button === 0)
      ) {
        dragging.current = false
        opts.onEnd?.(target, prevPosition.current, setTransform)
      }
    },
    [opts, setTransform],
  )

  useEffect(() => {
    const node = target.current
    if (
      typeof window === 'undefined' ||
      typeof document === 'undefined' ||
      !node
    ) {
      return
    }

    if (opts.touch) {
      node.addEventListener('touchstart', handleStart)
      node.addEventListener('touchmove', handleMove, {
        passive: !opts.prevent,
      })
      document.addEventListener('touchcancel', handleEnd)
      document.addEventListener('touchend', handleEnd)
    }

    if (opts.mouse) {
      node.addEventListener('mousedown', handleStart)
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('mouseup', handleEnd)
    }

    return () => {
      if (opts.touch) {
        node.removeEventListener('touchstart', handleStart)
        node.removeEventListener('touchmove', handleMove)
        document.removeEventListener('touchcancel', handleEnd)
        document.removeEventListener('touchend', handleEnd)
      }

      if (opts.mouse) {
        node.removeEventListener('mousedown', handleStart)
        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('mouseup', handleEnd)
      }
    }
  }, [target, opts, handleStart, handleMove, handleEnd])

  return {
    target,
    position: {x: position[0], y: position[1]},
    setPosition: setTransform,
  }
}

export default useDrag
