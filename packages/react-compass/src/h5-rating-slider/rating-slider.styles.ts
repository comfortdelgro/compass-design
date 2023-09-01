import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledRatingSlider = styled('div', {})
export const StyledRatingSliderItem = styled('div', {})

export type RatingSliderVariantProps = VariantProps<typeof StyledRatingSlider>
export type StyledRatingSliderItemVariantProps = VariantProps<
  typeof StyledRatingSliderItem
>
