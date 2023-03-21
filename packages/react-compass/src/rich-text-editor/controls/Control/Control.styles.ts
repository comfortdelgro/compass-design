import {styled} from '../../../theme'
import {VariantProps} from '../../../utils/stitches.types'

export const StyledControl = styled('button', {
  position: 'relative',
  flexShrink: 0,
  fontFamily: '$sans',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  backgroundColor: '#f3f2f1 !important',
  display: 'inline-flex',
  alignItems: 'center',
  width: 28,
  height: 28,
  justifyContent: 'center',
  padding: 0,
  margin: '0 8px',
  float: 'left',
  '&:hover': {
    backgroundColor: '#E1DFDD !important',
    color: '#000000',
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
        backgroundColor: '#605E5C !important',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#605E5C !important',
          color: '#FFFFFF',
        },
      },
    },
  },
})

export type ControlVariantProps = VariantProps<typeof StyledControl>
