import {KeenSliderOptions, TrackDetails, useKeenSlider} from 'keen-slider/react'
import React, {useRef} from 'react'
import {
  StyledWheel,
  StyledWheelInner,
  WheelLabel,
  WheelShadowBottom,
  WheelShadowTop,
  WheelSlide,
  WheelSlides,
} from './month-year-picker.styles'
export default function Wheel(props: {
  defaultValue?: number
  label?: string
  length: number
  loop?: boolean
  perspective?: 'left' | 'right' | 'center'
  setValue?: (relative: number, absolute: number) => string | number
  width: number
  onChange: (details: TrackDetails) => void
}) {
  const perspective = props.perspective || 'center'
  const wheelSize = 20
  const slides = props.length
  const slideDegree = 360 / wheelSize
  const slidesPerView = props.loop ? 9 : 1
  const [sliderState, setSliderState] = React.useState<TrackDetails | null>(
    null,
  )
  const size = useRef(0)
  const options = useRef<KeenSliderOptions>({
    slides: {
      number: slides,
      origin: 'auto',
      perView: slidesPerView,
    },

    vertical: true,

    initial: props.defaultValue || 0,
    loop: !!props.loop,
    dragSpeed: (val) => {
      const height = size.current
      return (
        val *
        (height /
          ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
          slidesPerView)
      )
    },
    created: (s) => {
      size.current = s.size
    },
    updated: (s) => {
      size.current = s.size
    },
    detailsChanged: (s) => {
      setSliderState(s.track.details)
    },
    animationEnded: (s) => {
      console.log(s)
      props.onChange?.(s.track.details)
    },

    rubberband: !props.loop,
    mode: 'free-snap',
  })

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(options.current)

  const [radius, setRadius] = React.useState(0)

  React.useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2)
  }, [slider])

  function slideValues() {
    if (!sliderState) return []
    const offset = props.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0

    const values = []
    for (let i = 0; i < slides; i++) {
      const distance = sliderState
        ? (sliderState.slides[i]?.distance ?? 0 - offset) * slidesPerView
        : 0
      const rotate =
        Math.abs(distance) > wheelSize / 2
          ? 180
          : distance * (360 / wheelSize) * -1

      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      }
      const value = props.setValue
        ? props.setValue(i, sliderState.abs + Math.round(distance))
        : i
      values.push({style, value, rotate})
    }
    return values
  }

  return (
    <>
      <StyledWheel perspective={perspective} ref={sliderRef}>
        <WheelShadowTop
          className='wheel-shadow-top'
          css={{
            transform: `translateZ(${radius}px)`,
            WebkitTransform: `translateZ(${radius}px)`,
          }}
        />
        <StyledWheelInner className='wheel_inner'>
          <WheelSlides className='wheel-slides' css={{width: props.width}}>
            {slideValues().map(({style, value, rotate}, idx) => (
              <WheelSlide
                className='wheel-slide'
                css={{
                  ...style,
                  color:
                    Math.round(rotate) >= -7 && Math.round(rotate) <= 7
                      ? '$blueShades100'
                      : '$grayShades40',
                }}
                key={idx}
              >
                <span>{value}</span>
              </WheelSlide>
            ))}
          </WheelSlides>
          {props.label && (
            <WheelLabel
              className='wheel-label'
              css={{
                transform: `translateZ(${radius}px)`,
                WebkitTransform: `translateZ(${radius}px)`,
              }}
            >
              {props.label}
            </WheelLabel>
          )}
        </StyledWheelInner>
        <WheelShadowBottom
          className='wheel-shadow-bottom'
          css={{
            transform: `translateZ(${radius}px)`,
            WebkitTransform: `translateZ(${radius}px)`,
          }}
        />
      </StyledWheel>
    </>
  )
}
