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

export const StyledTextarea = styled('textarea', {
  fontSize: '$label1',
  fontWeight: '$medium',
  lineHeight: '$normal',
  padding: '$1_5 $3',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '$md',
  color: '$typeHeading',
  backgroundColor: '$whiteText',
  transition: 'border-color 250ms ease 0s',

  '&:focus': {
    outline: 'none',
    borderColor: '$cdgBlue',
  },

  '&:disabled': {
    cursor: 'not-allowed',
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
