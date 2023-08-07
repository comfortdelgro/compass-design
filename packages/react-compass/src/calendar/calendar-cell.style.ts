import {styled} from '../theme'

export const StyledCalendarCell = styled('td', {
  cursor: 'pointer',

  '.calendar-cell-value:focus-visible': {
    outline: '$cdgBlue100 solid 2px',
    borderRadius: '$md',
  },

  '&.focused': {
    height: '100%',
    outline: '$cdgBlue120 solid 2px',
  },

  '&.today .calendar-cell-value': {
    color: '$cdgBlue',
    fontWeight: 'bold',
  },

  '&.selected': {
    backgroundColor: '$gray20',
  },

  '&.highlighted': {
    backgroundColor: '$cdgBlue100',
    borderRadius: '$md',
  },

  '&.highlighted .calendar-cell-value': {
    color: '$whiteText',
  },

  '&:hover': {
    backgroundColor: '$cdgBlue40',
    borderRadius: '$md',
  },

  '&:hover .calendar-cell-value, &.highlighted .calendar-cell-value:hover': {
    color: '$whiteText',
  },

  '& .calendar-cell-value': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontSize: '$body3',
    color: '$primaryText',
  },

  '& .calendar-cell-value.disabled, &.unavailable .calendar-cell-value': {
    cursor: 'not-allowed',
    color: '$gray50',
    background: '$background',
  },
})
