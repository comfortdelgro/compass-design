import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledSubHeaderTitle = styled('h1', {
  margin: 0,
  color: '$grayShades100 !important',
  variants: {
    variant: {
      default: {
        fontWeight: '$semibold',
        fontSize: '$header5',
        lineHeight: '$normal',
      },
      h5: {
        fontSize: '$header2',
        fontWeight: '700',
        lineHeight: '42px',
      },
    },
  },
})

export type SubHeaderTitleVariantProps = VariantProps<
  typeof StyledSubHeaderTitle
>
