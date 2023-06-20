import { styled } from '../theme'
import { StyledMenuListDropdownHeader } from './menu-list-dropdown-header.styles'




export const StyledMenuListDropdownItem = styled('div', {
  minHeight: '$10',
  display: 'flex',
  flexDirection: 'row',
  color: '$gray80',
  padding: '$2 $3',
  borderRadius: '$md',
  cursor: 'pointer',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '$background',
  },

  '&:focus-visible': {
    outline: '$cdgBlue80 solid 2px',
  },

  '& svg': {
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
    disabled: {
      true: {
        color: '$gray50',
        '& svg': {
          color: '$gray50',
        },
        '&:hover': {
          backgroundColor: 'inherit',
          cursor: 'not-allowed',
        },
      },
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
