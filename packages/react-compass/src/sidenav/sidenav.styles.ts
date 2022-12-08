import {styled} from '../theme'

export const StyledSidenav = styled('div', {
  width: '$18',
  padding: '$4 0',
  backgroundColor: '$darkerBg',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.25s',

  [`& > :not(:last-child)`]: {
    marginBottom: '$5',
  },

  variants: {
    size: {
      full: {
        width: '$72',
        minWidth: '$72',
        filter:
          'drop-shadow(0px 0.6px 1.8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3.2px 7.2px rgba(0, 0, 0, 0.13))',
      },
      default: {},
    },
  },
})
