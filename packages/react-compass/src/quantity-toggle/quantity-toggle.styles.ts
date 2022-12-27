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
    button: {
      color: '#323130',
      aspectRatio: '1',
      width: '$14',
      cursor: 'pointer',
      fontWeight: '$bold',
      border: '1px solid #EDEBE9',
      backgroundColor: '$gray10',
    },
    'button[aria-label="Decrease"]': {
      borderRight: 'none',
      borderRadius: '4px 0 0 4px',
    },
    'button[aria-label="Increase"]': {
      borderLeft: 'none',
      borderRadius: '0 4px 4px 0',
    },
  },
  '.quantity-toggle-label': {
    fontSize: '$label1',
    fontWeight: '$semibold',
    marginBottom: '$1',
    color: '$gray90',
  },
  '.quantity-toggle-helper-text': {
    fontSize: '$label3',
    fontWeight: '$semibold',
    margin: 0,
    marginTop: '$1',
    color: '$gray50',
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

export type QuantityToggleVariantProps = VariantProps<
  typeof StyledQuantityToggle
>
