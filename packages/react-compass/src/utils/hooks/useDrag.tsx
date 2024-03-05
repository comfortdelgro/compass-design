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

type DragPosition = {x: number; y: number}

type SetPosition = (
  position: DragPosition,
  options?: {transition?: string; skipCalulateStep?: boolean},
) => void

export type DraggableOptions<T extends HTMLElement = HTMLElement> = {
  /**
   * Ref to drag element
   * This hook will tracking the provided ref element
   * instead of its own target ref (and also won't return it anymore).
   * @default undefined
   */
  targetRef?: RefObject<T>
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
  /** Set css transform
   * @default true
   */
  setCSS?: boolean
  /** Limit dragging distance */
  limit?: {
    x?: {max?: number; min?: number}
    y?: {max?: number; min?: number}
  }
  /**
   * Position step size
   * @default 0
   */
  stepSize?:
    | number
    | {
        x: number
        y: number
      }

  onStart?: (
    target: RefObject<T>,
    position: DragPosition,
    setPosition: SetPosition,
  ) => void

  /**
   * Callback function that triggers when users dragging the HTML element.
   *
   * Recommend passing a memorized function or a function from the parent of the component that contains draggable element.
   */
  onMove?: (target: RefObject<T>, position: DragPosition) => void

  onEnd?: (
    target: RefObject<T>,
    position: DragPosition,
    setPosition: SetPosition,
  ) => void

  /**
   * If `true`, the target element won't draggable anymore.
   * ___
   * Equivalent with `touch === false && mouse === false`
   * ___
   * @default false
   */
  disabled?: boolean
}

const useDrag = <T extends HTMLElement = HTMLElement>(
  options?: DraggableOptions<T>,
): {
  /**
   * Target element ref.
   * @returns `undefined` if `options.targetRef` is provided
   */
  target: RefObject<T> | undefined
  /** Position state {x, y} */
  position: DragPosition
  /** Function to set a new position value. */
  setPosition: SetPosition
} => {
  const opts = useMemo(() => {
    const processingOptions: DraggableOptions<T> = {
      // the default options
      prevent: true,
      touch: true,
      mouse: true,
      direction: 'both',
      limit: {
        x: {max: Infinity, min: -Infinity},
        y: {max: Infinity, min: -Infinity},
      },
      stepSize: 0,
      setCSS: true,
      disabled: false,

      // customize/override the default options
      ...options,
    }

    if (processingOptions.disabled) {
      processingOptions.mouse = false
      processingOptions.touch = false
    }

    return processingOptions
  }, [options])

  const target = opts.targetRef || useRef<T>(null)
  const startXY = useRef<DragPosition>({x: 0, y: 0})
  const prevPosition = useRef<DragPosition>({x: 0, y: 0})
  const dragging = useRef<boolean>(false)
  const [position, setPosition] = useState<DragPosition>({x: 0, y: 0})

  const setTransform = useCallback<SetPosition>(
    (newPosition, options) => {
      if (!target.current) {
        return
      }

      if (!options?.skipCalulateStep && opts.stepSize) {
        newPosition = {
          x: getNearestScale(
            position.x,
            typeof opts.stepSize === 'object' ? opts.stepSize.x : opts.stepSize,
          ),
          y: getNearestScale(
            position.y,
            typeof opts.stepSize === 'object' ? opts.stepSize.y : opts.stepSize,
          ),
        }
      }

      prevPosition.current = newPosition
      setPosition(newPosition)

      if (!opts.setCSS) {
        return
      }

      if (options?.transition) {
        target.current.style.transition = options.transition
      } else {
        target.current.style.transition = ''
      }

      target.current.style.transform = `translate3d(${newPosition.x}px, ${newPosition.y}px, 0)`
    },
    [opts.setCSS, opts.stepSize],
  )

  const handleStart = useCallback(
    (e: TouchEvent | MouseEvent) => {
      const {x: prevX, y: prevY} = prevPosition.current
      let x = prevX,
        y = prevY

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

          startXY.current = {x, y}
          opts.onStart?.(target, {x, y}, setTransform)
        }

        return
      }

      if (opts.mouse && e instanceof window.MouseEvent && e.button === 0) {
        dragging.current = true
        x = e.clientX - prevX
        y = e.clientY - prevY

        startXY.current = {x, y}
        opts.onStart?.(target, {x, y}, setTransform)
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

      const {x: startX, y: startY} = startXY.current
      const {x: prevX, y: prevY} = prevPosition.current
      let x = prevX,
        y = prevY

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
              opts.limit?.x?.min ?? -Infinity,
              opts.limit?.x?.max ?? Infinity,
            ])
      y =
        opts.direction === 'horizontal'
          ? 0
          : clamp(y, [
              opts.limit?.y?.min ?? -Infinity,
              opts.limit?.y?.max ?? Infinity,
            ])

      if (x !== prevX || y !== prevY) {
        opts.onMove?.(target, {x, y})
      }

      setTransform({x, y}, {skipCalulateStep: true})
    },
    [dragging, opts, setTransform],
  )

  const handleEnd = useCallback(
    (e: TouchEvent | MouseEvent) => {
      // only trigger this function if the target element is being dragged.
      if (!dragging.current) {
        return
      }

      if (
        // Firefox Desktop will throw errors if we check like this: e instanceof window.TouchEvent
        (opts.touch && typeof (e as TouchEvent).touches !== 'undefined') ||
        (opts.mouse && e instanceof window.MouseEvent && e.button === 0)
      ) {
        dragging.current = false
        opts.onEnd?.(target, prevPosition.current, setTransform)
      }
    },
    [dragging, opts, setTransform],
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
    target: opts.targetRef ? undefined : target,
    position,
    setPosition: setTransform,
  }
}

export default useDrag
