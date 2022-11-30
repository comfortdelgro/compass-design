import {styled} from '../theme'

export const StyledSidenavItem = styled('div', {
  color: '$gray80',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  height: '$10',
  cursor: 'pointer',
  margin: '0 $4',
  overflow: 'hidden',

  '& svg': {
    width: '$5',
    height: '$5',
    marginLeft: '$2_5',
  },

  '&:hover': {
    color: '$cdgBlue',
  },

  '& .sidenav-item-title': {
    fontSize: '$body3',
    fontWeight: '#semibold',
    marginLeft: '$2_5',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '& .sidenav-item-title > *': {
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
          left: 0,
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
