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

  '& .calendar-header-middle': {
    fontWeight: '$semibold',
    fontSize: '$body3',
    color: '$cdgBlue100',
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },

  '& h2': {
    fontWeight: '$semibold',
    fontSize: '$body3',
    color: '$cdgBlue100',
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  '& .calendar-header-icon': {
    width: '$3',
    height: '$3',
  },
})
