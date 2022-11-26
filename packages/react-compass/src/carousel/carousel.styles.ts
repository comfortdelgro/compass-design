/* eslint-disable prettier/prettier */
import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

// 0. Background image
export const StyledCarouselImage = styled('img', {
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

// 1. Content container (Big container for everthing elements of the carousel)
export const StyledContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Container
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '0',
})

// 1.1 Prev button container
export const StyledPrevContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Prev button container
  height: '100%',
  width: '8.92%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '& *': {
    color: '$whiteText',
    width: '$4',
    height: '$7_5',
  },
})

// 1.2 Next button container
export const StyledNextContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  cursor: 'pointer',
  // Prev button container
  height: '100%',
  width: '8.92%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  '& *': {
    color: '$whiteText',
    width: '$4',
    height: '$7_5',
  },
})

// 1.3 Main content container
export const StyledMainContentContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Prev button container
  // backgroundColor: 'blue', //test
  height: '100%',
  width: '82.16%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '$46',
})

// Child elements
export const StyledCarouselTitle = styled('h1', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // font style
  fontFamily: '$sans',
  fontSize: '$display1',
  color: '$whiteText',
  lineHeight: '$normal',
  fontWeight: '$bold',
  maxWidth: '$160',
  height: '$21',
  overflow: 'hidden',
})

export const StyledCarouselDescription = styled('p', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // font style
  fontFamily: '$sans',
  fontSize: '$body2',
  color: '$whiteText',
  lineHeight: '$normal',
  fontWeight: '$normal',
  maxWidth: '$160',
  height: '$14',
  overflow: 'hidden',
})

export const StyledCarouselButtonContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Button container
  height: '$14',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '$6',
})

export const StyledCarouselPaginationAndIconsContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Button container
  height: '$4',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-between',
  marginTop: '$14',
})

export const StyledCarouselPaginationContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Button container
  height: '100%',
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const StyledCarouselIconsContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // Button container
  height: '100%',
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$4_5',
  '& *': {
    color: '$background',
    cursor: 'pointer',
    width: '$3_5',
    height: '$3_5',
  },
})

export const StylePagination = styled('div', {
  // reset
  appearance: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // styling
  width: '$4',
  height: '$2',
  backgroundColor: '$cdgBlue100',
  borderRadius: '$full',
  border: '1px solid white',
  marginLeft: '$2_5',
  cursor: 'pointer',
  variants: {
    current: {
      true: {},
      false: {
        width: '$2',
        height: '$2',
        borderRadius: '$full',
        border: '1px solid white',
        marginLeft: '$2_5',
        cursor: 'pointer',
        backgroundColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    current: 'true',
  },
})

export const StyledCarousel = styled('div', {
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
    view: {
      desktop: {},
      mobile: {
        width: '$80',
        height: '$131_5',
        display: 'flex',
        flexDirection: 'column',
        [`& ${StyledCarouselIconsContainer}`]: {
          display: 'none',
        },
        [`& ${StyledPrevContainer}`]: {
          display: 'none',
        },
        [`& ${StyledNextContainer}`]: {
          display: 'none',
        },
        [`& ${StyledCarouselImage}`]: {
          width: '100%',
          height: '53.232%',
          position: 'static',
        },
        [`& ${StyledMainContentContainer}`]: {
          width: '100%',
          height: '25.475%',
          margin: '0',
          padding: '0',
          backgroundColor: '$cdgBlue',
          paddingLeft: '$4',
          paddingTop: '$6',
        },
        [`& ${StyledCarouselPaginationContainer}`]: {
          width: '100%',
          height: '$2_5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          background: 'transparent',
          position: 'absolute',
          top: '50%',
        },
        [`& ${StyledCarouselTitle}`]: {
          fontSize: '$header3',
          fontWeight: '$semibold',
          height: '$9',
          marginBotton: '$2',
        },
        [`& ${StyledCarouselDescription}`]: {
          fontSize: '$body3',
          fontWeight: '$normal',
          height: '$10',
        },
        [`& ${StyledCarouselButtonContainer}`]: {
          width: '100%',
          height: '$28',
          display: 'flex',
          gap: '0',
          flexDirection: 'column',
          '& *': {
            borderRadious: '0',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
//StyledCarouselButtonContainer
export type CarouselVariantProps = VariantProps<typeof StyledCarousel>
