import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledBannerImage = styled('img', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // img
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: -1,
})

export const StyledBannerImageFallback = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  //padding: '0px',

  // img
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: -1,
  backgroundColor: 'grey',
  padding: '1rem',
})

export const StyledBannerTitle = styled('h1', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // font style
  fontFamily: '$sans',
  fontSize: '$header0',
  color: '$whiteText',
  lineHeight: '$normal',
  fontWeight: '$bold',
})

export const StyledBannerDescription = styled('p', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // font style
  fontFamily: '$sans',
  fontSize: '$body3',
  color: '$whiteText',
  lineHeight: '$normal',
  fontWeight: '$normal',
})

export const StyledContentContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  height: '100%',
  width: '100%',

  //38.867
  // content container
  paddingLeft: '$26',
  paddingRight: '$48',
  paddingTop: '$50',
})

export const StyledBanner = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // container
  height: '$128',
  width: '$206',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  // Variants
  variants: {
    size: {
      sm: {
        width: '$206',
      },
      md: {
        width: '$269',
      },
      lg: {
        width: '$328',
      },
      full: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type BannerVariantProps = VariantProps<typeof StyledBanner>
