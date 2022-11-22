/* eslint-disable prettier/prettier */
import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSubBannerImage = styled('img', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // img
  width: '100%',
  height: '64.67%',
})

export const StyledSubBannerBottom = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // sub-banner bottom
  width: '100%',
  height: '35.33%',
  backgroundColor: '$cdgBlue',

  // position title & description
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.375rem',
})

export const StyledSubBannerTitle = styled('h1', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // font style
  fontFamily: '$sans',
  fontSize: '$header3',
  color: '$whiteText',
  lineHeight: '$normal',
  fontWeight: '$semibold',
})

export const StyledSubBannerDescription = styled('p', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // font style
  fontFamily: '$sans',
  fontSize: '$3_5',
  color: '$whiteText',
  lineHeight: '$lineHeights$normal',
  fontWeight: '$fontWeights$normal',
})

export const StyledBottomContentContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // content container
  marginLeft: '$4',
})

export const StyledSubBanner = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // container
  height: '$108',
  width: '$80',
  display: 'flex',
  flexDirection: 'column',

  // Variants
  variants: {
    variant: {
      primary: {},
      secondary: {
        position: 'relative',
        [`& ${StyledSubBannerImage}`]: {
          position: 'absolute',
          height: '100%',
          zIndex: -1,
        },
        [`& ${StyledSubBannerBottom}`]: {
          display: 'none',
        },
        [`& ${StyledBottomContentContainer}`]: {
          position: 'absolute',
          bottom: '$2',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type SubBannerVariantProps = VariantProps<typeof StyledSubBanner>
