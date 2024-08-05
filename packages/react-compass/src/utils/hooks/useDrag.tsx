import {useCallback, useEffect, useMemo, useRef, type RefObject} from 'react'
import {useSafeLayoutEffect} from '../descendant'
import {useDebouncedState} from './useDebouncedState'

const clamp = (value: number, [min, max]: [number, number]): number => {
  return Math.min(Math.max(value, min), max)
}

const getDecelerationFactor = (originVelocity: number): number =>
  8 * (Math.log(Math.abs(originVelocity) + 1) - 2)

/**
 * Decelerate after the origin velocity is over the limit.
 * @example getDeceleratedVelocity(10, 100) // 11
 *
 */
const getDeceleratedVelocity = (origin: number, limit: number): number => {
  const decelerationFactor = getDecelerationFactor(origin - limit)

  if (limit > 0) {
    return Math.min(limit + Math.max(decelerationFactor, 0), origin)
  }

  return Math.max(limit + Math.min(decelerationFactor * -1, 0), origin)
}

const getNearestScale = (value: number, stepSize: number) => {
  if (stepSize === 0 || stepSize === 1) {
    return value
  }

  const prevStep = Math.floor(value / stepSize) * stepSize
  const nextStep = Math.ceil(value / stepSize) * stepSize
  return value - prevStep > nextStep - value ? nextStep : prevStep
}

type DragPosition = {x: number; y: number}

type SetPosition = (
  position: DragPosition,
  options?: {
    /**
     * CSS transition for the position change.
     *
     * Note that this hook will transform the target element by using CSS [translate](https://developer.mozilla.org/docs/Web/CSS/translate) if the browser supports it, otherwise `transform`.
     * ___
     * If `true`, the transition will be
     * `{property} 500ms cubic-bezier(0.32, 0.72, 0, 1)` - `transition-property` is [translate](https://developer.mozilla.org/docs/Web/CSS/translate) if the browser supports it, otherwise `transform`.
     * @default undefined // no transition
     */
    transition?: string | true
    /**
     * If `stepSize` > 0 and you wanna manually update the position, consider set this option to `true` to skip the default calculation.
     * @default false
     */
    skipCalulateStep?: boolean
    /**
     * By default, the hook will transform the target element for you.
     *
     * Enable this flag to allow update the returned `position` state and manually handle the transform animation,
     * your component will rerender on every position value change.
     *
     * @default false
     */
    shouldUpdatePositionState?: boolean
  },
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
   * Listen touch events
   * ___
   * ***Note***: This hook will treat pointer events caused by a pen or stylus device (`pointerType === 'pen'`) same as touch events.
   *
   * @default true
   */
  touch?: boolean
  /**
   * Listen mouse's main button events (usually left-click)
   * @default true
   */
  mouse?: boolean
  /**
   * Dragging direction
   * @default 'both'
   */
  direction?: 'vertical' | 'horizontal' | 'both'
  /** Limit dragging distance */
  limit?: {
    x?: {max?: number; min?: number}
    y?: {max?: number; min?: number}
  }
  /**
   * Allow dragging over the limit, and enable deceleration effect.
   *
   * After releasing (`pointercancel` or `pointerup` event),
   * the target element will move back to the nearest limit position.
   * ___
   * Only available when `limit` is provided.
   * @default false
   */
  decelerationEffect?: boolean
  /**
   * Set to `true` to allow update position state onMove and manually handle styling such as CSS transform.
   * @default false
   */
  manualStylingOnMove?: boolean
  /**
   * Enable debouncing for the `setPosition` setter in millisecond (ms). Used for manually handling the moving transform animation (`manualStylingOnMove = true`)
   * by using returned position state instead of the `onMove` event.
   *
   * It doesn't affect the default `onMove` transform animation (`manualStylingOnMove = false`).
   * @default 0
   */
  returnedPositionDebounceTime?: number
  /**
   * Position step size
   * @default 0
   */
  stepSize?: number | DragPosition

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
   * By default, the hook will add `will-change: transform` and `touch-action: none` to the target element.
   * @default true
   */
  addBrowserHintStyles?: boolean
  /** @default false */
  ignorePointerCancel?: boolean
  /**
   * If `true`, the target element won't draggable anymore.
   * ___
   * Equivalent to `touch === false && mouse === false`
   * ___
   * @default false
   */
  disabled?: boolean
}

const getImposedLimitPosition = (
  {x, y}: DragPosition,
  direction: DraggableOptions['direction'] = 'both',
  limit?: DraggableOptions['limit'],
): {limittedPosition: DragPosition; isLimitExceeded: boolean} => {
  const limittedPosition: DragPosition = {
    x:
      direction === 'vertical'
        ? 0
        : clamp(x, [
            limit?.x?.min ?? Number.NEGATIVE_INFINITY,
            limit?.x?.max ?? Number.POSITIVE_INFINITY,
          ]),
    y:
      direction === 'horizontal'
        ? 0
        : clamp(y, [
            limit?.y?.min ?? Number.NEGATIVE_INFINITY,
            limit?.y?.max ?? Number.POSITIVE_INFINITY,
          ]),
  }

  return {
    limittedPosition,
    isLimitExceeded: limittedPosition.x !== x || limittedPosition.y !== y,
  }
}

let initTransition: string | null = null

const TRANSFORM_DURATION = 500 // ms
const TRANSFORM_TIMING_FN = 'cubic-bezier(0.32, 0.72, 0, 1)'

export const useDrag = <T extends HTMLElement = HTMLElement>(
  options?: DraggableOptions<T>,
): {
  /**
   * Target element ref.
   * @returns a RefObject of `null` if `options.targetRef` is provided or the target element is not found.
   */
  target: RefObject<T>
  /** Position state {x, y} */
  position: DragPosition
  /** Function to set a new position value. */
  setPosition: SetPosition
} => {
  const opts = useMemo(() => {
    const processingOptions: DraggableOptions<T> = {
      // the default options
      touch: true,
      mouse: true,
      direction: 'both',
      stepSize: 0,
      decelerationEffect: false,
      manualStylingOnMove: false,
      returnedPositionDebounceTime: 0,
      addBrowserHintStyles: true,
      ignorePointerCancel: false,
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

  const targetRef = useRef<T>(null)
  const target = opts.targetRef || targetRef
  const startXY = useRef<DragPosition>({x: 0, y: 0})
  const prevPosition = useRef<DragPosition>({x: 0, y: 0})
  const dragging = useRef(false)
  const [position, setPosition] = useDebouncedState<DragPosition>(
    {x: 0, y: 0},
    opts.returnedPositionDebounceTime ?? 0,
  )
  const isSupportTranslate =
    typeof window !== 'undefined' ? CSS.supports('translate', '0') : false

  const defaultTransition = `${
    isSupportTranslate ? 'translate' : 'transform'
  } ${TRANSFORM_DURATION}ms ${TRANSFORM_TIMING_FN}`

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
      if (options?.shouldUpdatePositionState) {
        if (position.x !== newPosition.x || position.y !== newPosition.y) {
          setPosition(newPosition)
        }

        return
      }

      const targetStyle = target.current.style
      if (!options?.transition) {
        targetStyle.removeProperty('transition')
      } else {
        targetStyle.setProperty(
          'transition',
          options.transition === true ? defaultTransition : options.transition,
        )
      }

      if (isSupportTranslate) {
        targetStyle.setProperty(
          'translate',
          `${newPosition.x}px ${newPosition.y}px`,
        )
      } else {
        targetStyle.setProperty(
          'transform',
          `translate3d(${newPosition.x}px, ${newPosition.y}px, 0)`,
        )
      }
    },
    [
      defaultTransition,
      isSupportTranslate,
      opts.stepSize,
      position.x,
      position.y,
      setPosition,
      target,
    ],
  )

  const skipPointerEvent = useCallback<(e: PointerEvent) => boolean>(
    (event) => {
      if (opts.disabled) {
        return true
      }

      switch (event.pointerType) {
        case 'mouse': {
          if (!opts.mouse) {
            return true
          }

          // onpointermove event - the event.button will have value -1 (unchanged) https://w3c.github.io/pointerevents/#the-button-property
          if (event.type === 'pointermove') {
            return event.button !== -1
          }

          return event.button !== 0 // only handle main button event (usually left-click)
        }

        case 'touch':
        case 'pen':
          return !opts.touch

        // skip undetected pointer type
        default:
          return true
      }
    },

    [opts.disabled, opts.mouse, opts.touch],
  )

  const handlePointerStart = useCallback(
    (e: PointerEvent) => {
      if (skipPointerEvent(e)) {
        return
      }

      const currentTarget = e.currentTarget as HTMLElement
      if (currentTarget) {
        // Ensure we maintain correct pointer capture even when going outside of the target element
        currentTarget.setPointerCapture(e.pointerId)
      }

      target.current?.style?.removeProperty('transition')
      const {x: prevX, y: prevY} = prevPosition.current
      dragging.current = true

      const startPosition: DragPosition = {
        x: e.clientX - prevX,
        y: e.clientY - prevY,
      }
      startXY.current = startPosition
      opts.onStart?.(target, startPosition, setTransform)
    },
    [opts, setTransform, skipPointerEvent, target],
  )

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging.current) {
        return
      }

      if (skipPointerEvent(e)) {
        return
      }

      const {x: startX, y: startY} = startXY.current
      const {x: prevX, y: prevY} = prevPosition.current
      let x = opts.direction === 'vertical' ? 0 : e.clientX - startX,
        y = opts.direction === 'horizontal' ? 0 : e.clientY - startY

      if (x === prevX && y === prevY) {
        return
      }

      if (opts.decelerationEffect) {
        const limitMinX = opts.limit?.x?.min
        const limitMaxX = opts.limit?.x?.max
        const limitMinY = opts.limit?.y?.min
        const limitMaxY = opts.limit?.y?.max

        if (limitMinY !== undefined && y < limitMinY) {
          y = getDeceleratedVelocity(y, limitMinY)
        }

        if (limitMaxY !== undefined && y > limitMaxY) {
          y = getDeceleratedVelocity(y, limitMaxY)
        }

        if (limitMinX !== undefined && x < limitMinX) {
          x = getDeceleratedVelocity(x, limitMinX)
        }

        if (limitMaxX !== undefined && x > limitMaxX) {
          x = getDeceleratedVelocity(x, limitMaxX)
        }
      } else {
        const {limittedPosition} = getImposedLimitPosition(
          {x, y},
          opts.direction,
          opts.limit,
        )

        x = limittedPosition.x
        y = limittedPosition.y
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

      const newPosition: DragPosition = {x, y}
      opts.onMove?.(target, newPosition)
      setTransform(newPosition, {
        skipCalulateStep: true,
        shouldUpdatePositionState: opts.manualStylingOnMove,
      })
    },
    [opts, setTransform, skipPointerEvent, target],
  )

  const handlePointerEnd = useCallback(
    (e: PointerEvent) => {
      // only trigger this function if the target element is being dragged.
      if (!dragging.current) {
        return
      }

      if (skipPointerEvent(e)) {
        return
      }

      if (opts.decelerationEffect && opts.limit) {
        // When decelerationEffect enabled, dragging over the limit is allowed.
        const {limittedPosition, isLimitExceeded} = getImposedLimitPosition(
          prevPosition.current,
          opts.direction,
          opts.limit,
        )

        if (isLimitExceeded) {
          // After releasing the pointer, the target element will move back to the nearest limit position.
          setTransform(limittedPosition, {
            skipCalulateStep: true,
            transition: true,
          })
        }
      } else {
        target.current?.style?.setProperty('transition', initTransition)
      }

      dragging.current = false
      opts.onEnd?.(target, prevPosition.current, setTransform)
    },
    [opts, setTransform, skipPointerEvent, target],
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const node = target.current
    if (!node) {
      return
    }

    node.addEventListener('pointerdown', handlePointerStart)
    node.addEventListener('pointermove', handlePointerMove)
    node.addEventListener('pointerup', handlePointerEnd)
    opts.ignorePointerCancel ||
      node.addEventListener('pointercancel', handlePointerEnd)

    return () => {
      node.removeEventListener('pointerdown', handlePointerStart)
      node.removeEventListener('pointermove', handlePointerMove)
      node.removeEventListener('pointerup', handlePointerEnd)
      opts.ignorePointerCancel ||
        node.removeEventListener('pointercancel', handlePointerEnd)
    }
  }, [
    handlePointerEnd,
    handlePointerMove,
    handlePointerStart,
    opts.ignorePointerCancel,
    target,
  ])

  useSafeLayoutEffect(() => {
    if (typeof window === 'undefined' || !target.current) {
      return
    }

    initTransition = target.current.style.getPropertyValue('transition') || null
    if (!opts.addBrowserHintStyles) {
      return
    }

    target.current.style.setProperty('will-change', 'transform')
    target.current.style.setProperty('touch-action', 'none')
  }, [target, opts.addBrowserHintStyles])

  return {
    target,
    position,
    setPosition: setTransform,
  }
}
