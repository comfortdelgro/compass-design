import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTextFieldWrapper = styled('div', {
  width: '100%',
  display: 'block',
  fontFamily: '$sans',
})

export const StyledTextFieldLabel = styled('label', {
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

  variants: {
    isDisabled: {
      true: {
        color: '$disabledText',
      },
    },
  },
})

export const StyledTextFieldBox = styled('div', {
  width: '100%',
  height: '$11',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$divider',
  borderRadius: '$md',
  color: '$typeHeading',
  backgroundColor: '$whiteText',
  transition: '$default',

  '&:focus-within': {
    borderColor: '$cdgBlue',
    '.left-icon': {
      color: '$cdgBlue',
    },
  },

  '.left-icon, .right-icon': {
    color: '$typeHeading',
    transition: '$default',
  },

  '.left-icon': {
    width: '$5',
    height: '$5',
    marginLeft: '$2_5',
    marginRight: '-$1',
  },

  '.prefix': {
    minWidth: '$5',
    height: '$5',
    marginLeft: '$2_5',
    marginRight: '-$1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '.right-icon': {
    width: '$4',
    height: '$4',
    marginRight: '$2_5',
    marginLeft: '-$1',
  },

  '.password-icon': {
    fontSize: '0.8em',
    marginRight: '$2_5',
    marginLeft: '-$1',
  },

  variants: {
    isDisabled: {
      true: {
        color: '$disabledText',
        backgroundColor: '$gray20',

        '.left-icon, .right-icon': {
          color: '$disabledText',
        },
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
  },
})

export const StyledTextField = styled('input', {
  width: '100%',
  fontSize: '$label1',
  fontWeight: '$medium',
  lineHeight: '$normal',
  padding: '$1_5 $3',
  border: 0,
  borderRadius: '$md',
  backgroundColor: 'transparent',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '#B4B4B4',
    fontSize: '$label1',
    fontWeight: '$semibold',
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

export type TextFieldVariantProps = VariantProps<typeof StyledTextField>
