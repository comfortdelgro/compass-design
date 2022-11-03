import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledBreadcrumbItem = styled('span', {
  textDecoration: 'none',
  transition: '$default',

  variants: {
    active: {
      true: {
        color: '$typeHeading',
      },
      false: {
        color: '$info',
      },
    },
    disabled: {
      true: {
        color: '$disabledText',
        cursor: 'not-allowed',
      },
    },
  },
})

export type BreadcrumbItemVariantProps = VariantProps<
  typeof StyledBreadcrumbItem
>
