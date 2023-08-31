'use client'

import React, {forwardRef, useCallback, useRef, useState} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {SLIDER_REDUCE_OPACITY} from './slide-action.const'
import {
  StyledSlideAction,
  StyledSlideBg,
  StyledSlideLabel,
} from './slide-action.styles'
import {SlideActionProps, SlideDraggerProps} from './slide-action.types'
import SlideDragger from './slide-dragger'

const SlideAction = forwardRef<HTMLDivElement, SlideActionProps>(
  (
    {
      css = {},
      className = '',
      icon,
      color = '$dangerShades',
      label = 'Slide',
      labelType = 'default',
      onChange,
      onSuccess,
      slideType = 'slide',
      slideColor = 'mono',
      enableDragAfterSuccess = false,
      compact = false,
      children,

      ...delegated
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
      [slideBgRef.current, slideType],
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
      [slideRef.current, slideLabelRef.current, handleUpdateSlideBg],
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
          if (!enableDragAfterSuccess) {
            setDisableDrag?.(true)
          }
          onChange?.(true)
          onSuccess?.(resetPosition)
          return
        }

        resetPosition()
      },
      [
        slideRef.current,
        slideLabelRef.current,
        onChange,
        onSuccess,
        handleUpdateSlideBg,
      ],
    )

    return (
      <StyledSlideAction
        ref={slideRef}
        className={`${className} slide-action`}
        css={{...css, borderColor: color}}
        {...{compact}}
        {...delegated}
      >
        <StyledSlideBg
          className='slide-action__bg'
          ref={slideBgRef}
          css={{backgroundColor: color}}
          {...{slideColor}}
          {...{slideType}}
        />
        <SlideDragger
          slideRef={slideRef}
          color={color}
          icon={icon}
          onDrag={handleOnDrag}
          onDragEnd={handleOnDragEnd}
          disableDrag={disableDrag}
        />

        <StyledSlideLabel
          ref={slideLabelRef}
          css={{
            color,
            '@media (prefers-reduced-motion: no-preference)': {
              color: labelType === 'slide' ? 'transparent' : color,
              background: `linear-gradient(
              to right,
              ${color},
              transparent,
              ${color}
            ) 0 0 / 400% 100%`,
              backgroundClip: 'text',
            },
          }}
          {...{labelType}}
          className='slide-action__label'
          title={typeof children === 'string' ? children : label}
        >
          {children || label}
        </StyledSlideLabel>
      </StyledSlideAction>
    )
  },
)

export default SlideAction
