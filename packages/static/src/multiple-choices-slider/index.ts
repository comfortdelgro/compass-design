import MultipleChoicesSliderComposable from './multiple-choices-slider'
import MultipleChoicesSliderItem from './multiple-choices-slider-item'

export type {MultipleChoicesSliderProps} from './multiple-choices-slider'
export type {MultipleChoicesSliderItemProps} from './multiple-choices-slider-item'

const MultipleChoicesSlider =
  MultipleChoicesSliderComposable as typeof MultipleChoicesSliderComposable & {
    Item: typeof MultipleChoicesSliderItem
  }

MultipleChoicesSlider.Item = MultipleChoicesSliderItem
MultipleChoicesSlider.displayName = 'MultipleChoicesSlider'

export default MultipleChoicesSlider
