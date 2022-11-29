import {styled} from '../theme'

export const StyledFooter = styled('div', {
  width: '100%',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '56px',
  padding: '32px 64px',
  '@mobile': {
    gap: '24px',
    padding: '24px 16px',
  },
})
