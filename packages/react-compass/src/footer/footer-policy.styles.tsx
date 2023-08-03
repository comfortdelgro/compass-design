import {styled} from '../theme'

export const StyledFooterPolicy = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 600,
  gap: '24px',
  marginTop: '16px',

  '@mobile': {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
})
