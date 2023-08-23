import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledListImage = styled('img', {
  width: '$10',
  height: '$10',
  borderRadius: '$lg',
  objectFit: 'cover',
  variants: {
    isRounded: {
      true: {
        borderRadius: '100%',
      },
    },
    variant: {
      h5: {
        width: '$11',
        height: '$11',
      },
    },
  },
})

export type ListImageVariantProps = VariantProps<typeof StyledListImage>
