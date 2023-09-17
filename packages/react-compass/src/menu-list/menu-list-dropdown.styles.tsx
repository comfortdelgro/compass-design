import { styled } from '../theme'

export const StyledMenuListDropdown = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$gray100',
  width: '100%',
  gap: '$1'
})

export const StyledMenuListDropdownBody = styled('div', {
  flexDirection: 'column',
  variants: {
    openState: {
      open: {
        display: 'flex',
        gap: '$1'
      },
      close: {
        display: 'none',
      },
    },
  },
})
