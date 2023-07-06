import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledDropdownSection = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  // styling
  // variants: {
  //   isClickable: {
  //     true: {
  //       cursor: 'pointer',
  //       '&:hover': {
  //         backgroundColor: '$primaryLighter',
  //       },
  //     },
  //     false: {},
  //   },
  // },
})

export type DropdownItemVariantProps = VariantProps<
  typeof StyledDropdownSection
>
