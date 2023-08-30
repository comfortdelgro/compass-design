'use client'

import React, {forwardRef, useCallback, useRef, useState} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSlideAction, StyledSlideLabel} from './slide-action.styles'
import {SlideActionProps, SlideDraggerProps} from './slide-action.types'
import SlideDragger from './slide-dragger'

const SlideAction = forwardRef<HTMLDivElement, SlideActionProps>(
  (
    {
      css = {},
      className = '',
      icon,
      label = 'Slide',
      color = '#E31617',
      onChange,
      onSuccess,
      enableDragOnSuccess = false,
      children,

      ...delegated
    },
    ref,
  ) => {
    const SlideRef = useDOMRef<HTMLDivElement>(ref)
    const SlideLabelRef = useRef<HTMLDivElement>(null)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleOnDrag = useCallback<NonNullable<SlideDraggerProps['onDrag']>>(
      (maxSlideDistance, _, {x}) => {
        if (!SlideLabelRef.current) {
          return
        }

        SlideLabelRef.current.style.setProperty(
          'opacity',
          ((maxSlideDistance - x) / maxSlideDistance - 0.1).toFixed(2),
        )
      },
      [SlideLabelRef.current],
    )

    const handleOnDragEnd = useCallback<
      NonNullable<SlideDraggerProps['onDragEnd']>
    >(
      (maxSlideDistance, _, {x}, setPosition) => {
        if (!SlideRef.current) {
          return
        }

        const resetPosition = () => {
          if (SlideLabelRef.current) {
            SlideLabelRef.current.style.setProperty('opacity', '1')
          }

          setIsSuccess(false)
          onChange?.(false)
          setPosition({x: 0, y: 0}, {transition: 'transform .2s ease'})
        }

        if (x === maxSlideDistance) {
          setIsSuccess?.(true)
          onChange?.(true)
          onSuccess?.(resetPosition)
          return
        }

        resetPosition()
      },
      [SlideRef.current, SlideLabelRef.current, onChange, onSuccess],
    )

    return (
      <StyledSlideAction
        ref={SlideRef}
        className={`${className} slide-action`}
        css={{...css, borderColor: color}}
        {...delegated}
      >
        <SlideDragger
          slideRef={SlideRef}
          color={color}
          icon={icon}
          onDrag={handleOnDrag}
          onDragEnd={handleOnDragEnd}
          disableDrag={isSuccess}
        />

        <StyledSlideLabel
          ref={SlideLabelRef}
          css={{color}}
          className='slide-action__label'
        >
          {children || label}
        </StyledSlideLabel>
      </StyledSlideAction>
    )
  },
)

export default SlideAction
