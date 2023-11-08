import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const StyledTabs = styled('div', {
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  display: 'flex',
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
      h5: {
        background: 'transparent',
        borderRadius: 'none',
        padding: '0 0 4px 0!important',
        gap: '$5',
      },
    },
    orientation: {
      horizontal: {
        padding: '$2',
        flexDirection: 'row',
      },
      vertical: {
        padding: '$4 $2',
        flexDirection: 'column',
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
