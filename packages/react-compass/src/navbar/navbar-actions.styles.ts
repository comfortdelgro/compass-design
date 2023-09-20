import {styled} from '../theme'

export const StyledNavbarActions = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& .default-navbar-actions': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '$2',
    margin: '0 $4',
  },

  '& .has-alternative': {
    '@media screen and (max-width: 768px)': {
      display: 'none',
    },
  },

  '& .alternative-navbar-actions': {
    '@media screen and (min-width: 768px)': {
      display: 'none',
    },
  },
})
