'use client'
import React from 'react'
import {CSS} from '../utils/objectToCss'
import {
  SliderControls,
  SliderControlsChildArguments,
  SliderControlsProps,
} from './component/SliderControls'
import {SliderThumb} from './component/SliderThumb'
import {FocusableRef, RangeValue} from './utils/types'

import {classNames} from '../utils/string'
import styles from './styles/slider.module.css'

export interface RangeSliderProps
  extends SliderControlsProps<RangeValue<number>> {
  css?: CSS
  tooltip?: boolean
}

const RangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
  (props, ref) => {
    const {
      onChange,
      onChangeEnd,
      value,
      defaultValue,
      orientation = 'horizontal',
    } = props

    const baseProps: Omit<SliderControlsProps<number[]>, 'children'> = {
      ...props,
      value: value != null ? [value.start, value.end] : undefined,
      defaultValue:
        defaultValue != null
          ? [defaultValue.start, defaultValue.end]
          : [props.minValue ?? 0, props.maxValue ?? 100],
      onChange(v) {
        onChange?.({start: v[0], end: v[1]})
      },
      onChangeEnd(v) {
        onChangeEnd?.({start: v[0], end: v[1]})
      },
    }

    const filledClasses = classNames(
      styles.rangeSliderFilledTrack,
      orientation === 'vertical' && styles.rangeSliderFilledTrackVertical,
      'cdg-slider-filled-track',
    )

    return (
      <SliderControls
        {...baseProps}
        ref={ref as unknown as FocusableRef<HTMLDivElement>}
      >
        {({trackRef, inputRef, state}: SliderControlsChildArguments) => {
          return (
            <>
              <SliderThumb
                index={0}
                state={state}
                trackRef={trackRef}
                inputRef={inputRef}
                isDisabled={props.isDisabled}
              />
              <div
                className={filledClasses}
                style={
                  orientation === 'horizontal'
                    ? {
                        left: `${state.getThumbPercent(0) * 100}%`,
                        width: `${
                          Math.abs(
                            state.getThumbPercent(0) - state.getThumbPercent(1),
                          ) * 100
                        }%`,
                      }
                    : {
                        top: `${(1 - state.getThumbPercent(1)) * 100}%`,
                        height: `${
                          Math.abs(
                            state.getThumbPercent(0) - state.getThumbPercent(1),
                          ) * 100
                        }%`,
                      }
                }
              />
              <SliderThumb
                index={1}
                state={state}
                trackRef={trackRef}
                isDisabled={props.isDisabled}
              />
            </>
          )
        }}
      </SliderControls>
    )
  },
)

export default RangeSlider
