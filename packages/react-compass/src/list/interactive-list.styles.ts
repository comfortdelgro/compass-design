import {StyledAvatarGroup} from '../avatar/avatar-group.styles'
import {StyledAvatar} from '../avatar/avatar.styles'
import {styled} from '../theme'

export const StyledInteractiveList = styled('div', {
  padding: '$4',
  backgroundColor: '$background',
  borderRadius: '$md',

  '& .interactive-list-header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  [`& ${StyledAvatar}`]: {
    height: '$8',
    width: '$8',
  },

  [`.interactive-list-header ${StyledAvatarGroup}`]: {
    marginRight: '$1',
  },

  [`.interactive-list-header ${StyledAvatarGroup} ${StyledAvatar}`]: {
    marginRight: '-$1',
    fontSize: '1px',
  },

  '& .interactive-list-body': {
    marginTop: '$6',
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  '& .interactive-list-title': {
    margin: 0,
    fontSize: '$header5',
    color: '$gray90',
    lineHeight: '24px',
    fontWeight: 'bold',
  },

  '& .interactive-list-description': {
    margin: 0,
    fontSize: '$body3',
    color: '$gray70',
    lineHeight: '21px',
  },

  '& .interactive-list-icon-wrapper': {
    display: 'flex',
    alignItems: 'center',
  },

  '& .interactive-list-chevron-icon': {
    width: '$4',
    height: '$6_5',
    color: 'black',
  },

  variants: {
    variant: {
      dropdown: {
        display: 'flex',
        flexDirection: 'row',
        gap: '$2',

        '& .interactive-list-dropdown-body': {
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        },
      },
      default: {},
    },
  },
})
