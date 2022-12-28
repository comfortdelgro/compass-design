import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDropdown = styled('div', {
  // fontFamily: 'inherit',
  // fontWeight: '$medium',
  // color: '$info',
  // textDecoration: 'underline',
  // transition: '$default',
})

export type DropdownVariantProps = VariantProps<typeof StyledDropdown>
