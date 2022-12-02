import {styled} from '../../theme'

export const StyledDateField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '4px',

  '& .date-field-label': {
    fontSize: '14px',
    fontWeight: '$semibold',
    color: '$gray90',
  },

  '& .date-field-input': {
    width: '197px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    backgroundColor: '$background',
    border: '1px solid $gray30',
    borderRadius: '$md',
  },

  '& .toggle-calendar-button': {
    marginLeft: 'auto',
  },
})
