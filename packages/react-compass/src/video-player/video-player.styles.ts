import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledVideoPlayer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',
  width: '100%',
  position: 'relative',
  minWidth: '$96',
  video: {
    width: '100%',
  },
})

export const StyledVolume = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '$4',
  maxHeight: '$49',
  height: '40%',
  borderRadius: '12px',
  background: '$gray80',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$4 $2 $2 $2',
  gap: '$2_5',
  '.slider-bar-volume-icon': {
    width: '$7',
    height: '$7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    cursor: 'pointer',
  },
  '@mobile': {
    padding: '$2 $1 $1 $1',
    '.slider-bar-volume-icon': {
      width: '$4',
      height: '$4',
    },
  },
})

export const StyledControllerWrapper = styled('div', {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '$2_5 $3_5 $5 $2_5',
  background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
  '.video-player-slide-bar': {
    width: '100%',
  },
})

export const StyledSlideBarWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$1',
  span: {
    fontSize: '$label2',
    fontWeight: '$semibold',
    color: '#FFFFFF',
  },
})

export const StyledButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2_5',
  '.slider-bar-button-main': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$1',
    position: 'relative',
    '.slider-bar-button-prev': {
      width: '$8',
      height: '$8',
      borderRadius: '$full',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '$background',
      cursor: 'pointer',
    },
    '.slider-bar-button-next': {
      width: '$8',
      height: '$8',
      borderRadius: '$full',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '$background',
      cursor: 'pointer',
    },
    '.slider-bar-button-play': {
      width: '$11',
      height: '$11',
      borderRadius: '$full',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '$background',
      cursor: 'pointer',
    },
    '.slider-bar-button-setting': {
      position: 'absolute',
      right: 'calc(-1 * ($8 + 10px))',
      width: '$8',
      height: '$8',
      borderRadius: '$full',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '$background',
      cursor: 'pointer',
    },
  },
})

export type ErrorVariantProps = VariantProps<typeof StyledVideoPlayer>
