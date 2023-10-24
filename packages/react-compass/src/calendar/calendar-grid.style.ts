import {styled} from '../theme'

export const StyledCalendarGrid = styled('table', {
  marginTop: '$2_5',
  borderCollapse: 'collapse',

  '& tbody:before': {
    content: '@',
    display: 'block',
    lineHeight: '10px',
    textIndent: '-99999px',
  },

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
