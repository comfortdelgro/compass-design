import {styled} from '../theme'

export const StyledCalendar = styled('div', {
  backgroundColor: '$background',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
  borderRadius: '$md',
  padding: '16px',

  '& .calendar-footer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    paddingTop: '24px',
    marginTop: '24px',
    borderTop: '1px solid $gray60',
  },

  '& .calendar-footer button': {
    padding: '4px 10px',
    height: '32px',
    fontSize: '12px',
  },
})
