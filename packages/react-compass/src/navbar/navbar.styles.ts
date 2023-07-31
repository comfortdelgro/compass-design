import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'
import {StyledNavbarBrand} from './navbar-brand.styles'

export const StyledNavbar = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '$2 $4',
  gap: '$4',
  containerName: 'navbar',
  containerType: 'inline-size',

  variants: {
    color: {
      white: {
        backgroundColor: '$background',
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
        '@media screen and (max-width: 768px)': {
          padding: '$4 $12',
        },
        '@media screen and (max-width: 428px)': {
          padding: '$4 $4',
        },
      },
      portal: {},
    },
  },
})

export type NavbarVariantProps = VariantProps<typeof StyledNavbar>
