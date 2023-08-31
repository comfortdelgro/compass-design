'use client'

import React, {forwardRef, useCallback, useRef, useState} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
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
      bgType = 'slide',
      slideBg = 'mono',
      enableDragAfterSuccess = false,
      children,

      ...delegated
    },
    ref,
  ) => {
    const SlideRef = useDOMRef<HTMLDivElement>(ref)
    const SlideBgRef = useRef<HTMLDivElement>(null)
    const SlideLabelRef = useRef<HTMLDivElement>(null)
    const [disableDrag, setDisableDrag] = useState(false)

    const handleUpdateSlideBg = useCallback<
      (opacity: number, width: number) => void
    >(
      (opacity, width) => {
        if (!SlideBgRef.current) {
          return
        }

        if (bgType === 'static') {
          SlideBgRef.current.style.setProperty('opacity', opacity.toFixed(2))
          return
        }

        // SlideBgRef.current.style.setProperty('transform', transform)
        SlideBgRef.current.style.setProperty('width', `${width}px`)
      },
      [SlideBgRef.current, bgType],
    )

    const handleOnDrag = useCallback<NonNullable<SlideDraggerProps['onDrag']>>(
      ({slideDragWidth, maxSlideDistance}, _, {x}) => {
        if (!SlideRef.current || !SlideLabelRef.current) {
          return
        }
        const calcDistance = (maxSlideDistance - x) / maxSlideDistance
        SlideLabelRef.current.style.setProperty(
          'opacity',
          (calcDistance - 0.1).toFixed(2),
        )

        const bgOpacity = x / maxSlideDistance - 0.4
        handleUpdateSlideBg(
          bgOpacity > 0.4 ? 0.4 : bgOpacity,
          slideDragWidth + x,
        )
      },
      [SlideRef.current, SlideLabelRef.current, handleUpdateSlideBg],
    )

    const handleOnDragEnd = useCallback<
      NonNullable<SlideDraggerProps['onDragEnd']>
    >(
      ({maxSlideDistance}, _, {x}, setPosition) => {
        if (!SlideRef.current) {
          return
        }

        const resetPosition = () => {
          if (SlideLabelRef.current) {
            SlideLabelRef.current.style.setProperty('opacity', '1')
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
        SlideRef.current,
        SlideLabelRef.current,
        onChange,
        onSuccess,
        handleUpdateSlideBg,
      ],
    )

    return (
      <StyledSlideAction
        ref={SlideRef}
        className={`${className} slide-action`}
        css={{...css, borderColor: color}}
        {...delegated}
      >
        <StyledSlideBg
          className='slide-action__bg'
          ref={SlideBgRef}
          css={{backgroundColor: color}}
          {...{slideBg}}
          {...{bgType}}
        />
        <SlideDragger
          slideRef={SlideRef}
          color={color}
          icon={icon}
          onDrag={handleOnDrag}
          onDragEnd={handleOnDragEnd}
          disableDrag={disableDrag}
        />

        <StyledSlideLabel
          ref={SlideLabelRef}
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
