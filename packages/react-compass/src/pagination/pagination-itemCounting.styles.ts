import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledPaginationItemCounting = styled('div', {
  fontWeight: '600',
})

export type PaginationVariantProps = VariantProps<
  typeof StyledPaginationItemCounting
>
