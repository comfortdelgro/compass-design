import React, {ReactNode, RefObject, useRef} from 'react'
import {classNames} from '../../utils/string'
import styles from '../styles/slider.module.css'
import {
  FocusableRef,
  SliderBaseProps,
  SliderState,
  ValueBase,
} from '../utils/types'
import {useFocusableRef} from '../utils/useFocusableRef'
import {useSlider} from '../utils/useSlider'
import {useSliderState} from '../utils/useSliderState'

export interface SliderControlsChildArguments {
  inputRef: RefObject<HTMLInputElement>
  trackRef: RefObject<HTMLElement>
  state: SliderState
}

export interface SliderControlsProps<T = number[]>
  extends SliderBaseProps<T>,
    ValueBase<T> {
  children?: (opts: SliderControlsChildArguments) => ReactNode
}

function SliderControls(
  props: SliderControlsProps,
  ref: FocusableRef<HTMLDivElement>,
) {
  const {
    children,
    minValue = 0,
    maxValue = 100,
    isDisabled = false,
    orientation = 'horizontal',
  } = props

  const state = useSliderState({
    ...props,
    minValue,
    maxValue,
  })
  const trackRef = useRef()
  const {trackProps} = useSlider(props, state, trackRef)

  const inputRef = useRef()
  const domRef = useFocusableRef(ref, inputRef)

  const rootClasses = classNames(
    styles.controls,
    isDisabled && styles.controlsIsDisabled,
    orientation === 'vertical' && styles.controlsVertical,
    'cdg-slider',
  )

  const trackClasses = classNames(
    styles.sliderMainTrack,
    isDisabled && styles.sliderMainTrackIsDisabled,
    orientation === 'vertical' && styles.sliderMainTrackVertical,
    'cdg-slider-main-track',
  )

  return (
    <div ref={domRef} className={rootClasses}>
      <div {...trackProps} ref={trackRef} className={trackClasses}>
        {children({
          trackRef,
          inputRef,
          state,
        })}
      </div>
    </div>
  )
}

const _SliderControls = React.forwardRef(SliderControls)
export {_SliderControls as SliderControls}
