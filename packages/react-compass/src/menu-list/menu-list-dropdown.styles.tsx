import {styled} from '../theme'

export const StyledMenuListDropdown = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$gray100',
  width: '100%',
})

export const StyledMenuListDropdownBody = styled('div', {
  variants: {
    openState: {
      open: {
        display: 'block',
      },
      close: {
        display: 'none',
      },
    },
  },
})
