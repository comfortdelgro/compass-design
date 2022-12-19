import {StyledButton} from '../button/button.styles'
import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSearchFieldBox = styled('div', {
  display: 'flex',
  fontFamily: '$sans',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: '$medium',
  borderStyle: 'solid',
  borderColor: '$divider',
  borderRadius: '$md',
  color: '$typeHeading',
  backgroundColor: '$whiteText',
  transition: '$default',
  minWidth: '$48',

  '&:focus-within': {
    borderColor: '$cdgBlue',
  },

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

export const StyledSearchFieldInput = styled('input', {
  fontSize: '$label1',
  fontWeight: '$medium',
  lineHeight: '$normal',
  padding: '$0_5 $2',
  border: 0,
  borderRadius: '$md',
  backgroundColor: 'transparent',
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export type SearchFieldVariantProps = VariantProps<
  typeof StyledSearchFieldInput
>
