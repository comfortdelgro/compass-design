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
  borderRadius: '$full',

  variants: {
    variant: {
      rounded: {
        background: '$background',
      },
      simple: {
        background: 'transparent',
      },
    },
    orientation: {
      horizontal: {
        padding: '$2',
        gridAutoFlow: 'column',
      },
      vertical: {
        padding: '$4 $2',
        gridAutoFlow: 'row',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'rounded',
  },
})

export type TabListVariantProps = VariantProps<typeof StyledTabList>
