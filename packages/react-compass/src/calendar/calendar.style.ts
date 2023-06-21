import {styled} from '../theme'

export const StyledCalendar = styled('div', {
  width: 'fit-content',
  backgroundColor: '$background',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
  borderRadius: '$md',
  padding: '$4',

  '& .calendar-footer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$2',
    paddingTop: '$6',
    marginTop: '$6',
    borderTop: '1px solid $gray60',
  },

  '& .calendar-footer button': {
    padding: '$1 $2_5',
    height: '$8',
    fontSize: '$label2',
  },
})
