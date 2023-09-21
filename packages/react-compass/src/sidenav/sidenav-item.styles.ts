import {styled} from '../theme'

export const StyledSidenavItem = styled('div', {
  color: '$gray80',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  height: '$10',
  cursor: 'pointer',
  padding: '0 $2',
  overflow: 'hidden',

  '& svg': {
    width: '$6',
    height: '$6',
  },

  '&:hover': {
    color: '$cdgBlue',
  },

  '& .cdg-sidenav-item-icon': {
    minWidth: '$13',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '.cdg-sidenav-item-icon-wrapper': {
      width: '$10',
      height: '$10',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
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

        '& .cdg-sidenav-item-icon:before': {
          content: '',
          position: 'absolute',
          left: '0',
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
