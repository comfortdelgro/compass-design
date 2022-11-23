import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledRadioGroup = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '$2 $4',
  display: 'flex',
  gap: '$4',
  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
})

export type RadioGroupVariantProps = VariantProps<typeof StyledRadioGroup>
