import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'
import {StyledNavbarBrand} from './navbar-brand.styles'

export const StyledNavbar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '$2 $4',
  gap: '$4',

  variants: {
    color: {
      white: {
        backgroundColor: '#ffffff',
        [`& ${StyledNavbarBrand}`]: {
          color: '$gray100',
        },
      },
      blue: {
        backgroundColor: '$cdgBlue',
      },
    },
    variant: {
      website: {
        minHeight: '$22',
        padding: '$4 $16',
      },
      portal: {},
    },
  },
})

export type NavbarVariantProps = VariantProps<typeof StyledNavbar>
