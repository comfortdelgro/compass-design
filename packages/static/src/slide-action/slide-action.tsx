/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {CSSProperties, forwardRef, useCallback, useRef, useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {SLIDER_REDUCE_OPACITY} from './slide-action.const'
import {SlideActionProps, SlideDraggerProps} from './slide-action.types'
import SlideDragger from './slide-dragger'
import classes from './styles/slide-action.module.css'

const isValidColorVariable = (color: string): boolean => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false
  }

  return !!window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(color)
    .trim()
}

/**
 * A Slide action or Swiper component that requires user to swipe to confirm an action.
 *
 * Usually use for important actions, such as purchase order, turn off privacy setting, delete something, etc.
 */
const SlideAction = forwardRef<HTMLDivElement, SlideActionProps>(
  (
    {
      css = {},
      className = '',
      icon,
      color = '--cdg-color-dangerShades',
      label = 'Slide',
      labelType = 'default',
      onChange,
      onSwipeEnd,
      slideType = 'slide',
      slideColor = 'mono',
      allowSwipeAfterEnd = false,
      compact = false,
      children,

      ...htmlDivAttributes
    },
    ref,
  ) => {
    const slideRef = useDOMRef<HTMLDivElement>(ref)
    const slideBgRef = useRef<HTMLDivElement>(null)
    const slideLabelRef = useRef<HTMLDivElement>(null)
    const [disableDrag, setDisableDrag] = useState(false)

    const handleUpdateSlideBg = useCallback<
      (opacity: number, width: number) => void
    >(
      (opacity, width) => {
        if (!slideBgRef.current) {
          return
        }

        if (slideType === 'static') {
          slideBgRef.current.style.setProperty('opacity', opacity.toFixed(2))
          return
        }

        slideBgRef.current.style.setProperty('width', `${width}px`)
      },
      [slideType],
    )

    const handleOnDrag = useCallback<NonNullable<SlideDraggerProps['onDrag']>>(
      ({slideDragWidth, maxSlideDistance}, _, {x}) => {
        if (!slideRef.current || !slideLabelRef.current) {
          return
        }
        const calcDistance = (maxSlideDistance - x) / maxSlideDistance
        slideLabelRef.current.style.setProperty(
          'opacity',
          (calcDistance - 0.1).toFixed(2),
        )

        const bgOpacity = x / maxSlideDistance - SLIDER_REDUCE_OPACITY
        handleUpdateSlideBg(
          bgOpacity > SLIDER_REDUCE_OPACITY ? SLIDER_REDUCE_OPACITY : bgOpacity,
          slideDragWidth + x,
        )
      },
      [handleUpdateSlideBg],
    )

    const handleOnDragEnd = useCallback<
      NonNullable<SlideDraggerProps['onDragEnd']>
    >(
      ({maxSlideDistance}, _, {x}, setPosition) => {
        if (!slideRef.current) {
          return
        }

        const resetPosition = () => {
          if (slideLabelRef.current) {
            slideLabelRef.current.style.setProperty('opacity', '1')
          }

          setDisableDrag(false)

          onChange?.(false)
          setPosition({x: 0, y: 0}, {transition: 'transform .2s ease'})

          handleUpdateSlideBg(0, 0)
        }

        if (x === maxSlideDistance) {
          if (!allowSwipeAfterEnd) {
            setDisableDrag?.(true)
          }

          onChange?.(true)
          onSwipeEnd?.(resetPosition)
          return
        }

        resetPosition()
      },
      [onChange, handleUpdateSlideBg, allowSwipeAfterEnd, onSwipeEnd],
    )

    const rootClasses = [
      classes.slideAction,
      compact && classes.compact,
      className,
      'cdg-slide-action',
    ]
      .filter(Boolean)
      .join(' ')

    const bgClasses = [
      classes.slideActionBackground,
      slideColor && classes[slideColor],
      slideType && classes[slideType],
      'cdg-slide-action__bg',
    ]
      .filter(Boolean)
      .join(' ')

    const labelClasses = [
      classes.slideActionLabel,
      labelType && classes[labelType],
      'cdg-slide-action__label',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={slideRef}>
        <div
          ref={slideRef}
          className={rootClasses}
          // data-color={color} // attr(data-color) is not widely supported yet, using inline style for now
          style={
            {
              '--slide-action-theme': isValidColorVariable(color)
                ? `var(${color})`
                : color,
            } as CSSProperties
          }
          {...htmlDivAttributes}
        >
          <div ref={slideBgRef} className={bgClasses} />
          <SlideDragger
            slideRef={slideRef}
            icon={icon}
            onDrag={handleOnDrag}
            onDragEnd={handleOnDragEnd}
            disableDrag={disableDrag}
          />

          <div
            ref={slideLabelRef}
            className={labelClasses}
            title={typeof children === 'string' ? children : label}
          >
            {children || label}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default SlideAction
