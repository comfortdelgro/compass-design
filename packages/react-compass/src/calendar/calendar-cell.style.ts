import {styled} from '../theme'

export const StyledCalendarCell = styled('td', {
  cursor: 'pointer',

  '&.focused': {
    height: '100%',
    outline: '$cdgBlue120 solid 2px',
  },

  '&.today .calendar-cell-value': {
    color: '$cdgBlue',
    fontWeight: 'bold',
  },

  '&:hover': {
    backgroundColor: '$cdgBlue40 !important',
    borderRadius: '$md',
  },

  '&.selected': {
    backgroundColor: '$gray20',
  },

  '&.highlighted': {
    backgroundColor: '$cdgBlue100',
    borderRadius: '$md',
  },

  '&.unavailable .calendar-cell-value': {
    textDecoration: 'line-through',
    color: '$gray50',
  },

  '&.highlighted .calendar-cell-value': {
    color: '$whiteText',
  },

  '& .calendar-cell-value': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontSize: '$body3',
    color: '$gray100',
  },

  '& .calendar-cell-value.disabled': {
    cursor: 'not-allowed',
    color: '$gray50',
    background: '$background',
  },
})
