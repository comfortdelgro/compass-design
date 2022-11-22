import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledRadioGroup = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '$2 $4',
  display: 'grid',
  gap: '$4',
  gridTemplateColumns: 'min-content',
  variants: {
    orientation: {
      horizontal: {
        gridAutoFlow: 'column',
      },
      vertical: {
        gridAutoFlow: 'row',
      },
    },
  },
})

export type RadioGroupVariantProps = VariantProps<typeof StyledRadioGroup>
