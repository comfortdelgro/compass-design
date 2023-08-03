import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledOtpSingleInput = styled('input', {
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  padding: '0px',
  lineHeight: '1em',
  width: '3rem !important',
  height: '3rem',
  margin: '0',
  fontSize: '2rem',
  textAlign: 'center',
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.2)',
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
      width: '2.5rem !important',
      height: '2.5rem',
      fontSize: '1.8rem',
      borderRadius: '6px',
    },
  },
})

export type OtpInputContainerVariantProps = VariantProps<
  typeof StyledOtpInputContainer
>
