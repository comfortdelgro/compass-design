import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledOtpSingleInput = styled('input', {
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  padding: '0px',
  lineHeight: '1em',
  width: '3rem',
  height: '3rem',
  margin: '0',
  fontSize: '2rem',
  textAlign: 'center',
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.2)',

  '&[type=number]': {
    '-moz-appearance': 'textfield',

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const StyledOtpInputContainer = styled('div', {
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  padding: '0px',
  lineHeight: '1em',
  margin: '5% auto',
  display: 'flex',
  gap: '2rem',
  '@media screen and (max-width: 640px)': {
    gap: '1rem',
    input: {
      width: '2.5rem',
      height: '2.5rem',
      fontSize: '1.8rem',
      borderRadius: '6px',
    },
  },

  variants: {
    isMobile: {
      true: {
        margin: 0,

        [`${StyledOtpSingleInput}`]: {
          height: '$16',
          width: '$12',

          fontSize: '$label1',
          lineHeight: '$tight',

          borderRadius: '$lg',
          borderColor: '$grayShades20',
        },
      },
    },
  },
})

export type OtpInputContainerVariantProps = VariantProps<
  typeof StyledOtpInputContainer
>
