import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledToggle = styled('div', {
  position: 'relative',
  width: '$8',
  height: '$4',
  padding: '$0_5',
  display: 'flex',
  cursor: 'pointer',
  borderRadius: '$full',
  backgroundColor: '$gray70',
  transition: 'background-color 500ms ease',
  '& .toggle-circle': {
    width: '$3',
    height: '$3',
    borderRadius: '$full',
    backgroundColor: '$background',
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$success',
        justifyContent: 'flex-end',
      },
    },
    size: {
      sm: {},
      lg: {
        width: '$10',
        height: '$6',
        '& .toggle-circle': {
          width: '$5',
          height: '$5',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        backgroundColor: '$gray50',
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      active: true,
      css: {
        backgroundColor: '#D0EBCC',
      },
    },
  ],
  defaultVariants: {
    active: false,
    disabled: false,
    size: 'sm',
  },
})

export type ToggleVariantProps = VariantProps<typeof StyledToggle>
