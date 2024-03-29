import React, {ReactNode, RefObject, useRef} from 'react'
import {
  SliderBaseProps,
  FocusableRef,
  SliderState,
  ValueBase,
} from '../utils/types'
import {useFocusableRef} from '../utils/useFocusableRef'
import {useSlider} from '../utils/useSlider'
import {useSliderState} from '../utils/useSliderState'

// import {useNumberFormatter} from '../../quantity-toggle/utils/useNumberField/useNumberFormatter'
import styles from '../styles/slider.module.css'

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

function SliderControls(props: SliderControlsProps, ref: FocusableRef<HTMLDivElement>) {
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

  const rootClasses = [
    styles.controls,
    isDisabled && styles.controlsIsDisabled,
    orientation === 'vertical' && styles.controlsVertical,
    'cdg-slider',
  ]
    .filter(Boolean)
    .join(' ')

  const trackClasses = [
    styles.sliderMainTrack,
    isDisabled && styles.sliderMainTrackIsDisabled,
    orientation === 'vertical' && styles.sliderMainTrackVertical,
    'cdg-slider-main-track',
  ]
    .filter(Boolean)
    .join(' ')

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
