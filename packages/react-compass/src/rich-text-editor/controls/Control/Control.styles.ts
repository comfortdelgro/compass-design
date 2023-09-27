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
  backgroundColor: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  width: '$8',
  height: '$7',
  justifyContent: 'center',
  padding: 0,
  margin: '0 $2 $2 $2',
  float: 'left',
  color: '$gray110',
  '&:hover': {
    backgroundColor: '$gray40',
    color: '$gray110',
  },
  svg: {
    height: '$4',
    width: '$4',
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
