import {styled} from '../theme'

export const StyledCalendarGrid = styled('table', {
  marginTop: '$2',
  borderCollapse: 'collapse',

  '& .calendar-weekday': {
    fontSize: '$label2',
    fontWeight: '$semibold',
    color: '$cdgBlue120',
  },

  '& th, & td': {
    width: '$10',
  },

  '& td': {
    height: '$8',
  },

  '& td > div': {
    display: 'flex',
    justifyContent: 'center',
  },
})

export const StyledTRowPlaceholder = styled('tr', {
  height: '$8',
})
