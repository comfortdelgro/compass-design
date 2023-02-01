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

  '.slider-slide button.primary': {
    background: '$cdgBlue100',
  },

  '.slider-slide button.secondary': {
    background: '$whiteText',
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
      inset: '50px',
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
      svg: {
        height: '24px',
      },
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

export const StyledContentSliderMobile = styled('div', {
  '.slide-mobile-buttons': {
    flexDirection: 'column',
    gap: 0,
    marginTop: '0',
  },
  button: {
    '&.primary': {
      background: '$cdgBlue100',
    },
    borderRadius: '0',
    padding: '16px 24px',
  },
  '.content-slider-container': {
    height: 'auto',
  },
  '&.content-slider-mobile-mode .content-slider-bottom-nav': {
    top: '260px',
    zIndex: '2',
  },
  '&:not(.floating-content) .content-slider': {
    '.slide-body': {
      justifyContent: 'flex-start',
    },
  },
  '&.floating-content .content-slider': {
    '.slide-body': {
      position: 'absolute',
      height: 'auto',
      background: 'transparent',
      padding: '0',
      inset: '60px',
    },
    '.slide-background': {
      height: '412px',
    },
    '.content-slider-bottom-nav': {
      top: 'calc(100% - 30px)',
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
    width: '16px',
    height: '16px',
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
  transition: '$default',
  '&.active': {
    background: '$cdgBlue100',
    width: '16px',
    transition: '$default',
  },
})

export const StyledContentSliderContentItem = styled('div', {
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  objectFit: 'cover',
  transition: '$default',
  '&.active': {
    opacity: 1,
    transition: '$default',
  },

  '&.mobile-mode': {
    flex: '1',
    display: 'none',
    flexDirection: 'column',
    position: 'relative',
    '&.active': {
      display: 'flex',
    },
    '.slide-body': {
      display: 'flex',
      flexDirection: 'column',
      background: '$cdgBlue100',
      padding: '24px 16px',
      position: 'relative',
      overflow: 'hidden',
      gap: '8px',
      flex: 'unset',
      inset: 0,
    },
    '.slide-background': {
      height: '280px',
      flex: 'none',
    },
    '.carousel-mobile-inner-content': {
      alignItems: 'stretch',
      height: '100%',
      gap: '0',
      display: 'flex',
      flexDirection: 'column',
    },
    '.content-slider-dots': {
      position: 'absolute',
      top: '-20px',
      left: '16px',
      right: '16px',
      justifyContent: 'center',
    },
    '.content-slider-title': {
      margin: '0',
    },
    '.content-slider-description': {
      margin: '0',
    },
  },
})

export const StyledContentSliderImageItem = styled('img', {
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  objectFit: 'cover',
  transition: '$default',
  '&.active': {
    opacity: 1,
    transition: '$default',
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
  zIndex: '2',
  '&:active': {
    background: 'rgba(125,125,125, 0.5)',
  },
  '&.text': {
    borderRadius: '0',
    padding: '5px',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: '16px',
  },
  svg: {
    height: '36px',
  },
})

export const StyledContentSliderNext = styled(StyledContentSliderNav, {
  right: '10px',
  '&.text': {
    transform: 'rotate(90deg)',
  },
})

export const StyledContentSliderPrev = styled(StyledContentSliderNav, {
  left: '10px',
  '&.text': {
    transform: 'rotate(-90deg)',
  },
})

export const StyledSlideBackground = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const StyledMobileSlideBackground = styled('img', {
  width: '100%',
  flex: '1',
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
  '&.start-center': {
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  '&.center-center': {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '&.end-center': {
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  '&.start-end': {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    textAlign: 'right',
  },
  '&.center-end': {
    alignItems: 'flex-end',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '&.end-end': {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
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
