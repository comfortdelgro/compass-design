import {StyledButton} from '../button/button.styles'
import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSearchFieldInput = styled('input', {
  width: '100%',
  fontSize: '$label1',
  fontWeight: '$semibold',
  lineHeight: '$normal',
  padding: '0',
  border: 0,
  borderRadius: '$md',
  backgroundColor: 'transparent',
  '&::placeholder': {
    color: '$placeholder',
    fontSize: '$label1',
    fontWeight: '$semibold',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const StyledSearchFieldBox = styled('div', {
  display: 'flex',
  height: '$8',
  padding: '0 $4',
  gap: '$2',
  fontFamily: '$sans',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: '$light',
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

  '.cdg-searchfield-button': {
    padding: '0',
    width: '$6',
    height: '$6',
  },

  '.cdg-searchfield-button .children svg': {
    width: '$4',
    height: '$4',
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
        borderWidth: '$medium',
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
    h5: {
      true: {
        flexDirection: 'row-reverse',
        gap: '$2',
        padding: '$2 $4',
        borderRadius: '$lg',
        height: '$12',
        [`${StyledButton}`]: {
          padding: 0,
          color: '$grayShades60',
        },
        [`${StyledSearchFieldInput}`]: {
          padding: 0,
          '&::placeholder': {
            fontSize: '$3_5',
            fontStyle: 'normal',
            fontWeight: '$medium',
            lineHeight: '20px',
          },
        },
      },
      false: {
        flexDirection: 'row',
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
