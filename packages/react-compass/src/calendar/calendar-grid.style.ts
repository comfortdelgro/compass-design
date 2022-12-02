import {styled} from '../theme'

export const StyledCalendarGrid = styled('table', {
  marginTop: '8px',
  borderCollapse: 'collapse',

  '& .calendar-weekday': {
    fontSize: '12px',
    fontWeight: '$semibold',
    color: '$cdgBlue120',
  },

  '& th, & td': {
    width: '41px',
  },

  '& td': {
    height: '32px',
  },

  '& td > div': {
    display: 'flex',
    justifyContent: 'center',
  },
})
