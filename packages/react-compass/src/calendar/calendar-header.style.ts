import {styled} from '../theme'

export const StyledCalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& .calendar-header-left-side, & .calendar-header-right-side': {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    gap: '8px',
  },

  '& .calendar-header-right-side': {
    justifyContent: 'flex-end',
  },

  '& .calendar-header-middle': {
    fontWeight: '$semibold',
    fontSize: '$body3',
    color: '$cdgBlue100',
    backgroundColor: '$cdgBlue10',
    border: 'none',
    cursor: 'pointer',
    flex: 1,
    transition: '$button',
    borderRadius: '$md',
  },

  '& .calendar-header-middle:hover': {
    backgroundColor: '$cdgBlue20',
  },

  '& .calendar-header-middle:focus-visible': {
    border: '1px solid $cdgBlue',
    outline: 'none',
  },

  '& button': {
    padding: '8px',
    backgroundColor: '$primaryBg',
  },

  '& h2': {
    fontWeight: '$semibold',
    fontSize: '$body3',
    color: '$cdgBlue100',
    flex: 1,
    textAlign: 'center',
  },

  '& .calendar-header-icon': {
    width: '$3',
    height: '$3',
  },
})
