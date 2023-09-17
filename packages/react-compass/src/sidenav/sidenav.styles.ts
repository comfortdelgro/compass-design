import {styled} from '../theme'

export const StyledSidenav = styled('div', {
  width: '$17',
  padding: '$2 0',
  backgroundColor: '$background',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.25s',

  [`& .cdg-sidenav-item`]: {
    marginBottom: '$4',
  },

  [`& .cdg-sidenav-item:last-child`]: {
    marginBottom: '0',
  },

  variants: {
    size: {
      full: {
        width: '$67_5',
        filter:
          'drop-shadow(0px 0.6px 1.8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3.2px 7.2px rgba(0, 0, 0, 0.13))',
      },
      default: {},
    },
  },
})
