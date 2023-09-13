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
      margin: 0,
    },
  },
  '.radio-content-wrapper': {
    flexGrow: 1,
    marginLeft: '$4',
    display: 'grid',
    gap: '$2',
    fontSize: '$header5',

    '.radio-label': {
      padding: 0,
      margin: 0,
      fontWeight: '$semibold',
      display: 'flex',
      alignItems: 'center',
      color: '$primaryText',
    },
    '.radio-description': {
      padding: 0,
      margin: 0,
      fontWeight: '$normal',
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
      h5: {
        padding: '0',

        '.radio-content-wrapper': {
          fontSize: '$label1',
        },
      },
    },
    inputPosition: {
      right: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        gap: '$4',
        width: '100%',

        '.radio-content-wrapper': {
          marginLeft: 0,
        },
      },
      left: {},
    },
    // disabled: {},
    // icon: {},
  },

  defaultVariants: {
    variant: 'outlined',
    inputPosition: 'right',
  },
  '&:focus-within': {
    outline: '2px solid $cdgBlue100',
  },

  compoundVariants: [
    {
      variant: 'h5',
      disabled: true,
      css: {
        opacity: '0.6',
      },
    },
  ],
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
    variant: {
      simple: {},
      outlined: {},
      h5: {
        border: '1px solid $grayShades20',
      },
    },
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
    {
      variant: 'h5',
      active: true,
      css: {
        border: '4px solid $blueShades100',

        '&:after': {display: 'none'},
      },
    },
  ],
  defaultVariants: {
    active: false,
  },
})

export type RadioVariantProps = VariantProps<typeof StyledRadio>
