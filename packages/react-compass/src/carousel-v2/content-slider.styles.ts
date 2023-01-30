import {styled} from '../theme'

export const StyledContentSlider = styled('div', {
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  containerType: 'inline-size',
  containerName: 'contentSlider',
  '.content-slider-container': {
    height: '512px',
  },

  '@container contentSlider (max-width: 1199px)': {
    '.content-slider-title': {
      fontSize: '36px',
      lineHeight: '44px',
    },
  },

  '@container contentSlider (min-width: 769px)': {
    '.slider-slide button.secondary': {
      background: '$whiteText',
    },
  },

  '@container contentSlider (max-width: 768px)': {
    '.content-slider-container': {
      position: 'relative',
      height: '412px',
    },
    '.content-slider-bottom-nav': {
      left: '20px',
      right: '20px',
      bottom: 'auto',
      top: '384px',
    },
    '.slide-mask': {
      display: 'none',
    },
    '.slider-slide': {
      display: 'flex',
      flexDirection: 'column',
    },
    '.slider-slide .slide-body': {
      flex: 1,
      display: 'flex',
      bottom: '40px',
      right: '0',
      left: '0',
      top: '0',
      gap: '8px',
    },
    '.slide-button-row': {
      margin: '0 16px',
    },
    '.slider-slide button': {
      fontSize: '16px',
      lineHeight: '24px',
    },
    '.slide-background': {
      height: '100%',
    },
    '.content-slider-controls': {
      display: 'none',
    },
    '.content-slider-title': {
      fontSize: '24px',
      lineHeight: '30px',
      margin: '0 16px',
    },
    '.content-slider-description': {
      fontSize: '14px',
      margin: '0 16px',
    },
  },
})

export const StyledContentSliderContainer = styled('div', {
  height: '100%',
})

export const StyledContentSliderBottomNav = styled('div', {
  position: 'absolute',
  bottom: '70px',
  left: '100px',
  right: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&.use-socials': {
    justifyContent: 'space-between',
  },
})

export const StyledSliderSocials = styled('div', {
  display: 'flex',
  color: '$whiteText',
  gap: '18px',
  svg: {
    cursor: 'pointer',
  },
})

export const StyledContentSliderDots = styled('div', {
  display: 'flex',
  gap: '10px',
})

export const StyledContentSliderDot = styled('div', {
  display: 'inline-block',
  width: '8px',
  height: '8px',
  borderRadius: '6px',
  border: '1px solid $whiteText',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&.active': {
    background: '$cdgBlue100',
    width: '16px',
    transition: 'all 0.3s ease-in-out',
  },
})

export const StyledContentSliderContentItem = styled('div', {
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  objectFit: 'cover',
  transition: 'all 0.3s ease-in-out',
  '&.active': {
    opacity: 1,
    transition: 'all 0.3s ease-in-out',
  },
})

export const StyledContentSliderImageItem = styled('img', {
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  objectFit: 'cover',
  transition: 'all 0.3s ease-in-out',
  '&.active': {
    opacity: 1,
    transition: 'all 0.3s ease-in-out',
  },
})

export const StyledContentSliderNav = styled('div', {
  position: 'absolute',
  top: '50%',
  padding: '7px 12px',
  transform: 'translateY(-50%)',
  color: '$whiteText',
  fontSize: '30px',
  cursor: 'pointer',
  borderRadius: '30px',
  '&:active': {
    background: 'rgba(125,125,125, 0.5)',
  },
})

export const StyledContentSliderNext = styled(StyledContentSliderNav, {
  right: '10px',
})

export const StyledContentSliderPrev = styled(StyledContentSliderNav, {
  left: '10px',
})

export const StyledSlideBackground = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const StyledSlideButtonRow = styled('div', {
  display: 'flex',
  marginTop: '24px',
  gap: '24px',
})

export const StyledSlideBody = styled('div', {
  position: 'absolute',
  inset: '56px 100px 100px 100px',
  color: '$whiteText',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 2,
  alignItems: 'flex-start',
  justifyContent: 'center',
  '&.start-start': {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  '&.center-start': {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  '&.end-start': {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  '&.end-center': {
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  '&.center-end': {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})

export const StyledSlideTitle = styled('h3', {
  fontSize: '56px',
  lineHeight: '84px',
  fontWeight: '700',
  margin: '0',
})

export const StyledSlideDescription = styled('p', {
  margin: '8px 0 0 0',
})

export const StyledSlideMask = styled('div', {
  position: 'absolute',
  inset: '0',
})
