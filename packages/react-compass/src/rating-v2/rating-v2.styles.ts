import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledRatingv2Component = styled('span', {
  display: 'inline-flex',
  position: 'relative',
  fontSize: ' 1.5rem',
})
export const StyledInputStar = styled('input', {
  border: 0,
  clip: ' rect(0 0 0 0)',
  height: '4px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '38px',
})
export const StyledInputStarWrapper = styled('label', {
  variants: {
    noOutline: {
      true: {
        '&:focus-within': {
          outline: 'none',
        },
      },
      false: {
        '&:focus-within': {
          outline: '2px solid blue',
          outlineOffset: '2px',
        },
      },
    },
  },
})
export type RatingVariantProps = VariantProps<typeof StyledRatingv2Component>
