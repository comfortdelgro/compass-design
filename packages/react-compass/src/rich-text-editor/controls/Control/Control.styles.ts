import { styled } from '../../../theme'
import { VariantProps } from '../../../utils/stitches.types'

export const StyledControl = styled('button', {
  position: 'relative',
  flexShrink: 0,
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  width: 28,
  height: 28,
  justifyContent: 'center',
  padding: 0,
  margin: '0 8px 4px 8px',
  float: 'left',
  color: '$gray110',
  '&:hover': {
    backgroundColor: '$gray40',
    color: '$gray110',
  },
  svg: {
    height: '18px',
  },
  '&:disabled': {
    backgroundColor: '$divider',
    color: '$disabledText',
    borderColor: '$divider',
    cursor: 'not-allowed',
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$gray80',
        color: '$white',
        '&:hover': {
          backgroundColor: '$gray80',
          color: '$white',
        },
      },
    },
  },
})

export type ControlVariantProps = VariantProps<typeof StyledControl>
