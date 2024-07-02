/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {useLazyEffect, useSlideActionDragger} from './hooks'
import SlideActionDefaultIcon from './slide-action-icon'
import {SLIDER_REDUCE_OPACITY} from './slide-action.const'
import type {
  SlideActionProps,
  SlideActionRef,
  SlideDraggerProps,
} from './slide-action.types'
import classes from './styles/slide-action.module.css'

const RESET_TRANSFORM_DURATION = 200 // ms

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
 * Usually use for important actions, such as purchase order, turn off privacy setting, delete something, etc...
 */
const SlideAction = forwardRef<SlideActionRef, SlideActionProps>(
  (
    {
      css,
      className = '',
      icon,
      color,
      label = 'Slide',
      labelType = 'default',
      onChange,
      onSwipeEnd,
      slideType = 'slide',
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
    const [slideStatus, setSlideStatus] = useState(false)

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
      ({draggerWidth, maxSlideDistance}, _, {x}) => {
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
          draggerWidth + x,
        )
      },
      [handleUpdateSlideBg],
    )

    const resetState = useCallback(() => {
      if (slideLabelRef.current) {
        slideLabelRef.current.style.setProperty('opacity', '1')
      }

      setDisableDrag(false)
      setSlideStatus(false)
      handleUpdateSlideBg(0, 0)
    }, [handleUpdateSlideBg])

    const handleOnDragEnd = useCallback<
      NonNullable<SlideDraggerProps['onDragEnd']>
    >(
      ({maxSlideDistance}, _, {x}, setPosition) => {
        if (!slideRef.current) {
          return
        }

        const resetPosition = () => {
          resetState()
          setPosition(
            {x: 0, y: 0},
            {transition: `transform ${RESET_TRANSFORM_DURATION}ms ease`},
          )
        }

        if (x === maxSlideDistance) {
          if (!allowSwipeAfterEnd) {
            setDisableDrag(true)
          }

          setSlideStatus(true)
          onSwipeEnd?.(resetPosition)
          return
        }

        resetPosition()
      },
      [handleUpdateSlideBg, allowSwipeAfterEnd, onSwipeEnd],
    )

    const {slideDraggerRef, setDraggerPosition} = useSlideActionDragger({
      slideRef,
      onDrag: handleOnDrag,
      onDragEnd: handleOnDragEnd,
      disableDrag,
    })

    const exposedResetHandler = useCallback(() => {
      resetState()
      setDraggerPosition(
        {x: 0, y: 0},
        {transition: `transform ${RESET_TRANSFORM_DURATION}ms ease`},
      )
    }, [resetState, setDraggerPosition])

    useImperativeHandle(ref, () => ({
      ...slideRef.current!,
      resetState: exposedResetHandler,
    }))

    useLazyEffect(() => {
      onChange?.(slideStatus)
    }, [slideStatus, onChange])

    useEffect(() => {
      if (!color) {
        slideRef.current?.style.removeProperty('--slide-action-theme')
        return
      }

      slideRef.current?.style.setProperty(
        '--slide-action-theme',
        isValidColorVariable(color) ? `var(${color})` : color,
      )
    }, [color])

    return (
      <CssInjection css={css} childrenRef={slideRef}>
        <div
          ref={slideRef}
          className={classNames(
            classes.slideAction,
            compact ? classes.compact : '',
            className,
            'cdg-slide-action',
          )}
          // data-color={color} // attr(data-color) is not widely supported yet, using inline style for now
          {...htmlDivAttributes}
        >
          <div
            ref={slideBgRef}
            className={classNames(
              classes.slideActionBackground,
              slideType && classes[slideType],
              'cdg-slide-action__bg',
            )}
          />

          <button
            ref={slideDraggerRef}
            className={classNames(
              classes.slideActionDragger,
              'cdg-slide-action__dragger',
            )}
            type='button'
            style={disableDrag ? {pointerEvents: 'none'} : undefined}
          >
            {icon || <SlideActionDefaultIcon />}
          </button>

          <div
            ref={slideLabelRef}
            className={classNames(
              classes.slideActionLabel,
              labelType && classes[labelType],
              'cdg-slide-action__label',
            )}
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
