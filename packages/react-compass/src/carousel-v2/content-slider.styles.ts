import {styled} from '../theme'

export const StyledCarouselSlider = styled('div', {
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  containerType: 'inline-size',
  containerName: 'contentSlider',
  minWidth: '0',
  minHeight: '0',
  '&.floating-slide': {
    '.content-slider-container': {
      height: '100%',
    },
  },

  '&.effect-slide': {
    userSelect: 'none',
    '.content-slider-container': {
      overflow: 'hidden',
      display: 'flex',
    },
    '.slider-scroller': {
      display: 'flex',
      transition: '$default',
      touchAction: 'none',
      minWidth: '0',
      '-webkit-transform-style': 'preserve-3d',
      '-webkit-backface-visibility': 'hidden',
    },
    '.slider-slide': {
      position: 'relative',
      width: '100%',
      flexShrink: '0',
      opacity: '1',
    },
  },

  '.content-slider-container': {
    minWidth: '0',
    minHeight: '0',
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
      height: 'auto',
    },
    '.content-slider-bottom-nav': {
      left: '20px',
      right: '20px',
      bottom: '20px',
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

export const StyledCarouselSliderMobile = styled('div', {
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
  '&.content-slider-mobile-mode .content-slider-bottom-nav': {
    position: 'relative',
    zIndex: 2,
    inset: 'unset',
    bottom: '30px',
    height: 0,
    width: '100%',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  '&.content-slider-mobile-mode > .slide-body': {
    display: 'flex',
    flexDirection: 'column',
    background: '$cdgBlue100',
    padding: '24px 16px',
    overflow: 'hidden',
    gap: '8px',
    position: 'static',
    inset: 'unset',
    '.content-slider-title': {
      fontSize: '24px',
      lineHeight: '30px',
      margin: '0',
    },
    '.content-slider-description': {
      fontSize: '14px',
      margin: '0',
    },
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
      height: '382px',
    },
    '.content-slider-bottom-nav': {
      top: 'calc(100% - 30px)',
    },
  },
})

export const StyledCarouselSliderContainer = styled('div', {
  height: '100%',
})

export const StyledCarouselSliderBottomNav = styled('div', {
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

export const StyledCarouselSliderDots = styled('div', {
  display: 'flex',
  gap: '10px',
})

export const StyledCarouselSliderDot = styled('div', {
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

export const StyledCarouselSliderContentItem = styled('div', {
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
      inset: 0,
    },
    '.slide-background': {
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

export const StyledCarouselSliderImageItem = styled('img', {
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

export const StyledCarouselSliderNav = styled('div', {
  position: 'absolute',
  top: '50%',
  padding: '7px 12px',
  transform: 'translateY(-50%)',
  color: '$whiteText',
  fontSize: '30px',
  cursor: 'pointer',
  borderRadius: '30px',
  zIndex: '2',
  lineHeight: '0',
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

export const StyledCarouselSliderNext = styled(StyledCarouselSliderNav, {
  right: '10px',
  '&.text': {
    transform: 'rotate(90deg)',
  },
})

export const StyledCarouselSliderPrev = styled(StyledCarouselSliderNav, {
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
