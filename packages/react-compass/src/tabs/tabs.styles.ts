import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTabs = styled('div', {
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  display: 'grid',
  gridTemplateColumns: 'min-content',
  width: 'fit-content',
  margin: '0',
  gap: '$4',

  variants: {
    variant: {
      rounded: {
        background: '$background',
        borderRadius: '$full',
      },
      simple: {
        background: 'transparent',
        borderRadius: 'none',
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
  compoundVariants: [
    {
      variant: 'rounded',
      orientation: 'vertical',
      css: {
        borderRadius: '$xl',
      },
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'rounded',
  },
})

export type TabsVariantProps = VariantProps<typeof StyledTabs>
