import {styled} from '../theme'

export const StyledCalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& .calendar-header-left-side, & .calendar-header-right-side': {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  '& h2': {
    fontWeight: '$semibold',
    fontSize: '14px',
    color: '$cdgBlue100',
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
