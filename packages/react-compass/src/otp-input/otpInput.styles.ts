import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledOtpSingleInput = styled('input', {
  //reset
  appearance: 'none',
  //border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  //margin: '0px',
  padding: '0px',
  lineHeight: '1em',

  //styling
  width: '3rem !important',
  height: '3rem',
  margin: '0 1rem',
  fontSize: '2rem',
  textAlign: 'center',
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const StyledOtpInputContainer = styled('div', {
  //reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  //margin: '0px',
  padding: '0px',
  lineHeight: '1em',

  //styling
  margin: '5% auto',
})

export type OtpInputContainerVariantProps = VariantProps<
  typeof StyledOtpInputContainer
>
