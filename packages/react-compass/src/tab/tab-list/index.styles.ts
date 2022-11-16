import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledTabList = styled('div', {
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  display: 'grid',
  gridTemplateColumns: 'min-content',
  width: 'min-content',
  margin: '0',
  gap: '$4',
  padding: '$4',
  borderRadius: '$full',

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
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type TabListVariantProps = VariantProps<typeof StyledTabList>
