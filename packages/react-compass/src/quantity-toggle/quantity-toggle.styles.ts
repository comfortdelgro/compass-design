import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledQuantityToggle = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  "div[role='group']": {
    display: 'flex',
    width: '100%',
    input: {
      flex: 1,
      color: '#323130',
      padding: '$3 $4',
      textAlign: 'center',
      border: '1px solid #EDEBE9',
      borderRadius: '0',
      backgroundColor: '$white',
      fontSize: '$label1',
      fontWeight: '$semibold',
    },
    'input::placeholder': {
      color: '$gray40',
    },
    'input::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    'input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    "input[type='number']": {
      '-moz-appearance': 'textfield',
    },
    button: {
      color: '#323130',
      aspectRatio: '1',
      width: '$14',
      cursor: 'pointer',
      fontWeight: '$bold',
      border: '1px solid #EDEBE9',
      backgroundColor: '$gray10',
    },
  },
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
  variants: {
    isDisabled: {
      true: {
        "div[role='group']": {
          input: {
            backgroundColor: '#EDEBE9',
          },
          button: {
            borderColor: '#EDEBE9',
            cursor: 'not-allowed',
          },
        },
      },
    },
    isErrored: {
      true: {
        "div[role='group']": {
          input: {
            borderColor: '$danger',
          },
          button: {
            borderColor: '$danger',
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
