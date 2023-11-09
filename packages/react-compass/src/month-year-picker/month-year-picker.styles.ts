import {styled} from '../theme'

const StyledMonthYearPicker = styled('div', {
  width: '100%',
  minHeight: '168px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const WheelSlides = styled('div', {
  height: '100%',
  position: 'relative',
})

export const WheelSlide = styled('div', {
  alignItems: 'center',
  backfaceVisibility: 'hidden',
  '-webkit-backface-visibility': 'hidden',
  display: 'flex',
  fontSize: '$5',
  fontWeight: '$normal',
  height: '100%',
  width: '80%',
  position: 'absolute',
  justifyContent: 'flex-end',
})

export const WheelLabel = styled('div', {
  fontWeight: '$',
  fontSize: '15px',
  lineHeight: 1,
  marginTop: '1px',
  marginLeft: '5px',
})

export const StyledWheelInner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  perspective: '1000px',
  transformStyle: 'preserve-3d',
  height: '16%',
  width: '100%',
})

export const WheelShadowTop = styled('div', {
  left: 0,
  height: 'calc(42% + 2px)',
  width: '100%',
  position: 'relative',
  marginTop: '-2px',
  zIndex: 5,
  borderBottom: '1px solid $grayShades20',
  background:
    'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.99) 6.67%, rgba(255, 255, 255, 0.96) 13.33%, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.85) 26.67%, rgba(255, 255, 255, 0.77) 33.33%, rgba(255, 255, 255, 0.67) 40%, rgba(255, 255, 255, 0.56) 46.67%, rgba(255, 255, 255, 0.44) 53.33%, rgba(255, 255, 255, 0.33) 60%, rgba(255, 255, 255, 0.23) 66.67%, rgba(255, 255, 255, 0.15) 73.33%, rgba(255, 255, 255, 0.08) 80%, rgba(255, 255, 255, 0.04) 86.67%, rgba(255, 255, 255, 0.01) 93.33%, rgba(255, 255, 255, 0.00) 100%)',
})
export const WheelShadowBottom = styled('div', {
  left: 0,
  height: 'calc(42% + 2px)',
  width: '100%',
  position: 'relative',
  zIndex: 5,
  marginTop: '2px',
  borderBottom: 'none',
  borderTop: '1px solid $grayShades20',
  background:
    'linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 0.99) 6.67%, rgba(255, 255, 255, 0.96) 13.33%, rgba(255, 255, 255, 0.92) 20%, rgba(255, 255, 255, 0.85) 26.67%, rgba(255, 255, 255, 0.77) 33.33%, rgba(255, 255, 255, 0.67) 40%, rgba(255, 255, 255, 0.56) 46.67%, rgba(255, 255, 255, 0.44) 53.33%, rgba(255, 255, 255, 0.33) 60%, rgba(255, 255, 255, 0.23) 66.67%, rgba(255, 255, 255, 0.15) 73.33%, rgba(255, 255, 255, 0.08) 80%, rgba(255, 255, 255, 0.04) 86.67%, rgba(255, 255, 255, 0.01) 93.33%, rgba(255, 255, 255, 0.00) 100%)',
})

export const StyledWheel = styled('div', {
  display: 'block',
  color: '$blueShades100',
  height: '100%',
  overflow: 'visible',
  width: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  variants: {
    perspective: {
      right: {
        [`${StyledWheelInner}`]: {
          perspectiveOrigin: 'calc(50% + 100px) 50%',
          transform: 'translateX(10px)',
          '-webkit-transform': 'translateX(10px)',
        },
      },
      left: {
        [`${StyledWheelInner}`]: {
          perspectiveOrigin: 'calc(50% - 100px) 50%',
          transform: 'translateX(-10px)',
          '-webkit-transform': 'translateX(-10px)',
        },
      },
      center: {},
    },
  },
})

export default StyledMonthYearPicker
