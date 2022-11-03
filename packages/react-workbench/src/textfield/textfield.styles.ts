import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTextfieldWrapper = styled('div', {
  display: 'block',
  fontFamily: '$sans',
})

export const StyledTextfieldLabel = styled('label', {
  fontSize: '$label1',
  fontWeight: '$medium',
  lineHeight: '$normal',
  display: 'block',
  marginBottom: '$1',
  color: '$gray90',

  variants: {
    disabled: {
      true: {
        color: '$disabledText',
      },
    },
  },
})

export const StyledTextfieldBox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: '$medium',
  borderStyle: 'solid',
  borderColor: 'transparent',
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

  '.right-icon': {
    width: '$4',
    height: '$4',
    marginRight: '$2_5',
    marginLeft: '-$1',
  },

  variants: {
    disabled: {
      true: {
        color: '$disabledText',
        backgroundColor: '$gray20',

        '.left-icon, .right-icon': {
          color: '$disabledText',
        },
      },
    },
    errored: {
      true: {
        borderColor: '$danger',

        '&:focus-within': {
          borderColor: '$danger',
        },
      },
    },
  },
})

export const StyledTextfield = styled('input', {
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
})

export const StyledTextfieldHelperText = styled('div', {
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

export type TextfieldVariantProps = VariantProps<typeof StyledTextfield>
