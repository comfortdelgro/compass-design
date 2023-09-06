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
  padding: '$8 $4',

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
  marginTop: '$1_5',
  padding: '0px',

  // font style
  fontFamily: '$sans',
  fontSize: '$label1',
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
  height: '$108_25',
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
          paddingInline: '$4',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type SubBannerVariantProps = VariantProps<typeof StyledSubBanner>
