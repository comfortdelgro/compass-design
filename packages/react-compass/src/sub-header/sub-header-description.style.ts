import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledSubHeaderDescription = styled('p', {
  margin: '0',
  variants: {
    variant: {
      default: {
        fontSize: '$label1',
        color: '$gray70',
        margin: '0',
      },
      h5: {
        fontSize: '$label1',
        fontWeight: '$medium',
        lineHeight: '20px',
      },
    },
  },
})

export type SubHeaderDescriptionVariantProps = VariantProps<
  typeof StyledSubHeaderDescription
>
