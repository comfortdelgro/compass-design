import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledQuantityToggle = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  label: {
    fontSize: '$label1',
    fontWeight: '$medium',
    lineHeight: '$normal',
    display: 'block',
    marginBottom: '$1',
    color: '$gray90',
    span: {
      marginLeft: '$1',
      color: '$danger',
    },
  },
  div: {
    display: 'flex',
    width: '100%',
    input: {
      flex: 1,
      color: '$gray100',
      padding: '$3 $4',
      textAlign: 'center',
      borderRadius: '0',
      backgroundColor: '$white',
      fontSize: '$label1',
      fontWeight: '$semibold',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '$divider',
      transition: '$default',
    },
    'input::placeholder': {
      color: '$tertiaryText',
    },
    button: {
      color: '$gray100',
      aspectRatio: '1',
      width: '$14',
      cursor: 'pointer',
      fontWeight: '$bold',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '$divider',
      transition: '$default',
      backgroundColor: '$gray10',
    },
    "button[aria-label='decrease']": {
      borderRight: 'none',
      borderRadius: '4px 0 0 4px',
    },
    "button[aria-label='increase']": {
      borderLeft: 'none',
      borderRadius: '0 4px 4px 0',
    },
  },
  ':focus-within': {
    input: {
      outline: 'none',
      borderColor: '$cdgBlue120',
    },
    button: {
      borderColor: '$cdgBlue120',
      backgroundColor: '#E6ECF7',
    },
  },
  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        div: {
          input: {
            backgroundColor: '$gray30',
            cursor: 'not-allowed',
          },
          button: {
            borderColor: '$gray30',
            cursor: 'not-allowed',
          },
        },
      },
    },
    isErrored: {
      true: {
        div: {
          input: {
            outline: 'none',
            borderColor: '$danger',
          },
          button: {
            borderColor: '$danger',
          },
        },
        ':focus-within': {
          input: {
            outline: 'none',
            borderColor: '$danger',
          },
          button: {
            borderColor: '$danger',
            backgroundColor: '$gray10',
          },
        },
      },
    },
  },
})

export const StyledHelperText = styled('div', {
  fontSize: '$label2',
  fontWeight: '$medium',
  transition: '$default',
  marginTop: '$1',
  color: '$gray70',

  variants: {
    error: {
      true: {
        color: '$danger',
      },
    },
  },
})

export type QuantityToggleVariantProps = VariantProps<
  typeof StyledQuantityToggle
>
