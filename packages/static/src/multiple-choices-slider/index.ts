import MultipleChoicesSlider from './multiple-choices-slider'
import MultipleChoicesSliderItem from './multiple-choices-slider-item'

export type {MultipleChoicesSliderProps} from './multiple-choices-slider'
export type {MultipleChoicesSliderItemProps} from './multiple-choices-slider-item'

MultipleChoicesSlider.Item = MultipleChoicesSliderItem
MultipleChoicesSlider.Item.displayName = 'MultipleChoicesSlider.Item'
MultipleChoicesSlider.displayName = 'MultipleChoicesSlider'

export default MultipleChoicesSlider
