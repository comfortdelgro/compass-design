import {styled} from '../theme'

export const StyledRangeDatepicker = styled('div', {
  width: 'fit-content',
  '@max_768': {
    '& .date-range-fields': {
      flexDirection: 'column',
      gap: '$6',
    },

    '&': {
      width: '100%',
    },
  },
})

export const StyledDateRangeInputsWrapper = styled('div', {
  '& .date-range-fields': {
    display: 'flex',
    gap: '$6',
  },
})
