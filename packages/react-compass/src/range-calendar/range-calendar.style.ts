import {styled} from '../theme'

export const StyledRangeCalendar = styled('div', {
  width: 'fit-content',
  backgroundColor: '$background',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
  borderRadius: '$md',
  padding: '$4',

  '& .calendar-body': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '$2',
  },

  '& .calendar-footer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '$6',
    paddingTop: '$6',
    borderTop: '1px solid $gray40',
    color: '$primaryText',
  },

  '& .calendar-footer .calendar-footer-right-side': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },

  '& .calendar-footer .preview-date': {
    margin: 0,
    fontSize: '$body3',
  },

  '& .calendar-footer button': {
    padding: '$1 $2_5',
    height: '$8',
    fontSize: '$label2',
  },

  variants: {
    variants: {
      extend: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        '& > div:nth-child(2)': {
          padding: '$4',
        },
      },
      basic: {},
    },
  },

  defaultVariants: {
    variants: 'basic',
  },
})

export const StyledExtendRangeCalendar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})
