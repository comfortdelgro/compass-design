import {styled} from '../theme'

export const StyledDatePicker = styled('div', {
  width: 'fit-content',
})

export const StyledDatePickerFieldWrapper = styled('div', {
  '& .date-range-fields': {
    display: 'flex',
    gap: '$6',
  },
})
