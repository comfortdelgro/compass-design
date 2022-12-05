import {styled} from '../theme'

export const StyledRangeCalendar = styled('div', {
  width: 'fit-content',
  backgroundColor: '$background',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
  borderRadius: '$md',
  padding: '16px',

  '& .calendar-body': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
  },

  '& .calendar-footer': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '8px',
    marginTop: '24px',
    paddingTop: '24px',
    borderTop: '1px solid $gray40',
  },

  '& .calendar-footer .preview-date': {
    margin: 0,
    fontSize: '14px',
  },

  '& .calendar-footer button': {
    padding: '4px 10px',
    height: '32px',
    fontSize: '12px',
  },
})
