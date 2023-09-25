import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledFooter = styled('div', {
  width: '100%',
  backgroundColor: '$background',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '56px',
  padding: '32px 64px',
  variants: {
    color: {
      white: {
        backgroundColor: '$background',
        color: '$primaryText',
      },
      black: {
        backgroundColor: '$gray100',
        color: '$whiteText',
      },
      blue: {
        backgroundColor: '$cdgBlue100',
        color: '$whiteText',
      },
    },
  },
  '@tablet': {
    padding: '$8 $12',
  },
  '@mobile': {
    gap: '24px',
    padding: '24px 16px',
  },
})

export type FooterVariantProps = VariantProps<typeof StyledFooter>
