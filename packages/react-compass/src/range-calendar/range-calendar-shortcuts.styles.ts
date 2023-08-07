import {styled} from '../theme'

export const StyledRangeCalendarShorcuts = styled('div', {
  padding: '$3 $4 $3 $4',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '193px',
  width: '100%',
  borderRight: '1px solid #F5F5F5',
})

export const StyledRangeCalendarShorcutsItem = styled('button', {
  margin: 0,
  padding: '$3 $4',
  width: '100%',
  maxWidth: '160px',
  fontSize: '$label1',
  textAlign: 'left',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: '$button',
  color: '$primaryText',

  '&:hover': {
    borderRadius: '6px',
    backgroundColor: '$gray20',
    fontWeight: 'bold',
  },

  '&:focus-visible': {
    outline: 'none',
    borderRadius: '6px',
    boxShadow: '0px 0px 0px 4px #F2F4F7',
  },

  '&:disabled': {
    backgroundColor: 'transparent',
    fontWeight: '$normal',
    cursor: 'not-allowed',
  },

  variants: {
    variants: {
      active: {
        backgroundColor: '$cdgBlue10',
        borderRadius: '6px',
        '&:focus-visible': {
          backgroundColor: '$cdgBlue10',
          boxShadow: '0px 0px 0px 4px #F2F4F7',
        },
      },
      inactive: {},
    },
  },

  defaultVariants: {
    variants: 'inactive',
  },
})
