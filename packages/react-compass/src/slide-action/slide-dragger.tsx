import {useMemo, useRef} from 'react'
import useDrag from '../utils/hooks/useDrag'
import {SlideDraggerProps} from './slide-action.types'
import classes from './styles/slide-action.module.css'

/**
 * @note This component is draggable.
 *
 * It will be re-render (to reflect with the user's drag actions) and how frequently is
 * depend on the `stepSize` option of `useDrag` hook.
 */
export default function SlideDragger({
  slideRef,
  icon,
  onDrag,
  onDragEnd,
  disableDrag = false,
}: SlideDraggerProps) {
  const slideDragRef = useRef<HTMLButtonElement>(null)
  const SlideDragElement = slideDragRef.current

  const slideDragInfo = useMemo(() => {
    if (typeof window === 'undefined' || !slideRef.current) {
      return {
        slideDragWidth: 0,
        maxSlideDistance: 0,
      }
    }

    const computedStyle = window.getComputedStyle(slideRef.current)
    const elementPaddingInline =
      parseFloat(computedStyle.paddingLeft) +
      parseFloat(computedStyle.paddingRight)
    const slideDragWidth = SlideDragElement?.offsetWidth ?? 0

    return {
      slideDragWidth,
      maxSlideDistance:
        slideRef.current.offsetWidth - elementPaddingInline - slideDragWidth,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SlideDragElement?.offsetWidth])

  useDrag({
    targetRef: slideDragRef,
    direction: 'horizontal',

    limit: {x: {min: 0, max: slideDragInfo.maxSlideDistance}},
    onMove: (...params) => {
      onDrag?.(slideDragInfo, ...params)
    },
    onEnd: (...params) => {
      onDragEnd?.(slideDragInfo, ...params)
    },
    disabled: disableDrag,
  })

  return (
    <button
      ref={slideDragRef}
      className={`${classes.slideActionDragger} cdg-slide-action__dragger`}
      style={{pointerEvents: disableDrag ? 'none' : 'auto'}}
    >
      {icon || (
        <svg
          className={`${classes.slideActionDefaultIcon} cdg-slide-action__default-icon`}
          width='14'
          height='15'
          viewBox='0 0 14 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Frame 105'>
            <g id='Vector'>
              <path d='M0.886667 14.998C0.66 14.998 0.433333 14.9106 0.26 14.74C-0.0866667 14.3988 -0.0866667 13.8432 0.26 13.502L5.85111 7.99914L0.26 2.49188C-0.0866667 2.15068 -0.0866667 1.59514 0.26 1.25394C0.606667 0.912748 1.17111 0.912748 1.51778 1.25394L7.74 7.37799C8.08667 7.71918 8.08667 8.27472 7.74 8.61592L1.51778 14.74C1.34 14.9106 1.11333 14.998 0.886667 14.998Z' />
              <path d='M0.886667 14.998C0.66 14.998 0.433333 14.9106 0.26 14.74C-0.0866667 14.3988 -0.0866667 13.8432 0.26 13.502L5.85111 7.99914L0.26 2.49188C-0.0866667 2.15068 -0.0866667 1.59514 0.26 1.25394C0.606667 0.912748 1.17111 0.912748 1.51778 1.25394L7.74 7.37799C8.08667 7.71918 8.08667 8.27472 7.74 8.61592L1.51778 14.74C1.34 14.9106 1.11333 14.998 0.886667 14.998Z' />
            </g>
            <g id='Vector_2'>
              <path d='M6.88667 14.998C6.66 14.998 6.43333 14.9106 6.26 14.74C5.91333 14.3988 5.91333 13.8432 6.26 13.502L11.8511 7.99914L6.26 2.49188C5.91333 2.15068 5.91333 1.59514 6.26 1.25394C6.60667 0.912748 7.17111 0.912748 7.51778 1.25394L13.74 7.37799C14.0867 7.71918 14.0867 8.27472 13.74 8.61592L7.51778 14.74C7.34 14.9106 7.11333 14.998 6.88667 14.998Z' />
              <path d='M6.88667 14.998C6.66 14.998 6.43333 14.9106 6.26 14.74C5.91333 14.3988 5.91333 13.8432 6.26 13.502L11.8511 7.99914L6.26 2.49188C5.91333 2.15068 5.91333 1.59514 6.26 1.25394C6.60667 0.912748 7.17111 0.912748 7.51778 1.25394L13.74 7.37799C14.0867 7.71918 14.0867 8.27472 13.74 8.61592L7.51778 14.74C7.34 14.9106 7.11333 14.998 6.88667 14.998Z' />
            </g>
          </g>
        </svg>
      )}
    </button>
  )
}
