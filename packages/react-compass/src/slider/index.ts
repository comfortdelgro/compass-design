import RangeSlider from './range-slider'
import _Slider from './slider'

export type {RangeSliderProps} from './range-slider'
export type {SliderProps} from './slider'

const Slider = _Slider as typeof Slider & {Range: typeof RangeSlider}

Slider.Range = RangeSlider

Slider.displayName = 'Slider'
Slider.Range.displayName = 'RangeSlider'

export default Slider
