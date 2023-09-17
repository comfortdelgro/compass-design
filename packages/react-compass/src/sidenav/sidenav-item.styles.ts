import { styled } from '../theme'

export const StyledSidenavItem = styled('div', {
  color: '$gray80',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  height: '$10',
  cursor: 'pointer',
  padding: '0 $4',
  overflow: 'hidden',

  '& svg': {
    width: '$5',
    height: '$5',
    marginLeft: '$2_5',
  },

  '&:hover': {
    color: '$cdgBlue',
  },

  '& .cdg-sidenav-item-icon': {
    width: '$13',
  },

  '& .cdg-sidenav-item-title': {
    fontSize: '$body3',
    fontWeight: '$semibold',
    marginLeft: '$2_5',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '& .cdg-sidenav-item-title > *': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  variants: {
    active: {
      active: {
        '&': {
          color: '$cdgBlue',
        },

        '&:before': {
          content: '',
          position: 'absolute',
          left: '$4',
          top: 0,
          height: '100%',
          width: '3px',
          backgroundColor: 'currentColor',
        },
      },
      default: {},
    },
  },
})
