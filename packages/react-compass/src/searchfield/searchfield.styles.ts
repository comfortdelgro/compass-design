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
  outline: 'none',

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
            borderColor: '$cdgBlue120',
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
            borderColor: '$cdgBlue',
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

export const StyledTextFieldHelperText = styled('div', {
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

export const StyledSearchFieldBoxWrapper = styled('div', {
  width: '100%',
  display: 'block',
  fontFamily: '$sans',
})

export const StyledTextFieldLabel = styled('label', {
  fontSize: '$label1',
  fontWeight: '$semibold',
  marginBottom: '$2',
  display: 'inline-block',
  width: '100%',
  '.asterisk': {
    marginLeft: '$1',
    color: '$danger',
  },
})

export type SearchFieldVariantProps = VariantProps<
  typeof StyledSearchFieldInput
>
