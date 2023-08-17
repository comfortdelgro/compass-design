import {VariantProps} from '@stitches/react'
import {styled} from '../theme'

export const StyledSubHeaderTitle = styled('h1', {
  margin: 0,
  color: '$grayShades100 !important',
  variants: {
    variant: {
      default: {
        fontWeight: '$semibold',
        fontSize: '$header5 !important',
        lineHeight: '$normal !important',
      },
      h5: {
        fontSize: '$header2 !important',
        fontWeight: '700',
        lineHeight: '42px !important',
      },
    },
  },
})

export type SubHeaderTitleVariantProps = VariantProps<
  typeof StyledSubHeaderTitle
>
