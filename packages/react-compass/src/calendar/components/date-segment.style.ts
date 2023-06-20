import {styled} from '../../theme'

export const StyledDateSegment = styled('div', {
  color: '$gray50',
  fontSize: '$body3',
  fontWeight: '$semibold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  '&:focus': {
    boxShadow: 'none',
  },
  '&:focus-visible': {
    padding: '$0_5 0',
    outline: 'none',
    boxShadow: 'none',
    color: '$whiteText !important',
    backgroundColor: '$cdgBlue',
  },

  '&.number': {
    color: '$black',
  },
})
