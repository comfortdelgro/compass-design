import {VariantProps} from '@stitches/react'
import {styled} from '../theme'

export const StyledSubHeaderDescription = styled('p', {
  margin: '0',
  variants: {
    variant: {
      default: {
        fontSize: '$label1 !important',
        color: '$gray70 !important',
        margin: '0 !important',
      },
      h5: {
        fontSize: '$label1',
        fontWeight: '$medium',
        lineHeight: '20px !important',
      },
    },
  },
})

export type SubHeaderDescriptionVariantProps = VariantProps<
  typeof StyledSubHeaderDescription
>
