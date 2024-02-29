'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {
  SliderControls,
  SliderControlsChildArguments,
  SliderControlsProps,
} from './component/SliderControls'
import {SliderThumb} from './component/SliderThumb'
import styles from './styles/slider.module.css'
import {FocusableRef, InputDOMProps} from './utils/types'

export interface SliderProps
  extends SliderControlsProps<number>,
    InputDOMProps {
  css?: unknown
  tooltip?: boolean
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    css,
    value,
    defaultValue,
    orientation = 'horizontal',
    onChange,
    onChangeEnd,
  } = props

  const baseProps: Omit<SliderControlsProps, 'children'> = {
    ...props,
    value: value != null ? [value] : undefined,
    defaultValue: defaultValue != null ? [defaultValue] : undefined,
    onChange: (v: number[]): void => {
      onChange?.(v[0])
    },
    onChangeEnd: (v: number[]): void => {
      onChangeEnd?.(v[0])
    },
  }

  const upperTrackClasses = [
    styles.sliderFilledTrackUpper,
    orientation === 'vertical' && styles.sliderFilledTrackUpperVertical,
    'cdg-slider-upper-filled-track',
  ]
    .filter(Boolean)
    .join(' ')

  const lowerTrackClasses = [
    styles.sliderFilledTrackLower,
    orientation === 'vertical' && styles.sliderFilledTrackLowerVertical,
    'cdg-slider-lower-filled-track',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <SliderControls
        {...baseProps}
        ref={ref as unknown as FocusableRef<HTMLDivElement>}
      >
        {({trackRef, inputRef, state}: SliderControlsChildArguments) => {
          return (
            <>
              <div
                className={upperTrackClasses}
                style={
                  orientation === 'horizontal'
                    ? {width: `${state.getThumbPercent(0) * 100}%`}
                    : {
                        height: `${(1 - state.getThumbPercent(0)) * 100}%`,
                        backgroundColor: 'transparent',
                      }
                }
              />
              <SliderThumb
                index={0}
                state={state}
                name={props.name}
                trackRef={trackRef}
                inputRef={inputRef}
                isDisabled={props.isDisabled}
              />
              <div
                className={lowerTrackClasses}
                style={
                  orientation === 'horizontal'
                    ? {
                        width: `${(1 - state.getThumbPercent(0)) * 100}%`,
                        backgroundColor: 'transparent',
                      }
                    : {height: `${state.getThumbPercent(0) * 100}%`}
                }
              />
            </>
          )
        }}
      </SliderControls>
    </CssInjection>
  )
})

export default Slider
