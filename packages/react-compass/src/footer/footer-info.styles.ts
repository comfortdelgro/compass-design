import {styled} from '../theme'

export const StyledFooterInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',

    '& div:last-child': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
  },
})
