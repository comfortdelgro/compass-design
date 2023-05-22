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
    padding: '0 0 0 $4',
    backgroundColor: '$background',
    border: '1px solid $gray30',
    borderRadius: '$md',
  },

  '& .date-field-input.mobile:active': {
    backgroundColor: '$gray60',
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

export const StyledLabelNecessity = styled('span', {
  variants: {
    isError: {
      true: {
        color: '$danger',
      },
    },
    isText: {
      true: {
        fontSize: '$label2',
      },
    },
  },
})

export const StyledExpandButton = styled('button', {
  border: 'none',
  margin: '0',
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  lineHeight: 'normal',
  WebkitFontSmoothing: 'inherit',
  MozOsxFontSmoothing: 'inherit',
  WebkitAppearance: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '$2 $4',

  '&:focus-visible': {
    outline: '2px solid $cdgBlue80',
    borderRadius: '2px',
  },
})

export const StyledTextFieldHelperText = styled('div', {
  fontSize: '$label2',
  fontWeight: '$medium',
  transition: '$default',
  marginTop: '$1',
  color: '$gray70',

  variants: {
    error: {
      true: {
        color: '$danger',
      },
    },
  },
})
