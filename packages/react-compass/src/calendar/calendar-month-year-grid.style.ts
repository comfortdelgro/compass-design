import {styled} from '../theme'

export const StyledCalendarMonthGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  marginTop: '12px',
})

export const StyledCalendarMonthYearCell = styled('button', {
  width: '94px',
  height: '47.5px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  fontSize: '$link3',
  color: '$primaryText',

  '&:hover, &:focus-visible': {
    backgroundColor: '$cdgBlue100',
    color: '$white',
    fontWeight: 'normal',
    outline: 'none',
  },

  '&:disabled, &:disabled:hover': {
    backgroundColor: 'inherit',
    color: '$gray50',
    cursor: 'not-allowed',
  },

  '&.highlighted': {
    color: '$cdgBlue100',
    fontWeight: 'bold',
  },

  '&.highlighted:hover': {
    color: '$white',
  },
})
