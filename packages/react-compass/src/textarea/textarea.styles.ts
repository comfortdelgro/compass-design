import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

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
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: '$divider',
  borderRadius: '$md',
  color: '$typeHeading',
  backgroundColor: '$whiteText',
  transition: 'border-color 250ms ease 0s',
  width: '100%',

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
        borderWidth: '$medium',
        '&:focus': {
          borderColor: '$danger',
        },
      },
    },

    resizable: {
      false: {
        resize: 'none',
      },
      true: {
        resize: 'both',
      },
    },
  },

  defaultVariants: {
    isErrored: false,
  },
})

export const StyledTextareaWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontFamily: '$sans',
  width: '100%',
  '.cdg-word-count': {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  variants: {
    isDarkTheme: {
      true: {
        [`${StyledTextarea}`]: {
          color: '$tertiaryText',
          backgroundColor: '$gray20',
          '&:focus': {
            outline: 'none',
            borderColor: '$cdgBlue120',
          },
        },
      },
      false: {
        [`${StyledTextarea}`]: {
          '&:focus': {
            outline: 'none',
            borderColor: '$cdgBlue',
          },
        },
      },
    },
    variant: {
      h5: {
        gap: '4px',
        [`${StyledTextAreaLabel}`]: {
          color: '$grayShades80',
          fontSize: '$label2',
          fontWeight: 500,
          marginBottom: 0,
        },
        [`${StyledTextarea}`]: {
          padding: '$3 $4',
          borderRadius: '$lg',
          border: '1px solid $grayShades20',
          backgroundColor: '$background',
          fontSize: '$label2',
          '&::placeholder': {
            fontSize: '$label2',
            fontWeight: 400,
            lineHeight: '$tight',
            color: '$placeholder',
          },
        },
        [`${StyledTextAreaHelperText}`]: {
          fontSize: '$label2',
          fontWeight: 500,
          lineHeight: 'normal',
          color: '$grayShades40',
          marginTop: 0,
        },
      },
    },
  },
})

export type TextareaVariantProps = VariantProps<typeof StyledTextarea>
export type TextareaVariantWrapperProps = VariantProps<
  typeof StyledTextareaWrapper
>
