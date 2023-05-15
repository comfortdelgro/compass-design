import {useNumberFormatter} from '@react-aria/i18n'
import {AriaSliderProps, useSlider, useSliderThumb} from '@react-aria/slider'
import {SliderState, useSliderState} from '@react-stately/slider'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledSlider, StyledThumb} from './index.styles'

type Props = AriaSliderProps<number>

const ProgressSlider = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const trackRef = React.useRef<HTMLDivElement>(null)
  const sliderRef = useDOMRef<HTMLDivElement>(ref)
  const numberFormatter = useNumberFormatter(undefined)

  const multiProps = {
    ...props,
    onChangeEnd: (v: number | number[]) =>
      props.onChangeEnd?.(typeof v === 'number' ? v : v[0] ? v[0] : 0),
    onChange: (v: number | number[]) =>
      props.onChange?.(typeof v === 'number' ? v : v[0] ? v[0] : 0),
  }

  const state = useSliderState({
    ...multiProps,
    numberFormatter,
  })

  const {groupProps, trackProps} = useSlider(multiProps, state, trackRef)
  const value = state.values[0] ?? 0
  const origin = props.minValue ?? 0
  return (
    <StyledSlider {...groupProps} ref={sliderRef}>
      <div className='slider-track-wrapper'>
        <div className='slider-rail' />
        <div
          className='slider-filled-rail'
          style={{
            left: `${state.getValuePercent(Math.min(value, origin)) * 100}%`,
            width: `${
              (state.getValuePercent(Math.max(value, origin)) -
                state.getValuePercent(Math.min(value, origin))) *
              100
            }%`,
          }}
        />
        <div {...trackProps} ref={trackRef} className='slider-track'>
          <Thumb state={state} trackRef={trackRef} />
        </div>
      </div>
    </StyledSlider>
  )
})

interface ThumbProps {
  state: SliderState
  trackRef: React.RefObject<HTMLDivElement>
}

const Thumb = React.forwardRef<HTMLInputElement, ThumbProps>((props, ref) => {
  const {state, trackRef} = props
  const inputRef = useDOMRef<HTMLInputElement>(ref)
  const opts = {index: 0, trackRef, inputRef}
  const {thumbProps, inputProps} = useSliderThumb(opts, state)

  return (
    <StyledThumb
      style={{
        left: `${state.getThumbPercent(0) * 100}%`,
      }}
    >
      <div {...thumbProps} className='slider-thumb-handle'>
        <input ref={inputRef} {...inputProps} style={{display: 'none'}} />
      </div>
    </StyledThumb>
  )
})

export default ProgressSlider
