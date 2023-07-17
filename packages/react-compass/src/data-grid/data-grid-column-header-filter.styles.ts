import {styled} from '../theme'

export const StyledFilterInput = styled('div', {
  position: 'absolute',
  right: `-200%`,
  zIndex: 99,
  textAlign: 'left',
  fontSize: '$label1',
  display: 'none',
  variants: {
    isFiltering: {
      true: {
        display: 'block',
      },
    },
  },
})
export const StyledFilter = styled('div', {
  position: 'relative',
  color: '$secondaryText',
})
