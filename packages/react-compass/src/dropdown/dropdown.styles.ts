import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDropdownWrapper = styled('div', {
  // fontFamily: 'inherit',
  // fontWeight: '$medium',
  // color: '$info',
  // textDecoration: 'underline',
  // transition: '$default',
})

export const StyledDropdown = styled('div', {
  border: '1px solid #E6E6E6',
  display: 'flex',
  padding: '$3 $4',
  gap: '$1',
  input: {
    height: '$6',
    flexGrow: 1,
    border: 'none',
    padding: 0,
    margin: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  button: {
    flexShrink: 0,
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    svg: {
      width: '$6',
      height: '$6',
    },
  },
})

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
