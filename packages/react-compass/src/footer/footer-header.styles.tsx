import {styled} from '../theme'

export const StyledFooterHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@mobile': {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '24px',
  },
})
