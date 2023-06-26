import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTextareaWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontFamily: '$sans',
  width: 'fit-content',

  '.word-count': {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
})

export const StyledTextAreaHelperText = styled('div', {
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
export const StyledTextAreaLabel = styled('label', {
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

export const StyledTextarea = styled('textarea', {
  fontSize: '$label1',
  minHeight: '$11',
  fontWeight: '$medium',
  lineHeight: '$normal',
  padding: '$1_5 $3',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$divider',
  borderRadius: '$md',
  color: '$tertiaryText',
  backgroundColor: '$gray20',
  transition: 'border-color 250ms ease 0s',

  '&:focus': {
    outline: 'none',
    borderColor: '$cdgBlue120',
  },

  '&:disabled': {
    cursor: 'not-allowed !important',
    backgroundColor: '$gray20',
    '*': {
      color: '$disabledText',
      cursor: 'not-allowed !important',
    },
  },

  variants: {
    isErrored: {
      true: {
        borderColor: '$danger',
        '&:focus': {
          borderColor: '$danger',
        },
      },
    },
  },

  defaultVariants: {
    isErrored: false,
  },
})

export type TextareaVariantProps = VariantProps<typeof StyledTextarea>
