import {styled} from '../theme'

export const StyledFooterInfoSocial = styled('div', {
  display: 'flex',
  gap: '16px',
  marginBottom: '24px',
  '& svg': {width: '22px', height: '22px'},

  '@mobile': {
    gap: '32px',
  },
})
