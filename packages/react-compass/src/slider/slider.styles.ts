import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSlider = styled('div', {
  // fontFamily: 'inherit',
  // fontWeight: '$medium',
  // color: '$info',
  // textDecoration: 'underline',
  // transition: '$default',
})

export type SliderVariantProps = VariantProps<typeof StyledSlider>
