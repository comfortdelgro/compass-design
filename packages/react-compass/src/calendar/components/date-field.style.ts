import {styled} from '../../theme'
import {StyledDateSegment} from './date-segment.style'

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
    minWidth: '197px',
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

  '& .toggle-calendar-button .toggle-calendar-icon': {
    width: '12px',
    height: '12px',
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        '& .date-field-input': {
          backgroundColor: '$gray20',
        },
        [`& ${StyledDateSegment}`]: {
          color: '$gray60',
        },
      },
    },

    isInvalid: {
      true: {
        '& .date-field-input': {
          borderColor: '$danger',
        },
      },
    },
  },
})
