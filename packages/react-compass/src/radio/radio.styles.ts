import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledRadio = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: 'fit-content',
  '.radio-wrapper': {
    width: '16px !important',
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    '& input': {
      position: 'relative',
      opacity: 0,
      width: 0,
      height: 0,
      appearance: 'none',
    },
  },
  '.radio-content-wrapper': {
    flexGrow: 1,
    marginLeft: '$4',
    display: 'grid',
    gap: '$2',
    '.radio-label': {
      padding: 0,
      margin: 0,
      fontWeight: '$semibold',
      fontSize: '$header5',
      display: 'flex',
      alignItems: 'center',
      color: '$primaryText',
    },
    '.radio-description': {
      padding: 0,
      margin: 0,
      fontWeight: '$normal',
      fontSize: '$header5',
      color: '$secondaryText',
    },
  },
  '.radio-right-label': {
    padding: 0,
    margin: 0,
    marginLeft: '$4',
    fontWeight: '$normal',
    fontSize: '$label1',
    color: '$severeWarning',
  },
  variants: {
    disabled: {
      true: {
        borderColor: '$gray50',
        cursor: 'not-allowed',
      },
    },
    variant: {
      simple: {
        padding: '$1', // Prevent boxmodel inside overflow with boxmodel wrapper
      },
      outlined: {
        padding: '$4',
        border: '1px solid $cdgBlue100',
        borderRadius: '$md',
        '& input': {
          width: '$4',
          height: '$4',
        },
      },
    },
    // disabled: {},
    // icon: {},
  },

  defaultVariants: {
    variant: 'outlined',
  },
  '&:focus-within': {
    outline: '2px solid $cdgBlue100',
  },
})

export const StyledRadioInput = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  border: '1px solid $gray90',
  borderRadius: '$full',

  variants: {
    active: {
      true: {
        borderColor: '$cdgBlue100',
        background: 'transparent',
        '&:after': {
          content: '',
          borderRadius: '$full',
          position: 'absolute',
          zIndex: '2',
          width: '8px',
          height: '8px',
          background: '$cdgBlue100',
        },
      },
    },
    disabled: {
      true: {
        borderColor: '$gray50',
        background: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      active: true,
      disabled: true,
      css: {
        '&:after': {
          content: '',
          borderRadius: '$full',
          position: 'absolute',
          zIndex: '2',
          width: '$2',
          height: '$2',
          background: '$gray50',
        },
      },
    },
  ],
  defaultVariants: {
    active: false,
  },
})

export type RadioVariantProps = VariantProps<typeof StyledRadio>
