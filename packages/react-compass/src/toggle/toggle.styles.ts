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
  input: {
    visibility: 'hidden',
    position: 'absolute',
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
    variant: {
      h5: {
        width: '$12',
        height: '$7',
        '& .toggle-circle': {
          width: '$6',
          height: '$6',
        },
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
    {
      active: true,
      variant: 'h5',
      css: {
        backgroundColor: '$secondaryGreen',
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
