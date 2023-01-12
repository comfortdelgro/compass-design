import {useNumberFormatter} from '@react-aria/i18n'
import {AriaSliderProps, useSlider} from '@react-aria/slider'
import {useSliderState} from '@react-stately/slider'
import {styled, VariantProps} from '@stitches/react'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends AriaSliderProps<number>, StyledComponentProps {}

export type SliderVariantProps = VariantProps<typeof StyledVoumeSlider>

export type SliderProps = Props & SliderVariantProps
type Orientation = 'horizontal' | 'vertical'

const VolumeSlider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      ...ariaSafeProps
    } = props

    const trackRef = React.useRef<HTMLDivElement>(null)
    const sliderRef = useDOMRef<HTMLDivElement>(ref)
    const numberFormatter = useNumberFormatter(undefined)
    const orientation: Orientation = 'vertical'

    const multiProps = {
      ...ariaSafeProps,
      orientation,
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
      <StyledVoumeSlider {...groupProps} ref={sliderRef} css={css}>
        <div className='slider-track-wrapper'>
          <div className='slider-rail' />
          <div
            className='slider-filled-rail'
            style={{
              bottom: `${
                state.getValuePercent(Math.min(value, origin)) * 100
              }%`,
              height: `${
                (state.getValuePercent(Math.max(value, origin)) -
                  state.getValuePercent(Math.min(value, origin))) *
                100
              }%`,
            }}
          />
          <div {...trackProps} ref={trackRef} className='slider-track' />
        </div>
      </StyledVoumeSlider>
    )
  },
)

export const StyledVoumeSlider = styled('div', {
  position: 'relative',
  touchAction: 'none',
  flexGrow: 1,
  width: '$3',
  borderRadius: '$full',
  '.slider-track-wrapper': {
    position: 'relative',
    height: '100%',
    borderRadius: '$full',
    overflow: 'hidden',
    '.slider-rail': {
      position: 'absolute',
      background: '$gray50',
      display: 'flex',
      width: '$3',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      cursor: 'pointer',
    },
    '.slider-filled-rail': {
      position: 'absolute',
      backgroundColor: '$background',
      height: '100%',
      width: '$3',
      bottom: '0',
      borderRadius: '$md',
    },
    '.slider-track': {
      position: 'relative',
      height: '100%',
      width: '$3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
})

export default VolumeSlider
