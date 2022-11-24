import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTab = styled('a', {
  fontFamily: 'inherit',
  fontWeight: '$medium',
  color: '$info',
  textDecoration: 'underline',
  transition: '$default',
})

export type TabVariantProps = VariantProps<typeof StyledTab>
