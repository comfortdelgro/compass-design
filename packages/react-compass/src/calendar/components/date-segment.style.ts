import {styled} from '../../theme'

export const StyledDateSegment = styled('div', {
  color: '$gray50',
  fontSize: '$body3',
  fontWeight: '$semibold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  '&:focus-visible': {
    padding: '$0_5 0',
    outline: 'none',
    color: '$whiteText !important',
    backgroundColor: '$cdgBlue',
  },

  '&.number': {
    color: '$black',
  },
})
