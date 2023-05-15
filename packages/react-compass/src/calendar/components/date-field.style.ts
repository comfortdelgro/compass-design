import {styled} from '../../theme'
import {StyledDateSegment} from './date-segment.style'

export const StyledDateField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '$1',

  '& .date-field-label': {
    fontSize: '$body3',
    fontWeight: '$semibold',
    color: '$gray90',
  },

  '& .date-field-input': {
    minWidth: '$49',
    height: '$11',
    display: 'flex',
    alignItems: 'center',
    padding: '0 $4',
    backgroundColor: '$background',
    border: '2px solid $gray30',
    borderRadius: '$md',
  },

  '& .toggle-calendar-button': {
    marginLeft: 'auto',
  },

  '& .toggle-calendar-button .toggle-calendar-icon': {
    width: '$3',
    height: '$3',
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        '& .date-field-input': {
          backgroundColor: '$divider',
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
