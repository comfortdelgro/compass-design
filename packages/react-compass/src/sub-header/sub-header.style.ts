import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledSubHeader = styled('div', {
  display: 'flex',
  gap: '$2',
  variants: {
    variant: {
      default: {
        flexDirection: 'column',
      },
      h5: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
  },
})

export type SubHeaderHeaderVariantProps = VariantProps<typeof StyledSubHeader>
