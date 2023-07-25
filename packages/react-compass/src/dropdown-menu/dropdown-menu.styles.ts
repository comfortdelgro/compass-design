import {styled} from '../theme'

const dropdownMenuBoxshadow = {
  position: 'relative',
  padding: '$2 0',
  borderRadius: '$md',
  width: 'fit-content',
  height: 'fit-content',
  minWidth: '10rem',
  background: '$background',
  listStyleType: 'none',
  margin: '0',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  ul: {
    overscrollBehavior: 'contain',
    maxHeight: '$64',
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
    '&:focus': {
      outline: 'none',
    },
  },
}

export const StyledDropdownMenu = styled('div', {
  position: 'relative',
})

export const StyledDropdownMenuToggle = styled('div', {})

export const StyledDropdownMenuItem = styled('li', {
  position: 'relative',
  fontSize: '14px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  cursor: 'pointer',
  '& > *': {
    color: '$gray90',
  },
  '.cdg-arrow-right-icon': {
    width: '16px',
    height: '16px',
  },
  variants: {
    isDisabled: {
      true: {
        backgroundColor: '$gray20',
        color: '$disabledText',
        cursor: 'not-allowed !important',
        '&:hover': {
          color: '$disabledText',
          '& > .cdg-arrow-right-icon': {
            color: '$disabledText',
          },
        },
      },
    },
    isActived: {
      true: {
        backgroundColor: '$cdgBlue20',
      },
    },
  },
  '&:hover > .cdg-dropdown-multilevel-submenu, &:focus > .cdg-dropdown-multilevel-submenu':
    {
      display: 'block',
    },
  '&:hover': {
    color: '$cdgBlue100',
    '& > .cdg-arrow-right-icon': {
      color: '$cdgBlue100',
    },
  },
})

export const StyledDropdownMenuMenu = styled('ul', {
  ...dropdownMenuBoxshadow,
})

export const StyledDropdownMenuSubmenu = styled('ul', {
  ...dropdownMenuBoxshadow,
  display: 'none',
  position: 'absolute',
  left: '100%',
  top: '0',
  '&:hover > .cdg-dropdown-multilevel-submenu': {
    display: 'block',
  },
})

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  width: 'fit-content',
  height: 'fit-content',
  minWidth: '100%',
})
