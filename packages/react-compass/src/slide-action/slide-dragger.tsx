import {useEffect, useMemo, useRef, useState} from 'react'
import {useDrag} from '../utils/hooks'
import {classNames} from '../utils/string'
import type {SlideDraggerParams, SlideDraggerProps} from './slide-action.types'
import classes from './styles/slide-action.module.css'

export default function SlideDragger({
  slideRef,
  icon,
  onDrag,
  onDragEnd,
  disableDrag = false,
}: SlideDraggerProps) {
  const slideDraggerRef = useRef<HTMLButtonElement>(null)
  const [draggerWidth, setDraggerWidth] = useState(0)

  const slideDraggerInfo = useMemo<SlideDraggerParams>(() => {
    if (typeof window === 'undefined' || !slideRef.current) {
      return {
        draggerWidth,
        maxSlideDistance: 0,
      }
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

  useDrag({
    targetRef: slideDraggerRef,
    direction: 'horizontal',
    limit: {x: {min: 0, max: slideDraggerInfo.maxSlideDistance}},
    onMove: (...params) => {
      onDrag?.(slideDraggerInfo, ...params)
    },
    onEnd: (...params) => {
      onDragEnd?.(slideDraggerInfo, ...params)
    },
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

  return (
    <button
      ref={slideDraggerRef}
      className={classNames(
        classes.slideActionDragger,
        'cdg-slide-action__dragger',
      )}
      style={{pointerEvents: disableDrag ? 'none' : 'auto'}}
    >
      {icon || (
        <svg
          className={classNames(
            classes.slideActionDefaultIcon,
            'cdg-slide-action__default-icon',
          )}
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
