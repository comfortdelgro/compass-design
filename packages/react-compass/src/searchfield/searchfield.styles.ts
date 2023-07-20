import {StyledButton} from '../button/button.styles'
import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSearchFieldInput = styled('input', {
  width: '100%',
  fontSize: '$label1',
  fontWeight: '$semibold',
  lineHeight: '$normal',
  padding: '$1_5 $3',
  border: 0,
  borderRadius: '$md',
  backgroundColor: 'transparent',
  '&::placeholder': {
    color: '#B4B4B4',
    fontSize: '$label1',
    fontWeight: '$semibold',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const StyledSearchFieldBox = styled('div', {
  display: 'flex',
  height: '$11',
  fontFamily: '$sans',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$divider',
  borderRadius: '$md',
  color: '$typeHeading',
  backgroundColor: '$whiteText',
  transition: '$default',
  minWidth: '$48',

  [`${StyledButton}`]: {
    transform: 'scale(0.9)',
  },

  variants: {
    disabled: {
      true: {
        color: '$disabledText',
        backgroundColor: '$gray20',
      },
    },
    isErrored: {
      true: {
        borderColor: '$danger',
        '&:focus-within': {
          borderColor: '$danger',
        },
      },
    },
    isDarkTheme: {
      true: {
        [`${StyledSearchFieldInput}`]: {
          color: '$tertiaryText',
          '&:focus': {
            borderColor: 'cdgBlue120',
            outline: 'none',
            boxShadow: 'none',
          },
        },
        '&:focus-within': {
          borderColor: '$cdgBlue120',
        },
      },
      false: {
        [`${StyledSearchFieldInput}`]: {
          '&:focus': {
            borderColor: 'cdgBlue',
            outline: 'none',
            boxShadow: 'none',
          },
        },
        '&:focus-within': {
          borderColor: '$cdgBlue',
        },
      },
    },
  },
})

export type SearchFieldVariantProps = VariantProps<
  typeof StyledSearchFieldInput
>
