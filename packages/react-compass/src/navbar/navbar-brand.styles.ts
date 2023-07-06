import {styled} from '../theme'

export const StyledNavbarBrand = styled('div', {
  color: '$whiteText',
  '& .navbar-brand-title': {
    fontSize: '$4',
    fontWeight: '$semibold',
    color: 'inherit',
    margin: 0,
  },

  variants: {
    hiddenOnMobile: {
      true: {
        '&': {
          '@media screen and (max-width: 1199px)': {
            display: 'none',
          },
        },
      },
      false: {},
    },
  },

  defaultVariants: {
    hiddenOnMobile: 'false',
  },
})
