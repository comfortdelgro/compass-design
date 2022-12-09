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

  [`& .interactive-list-header ${StyledAvatar}`]: {
    height: '32px',
    width: '32px',
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
    fontSize: '16px',
    color: '$gray90',
    lineHeight: '24px',
  },

  '& .interactive-list-description': {
    margin: 0,
    fontSize: '14px',
    color: '$gray70',
    lineHeight: '21px',
  },

  '& .interactive-list-icon-wrapper': {
    display: 'flex',
    alignItems: 'center',
  },

  '& .interactive-list-chevron-icon': {
    width: '16px',
    height: '26px',
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
