/* eslint-disable prettier/prettier */
import {styled} from '../theme'

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
})

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

  // position content container
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
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

// export const StyledSubBannerBottomContentContainer = styled('div', {
//   // reset
//   appearance: 'none',
//   border: 'none',
//   boxSizing: 'border-box',
//   margin: '0px',
//   padding: '0px',

//   // content container
//   marginLeft: '$4',

//   [`${StyledSubBannerTitle}`]: {},
//   [`${StyledSubBannerDescription}`]: {},
// })
