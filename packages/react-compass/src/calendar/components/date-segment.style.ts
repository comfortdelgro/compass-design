import {styled} from '../../theme'

export const StyledDateSegment = styled('div', {
  color: '$gray50',
  fontSize: '14px',
  fontWeight: '$semibold',
  textTransform: 'uppercase',
  letterSpacing: '1px',

  '&:focus-visible': {
    padding: '2px 6px',
    outline: '$cdgBlue solid 2px',
  },

  '&.number': {
    color: '$black',
  },
})
