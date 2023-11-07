import {styled} from '../theme'

const StyledMonthYearPicker = styled('div', {
  width: '100%',
  minHeight: '168px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledWheelInner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  perspective: '1000px',
  transformStyle: 'preserve-3d',
  height: '16%',
  width: '100%',
  '.wheel__slides': {
    height: '100%',
    position: 'relative',
    width: '80%',

    '.wheel__slide': {
      alignItems: 'center',
      backfaceVisibility: 'hidden',
      '-webkit-backface-visibility': 'hidden',
      display: 'flex',
      fontSize: '20px',
      fontWeight: '400',
      height: '100%',
      width: '80%',
      position: 'absolute',
      justifyContent: 'flex-end',
    },
  },
  '.wheel__label': {
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: 1,
    marginTop: '1px',
    marginLeft: '5px',
  },
})

export const StyledWheel = styled('div', {
  display: 'block',
  color: '$blueShades100',
  height: '100%',
  overflow: 'visible',
  width: '100%',
  cursor: 'pointer',
  userSelect: 'none',
  '.wheel__shadow-top': {
    left: 0,
    height: 'calc(42% + 2px)',
    width: '100%',
    position: 'relative',
    marginTop: '-2px',
    zIndex: 5,
    borderBottom: '1px solid $grayShades20',
  },
  '.wheel__shadow-bottom': {
    left: 0,
    height: 'calc(42% + 2px)',
    width: '100%',
    position: 'relative',
    zIndex: 5,
    marginTop: '2px',
    borderBottom: 'none',
    borderTop: '1px solid $grayShades20',
  },
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
