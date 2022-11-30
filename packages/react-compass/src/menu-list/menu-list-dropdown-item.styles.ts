import {styled} from '../theme'
import {StyledMenuListDropdownHeader} from './menu-list-dropdown-header.styles'

export const StyledMenuListDropdownItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  color: '$gray80',
  padding: '$2 $3',
  borderRadius: '$md',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$background',
  },

  '& .menu-list-dropdown-item-icon': {
    marginRight: '$2',
    width: '$4',
    height: '$4',
  },

  variants: {
    active: {
      active: {
        backgroundColor: '$background',
      },
      default: {},
    },
    nested: {
      nested: {
        paddingTop: 0,
        '&:hover': {
          backgroundColor: 'inherit',
        },
        [`& ${StyledMenuListDropdownHeader}`]: {
          padding: 0,
        },
      },
      default: {},
    },
  },
})
