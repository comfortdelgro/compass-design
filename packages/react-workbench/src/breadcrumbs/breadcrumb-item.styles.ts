import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledBreadcrumbItem = styled('a', {
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
  },
})

export type BreadcrumbItemVariantProps = VariantProps<
  typeof StyledBreadcrumbItem
>
