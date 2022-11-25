import {useNumberFormatter} from '@react-aria/i18n'
import {AriaSliderProps, useSlider, useSliderThumb} from '@react-aria/slider'
import {SliderState, useSliderState} from '@react-stately/slider'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {SliderVariantProps} from './slider.styles'

interface Props extends AriaSliderProps, StyledComponentProps {
  formatOptions?: Intl.NumberFormatOptions
}

export type SliderProps = Props & SliderVariantProps

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props: SliderProps, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      // AriaSliderProps
      ...ariaSafeProps
    } = props

    const trackRef = React.useRef(null)
    const sliderRef = useDOMRef<HTMLDivElement>(ref)
    const numberFormatter = useNumberFormatter(props.formatOptions)

    const state = useSliderState({
      ...ariaSafeProps,
      numberFormatter,
    })

    const {groupProps, trackProps, labelProps, outputProps} = useSlider(
      props,
      state,
      sliderRef,
    )

    console.log(
      css,
      ariaSafeProps,
      sliderRef,
      groupProps,
      trackProps,
      outputProps,
      labelProps,
      props.formatOptions,
    )
    return (
      <div>
        <Thumb state={state} trackRef={trackRef} />
      </div>
    )
  },
)

interface ThumbProps {
  state: SliderState
  trackRef: React.RefObject<Element>
}

const Thumb = React.forwardRef<HTMLInputElement, ThumbProps>((props, ref) => {
  const {state, trackRef} = props
  const inputRef = useDOMRef<HTMLInputElement>(ref)
  const {thumbProps, inputProps} = useSliderThumb(
    {index: 0, trackRef, inputRef},
    state,
  )

  return (
    <div {...thumbProps}>
      <input ref={inputRef} {...inputProps} style={{display: 'none'}} />
    </div>
  )
})

export default Slider
